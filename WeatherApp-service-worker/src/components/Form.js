import React from 'react';
import Autocomplete from './Autocomplete';

class Form extends React.Component {

    printArr(){
        const { toggleWindow } = this.props;
        
        if (this.props.citiesArr.length === 0) {
            return null;
        } else {
            return(
                <div className="cityArr">
                    {this.props.citiesArr.map(item =>
                    <p className="pointer" onClick = { () => toggleWindow(item) } type="text" name="city" value={item.name}><font size="4"><b><u>
                        {item.name+", "+item.country} &emsp; {item.temperature}°C
                    </u></b></font></p>)}
                </div> 
            )
        }
    }

    render () {
        const { toggleWindow } = this.props;
        return (
            <div >
                <Autocomplete citiesNames = {this.props.citiesNames} 
                              getWeather = {this.props.getWeather}/>

                { this.props.error && <p className="error">{ this.props.error }</p>} 

                { this.props.name && this.props.country && this.props.temperature && 
                    <p className="cityTop" onClick = {  () => toggleWindow("top") } type="text" name="city" value={this.props.name}><font size="4"><b><u>
                        { this.props.name }, { this.props.country } &emsp;
                        { this.props.temperature }°C
                    </u></b></font></p> }

                <h2 className="form">Saved Cities</h2>
                { this.printArr() }
            </div>
        );
    }
};

export default Form;