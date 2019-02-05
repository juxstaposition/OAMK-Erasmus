import React from 'react'

class Weather extends React.Component {
    render () {
        const { toggleWindow } = this.props;
        const { removeCity } = this.props;
        return (
            <div>
                <center><p>
                    <button onClick = {() => toggleWindow(null)}>
                        Back
                    </button>
                    &emsp;
                    { 
                        this.props.saveButton
                        ?   <button onClick = {this.props.addCity}>
                                Save
                            </button>
                        :   <button onClick = {() => removeCity(this.props.name)}>
                                Unsave
                            </button>
                    }
                </p></center>
                { this.props.name && this.props.country && <center><p><font size="5"><b>{ this.props.name }, {this.props.country}</b></font></p></center>}
                { this.props.name && <center><p><b>&emsp;&emsp;&emsp;Time&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; °C</b></p></center>}
                { this.props.temperature && <center><p>&emsp;&emsp;&emsp;Now:&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; { this.props.temperature}</p></center> }
                { this.props.day1 && this.props.temp1 && <center><p>{ this.props.day1 } &emsp;&emsp; { this.props.temp1 }</p></center> } 
                { this.props.day2 && this.props.temp2 && <center><p>{ this.props.day2 } &emsp;&emsp; { this.props.temp2 }</p></center> } 
                { this.props.day3 && this.props.temp3 && <center><p>{ this.props.day3 } &emsp;&emsp; { this.props.temp3 }</p></center> } 
                { this.props.day4 && this.props.temp4 && <center><p>{ this.props.day4 } &emsp;&emsp; { this.props.temp4 }</p></center> } 

            </div>
            
        )
    }
}
export default Weather;