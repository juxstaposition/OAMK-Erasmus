import React from 'react';
import Autocomplete from './Autocomplete';

class Form extends React.Component {

    printArr(){
        const { toggleWindow } = this.props;
        
        if (this.props.citiesArr.length === 0) {
            return null;
        } else {
            return(
                <div><form>
                    {this.props.citiesArr.map(item =>
                    <font size="4"><p key={item} onClick = { () => toggleWindow(item) } type="text" name="city" value={item.name}>&emsp;<b><u>
                        {item.name+", "+item.country} &emsp; {item.temperature} 
                    </u></b></p></font>)}
                </form></div> 
            )
        }
    }

    render () {
        const { toggleWindow } = this.props;
        return (
            <div >
                <Autocomplete citiesNames = {this.props.citiesNames} 
                              getWeather = {this.props.getWeather}/>

                { this.props.error && <center><p>{ this.props.error }</p></center>} 

                { this.props.name && this.props.country && this.props.temperature && 
                    <center><p onClick = {  () => toggleWindow("top") } type="text" name="city" value={this.props.name}><font size="4"><b><u>
                        { this.props.name }, { this.props.country } &emsp;
                        { this.props.temperature }
                    </u></b></font></p></center> }

                <center><h2>Saved Cities</h2></center> 
                { this.printArr() }
            </div>
        );
    }
};

export default Form;