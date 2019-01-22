import React from 'react'

class Form extends React.Component {
    render () {
        return (
            <center><form onSubmit={this.props.getWeather}>
                <input type="text" name="city" size="24" placeholder="Enter city name,case sensitive"/>      
            </form></center>
        );
    }
};

export default Form;