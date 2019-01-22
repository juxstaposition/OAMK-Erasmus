import React from 'react';
import Downshift from 'downshift';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';
import matchSorter from 'match-sorter';
import CityList from './components/city_list.json';

const ApiKey = "13fdd9bf0cc34e109774af5fa9a50e49";

class App extends React.Component {
    state = {
        // looks ugly, no exprerience with javascript, could not yet understand array insertion
        id: undefined,
        name: undefined,
        day1: undefined,
        day2: undefined,
        day3: undefined,
        day4: undefined,
        temp1: undefined,
        temp2: undefined,
        temp3: undefined,
        temp5: undefined,
        error: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined
    }

    getWeather = async (val) => {
        val.preventDefault();
        // data reading from imput
        const city = val.target.elements.city.value;
        
        if (city) {
            // Array of cities for autocomplete and checking corect name of the city
            const city_found = CityList.find(el => el.name === city)
            
            if (city_found){
                console.log("true");
                // city data is optained, not yed checked with the list, I can call Api for current weather
                const ApiCallWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);
                const dataTemp = await ApiCallWeather.json();
                    // city was read successfuly
                console.log(dataTemp);
                
                // now I can store data
                this.setState({
                    temperature: dataTemp.main.temp,
                    id: dataTemp.sys.id,
                    name: dataTemp.name,
                    country: dataTemp.sys.country,
                    description: dataTemp.weather[0].description,
                    error: undefined
                });
                
                // I make another api call for fetching weather forecast
                const ApiCallForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name},${this.state.country}&appid=${ApiKey}&units=metric`);
                const dataForecast = await ApiCallForecast.json();
                console.log(dataForecast);
                this.setState({
                    day1: dataForecast.list[7].dt_txt,
                    day2: dataForecast.list[15].dt_txt,
                    day3: dataForecast.list[23].dt_txt,
                    day4: dataForecast.list[31].dt_txt,
                    temp1: dataForecast.list[7].main.temp,
                    temp2: dataForecast.list[15].main.temp,
                    temp3: dataForecast.list[23].main.temp,
                    temp4: dataForecast.list[31].main.temp
                });
                console.log(this.state);
            }
            else{
                this.setState({
                    error: "This is not a city!"
                });
            }
        }
        else{
            // At the beggining, if submission occurs before searching city, I handle error
            this.setState({
                error: "You should enter city name!"
            });
        }

    }
    
    
    render () { 
        return (
            <div>
                <Title/>
                <Form getWeather = {this.getWeather} />
                <Weather 
                    temperature = {this.state.temperature} 
                    id = {this.state.id}
                    name = {this.state.name}
                    country = {this.state.country}
                    description = {this.state.description}
                    forecast = {this.state.forecast}
                    day1 = {this.state.day1}
                    day2 = {this.state.day2}
                    day3 = {this.state.day3}
                    day4 = {this.state.day4}
                    temp1 = {this.state.temp1}
                    temp2 = {this.state.temp2}
                    temp3 = {this.state.temp3}
                    temp4 = {this.state.temp4}
                    error = {this.state.error}
                />
            <center><button> Save </button></center>
            </div>
        )
    }
}

export default App;
