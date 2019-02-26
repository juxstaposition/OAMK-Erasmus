import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo';

let currentData = parseInt("0");
let speedData = [0];

export default class AccelerometerSensor extends React.Component {
  state = {
    accelerometerData: {}
  }
   

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }

  _x1 = () => {
    Accelerometer.setUpdateInterval(250); 
  }

  _x2 = () => {
    Accelerometer.setUpdateInterval(200);
  }
  _x3 = () => {
    Accelerometer.setUpdateInterval(150);
  }


  _subscribe = () => {
   
      this._subscription = Accelerometer.addListener(Data => {
            this.setState({ 
                accelerometerData: Data,
            });
        /*
        if ( boolFirst ){
            console.log("subscribing new");
            newData = Math.sqrt( Data.x^2 + Data.y^2 + Data.z^2);
        }
        else {
            boolFirst = true;
            console.log("subscribing last");
            lastData = Math.sqrt( Data.x^2 + Data.y^2 + Data.z^2);
        }*/

    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

   render() {
    let { x, y, z} = this.state.accelerometerData;
    var average = 0;
    
    currentData = Math.sqrt(x*x + y*y + z*z);
    
    /*console.log("________________________");
    console.log("x= ",x,"; y= ",y,"; z= ",z);
    console.log("new = ",currentData);
    console.log(speedData);
    console.log("________________________");
*/
    
    speedData.push(currentData);
    
    if ( speedData.length > 20 ) {
        speedData.shift();
    }
    
    for (var i = 0;i<speedData.length;i++){
        average += speedData[i];
    }
    average = average / speedData.length;
    
    var movement;
    if (average < 1.08 && average > 1.01){
        movement = "WALKING";
    }
    else if (average <= 1.01){
        movement = "Laying"; 
    }
    else{
        movement = "RUNNING"; 
    }
    
     

    return (
      <View style={styles.sensor}>
        <Text>Accelerometer:</Text>
        <Text>x: {x} y: {y} z: {z}</Text>
        <Text>total acceleration = {currentData}</Text>
        <Text>avg: {average}</Text>
        <Text style={styles.myText} >{movement}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._x1} style={[styles.button, styles.middleButton]}>
            <Text>x1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._x2} style={[styles.button, styles.middleButton]}>
            <Text>x2</Text>
          </TouchableOpacity>          
          
          <TouchableOpacity onPress={this._x3} style={[styles.button, styles.middleButton]}>
            <Text>x3</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  myText: {
    fontSize: 70,
  }
});