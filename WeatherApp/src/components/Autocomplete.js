import React from 'react';

class Autocomplete extends React.Component {
    constructor(props){
        super(props);
        this.citiesNames = this.props.citiesNames;
        this.state = {
            suggestions: [],
            text: "",
        };
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if ( value.length > 0) {
            const regex = new RegExp(`^${value}`,`i`);
            suggestions = this.citiesNames.sort().filter(v => regex.test(v));    
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionsSelected (value){
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return(
            <div>
                <ul className="Autocomplete">
                    {suggestions.map((item) => 
                    <li onClick={() => this.suggestionsSelected(item)}>
                        {item}
                    </li>)}
                </ul>
            </div>
        )
    }
    
    
    render () {
        const { text } = this.state;
        return (
            <div className="Autocomplete">
                <form  onSubmit={this.props.getWeather}>
                    <center><input 
                        value={text}
                        onChange={this.onTextChange} 
                        type="text"
                        name="city"
                        size="24"
                        placeholder="Enter city name,case sensitive"/></center>    
                </form>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default Autocomplete;