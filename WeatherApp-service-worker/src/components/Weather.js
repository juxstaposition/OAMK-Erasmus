import React from 'react'

class Weather extends React.Component {
    render () {
        const { toggleWindow } = this.props;
        const { removeCity } = this.props;

        return (
            <div>
                <p>
                    <button className="button" onClick = {() => toggleWindow(null)}>
                        Back
                    </button>
                    &emsp;
                    { 
                        this.props.saveButton
                        ?   <button className="button" onClick = {this.props.addCity}>
                                Save
                            </button>
                        :   <button className="button" onClick = {() => removeCity(this.props.name)}>
                                Unsave
                            </button>
                    }
                </p>
                { this.props.name && this.props.country && <p className="Weather"><font size="5"><b>
                    { this.props.name }, 
                    {this.props.country}
                </b></font></p> }
                { this.props.icon && this.props.temperature && 
                    <div className="temperature" > 
                        {this.props.temperature} °C
                        <img className="imageNow" src={`https://openweathermap.org/img/w/${this.props.icon}.png`}/> 
                    </div> }
                    
            
                <div className="forecast">
                    { this.props.name && <p><b>Forecast&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;°C</b></p>}
                    { this.props.day1 && this.props.temp1 && <p>{ this.props.day1 } &emsp;&emsp; { this.props.temp1 }</p> } 
                    { this.props.day2 && this.props.temp2 && <p>{ this.props.day2 } &emsp;&emsp; { this.props.temp2 }</p> } 
                    { this.props.day3 && this.props.temp3 && <p>{ this.props.day3 } &emsp;&emsp; { this.props.temp3 }</p> } 
                    { this.props.day4 && this.props.temp4 && <p>{ this.props.day4 } &emsp;&emsp; { this.props.temp4 }</p> } 
                </div>
            </div>    
        )
    }
}
export default Weather;