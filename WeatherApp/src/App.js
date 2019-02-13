import React from 'react';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';
import CityList from './components/city_list.json';

const ApiKey = "13fdd9bf0cc34e109774af5fa9a50e49";
const citiesNames = CityList.map(item => item.name+ ", " + item.country);

class App extends React.Component {

    citiesArr = [];

    cityTop = {};

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
        temp4: undefined,
        error: undefined,
        country: undefined,
        temperature: undefined,
        window: true, // window true: main screen, false: detail
        saveButton: true,
        isSaved: false,
    }

    findCity = param => {
        var i = 0;
        for (i; i<this.citiesArr.length; i++){
            if (this.citiesArr[i].name === param){
                return(i);
            }
        }
        return(0);
    }

    toggleWindow = param => {
        if ((param !== null && param !== "top")){
            const i = this.findCity(param.name);

            this.setState({
                name: this.citiesArr[i].name,
                temperature: this.citiesArr[i].temperature,
                id: this.citiesArr[i].id,
                name: this.citiesArr[i].name,
                country: this.citiesArr[i].country,
                saveButton: false,
                error: undefined,
                day1: this.citiesArr[i].day1,
                day2: this.citiesArr[i].day2,
                day3: this.citiesArr[i].day3,
                day4: this.citiesArr[i].day4,
                temp1: this.citiesArr[i].temp1,
                temp2: this.citiesArr[i].temp2,
                temp3: this.citiesArr[i].temp3,
                temp4: this.citiesArr[i].temp4,
            });
        }
        else if(param === "top") {            
            this.setState({
                name: this.cityTop.name,
                temperature: this.cityTop.temperature,
                id: this.cityTop.id,
                name: this.cityTop.name,
                country: this.cityTop.country,
                saveButton: this.cityTop.saveButton, //maybe just false
                error: this.cityTop.error,
                day1: this.cityTop.day1,
                day2: this.cityTop.day2,
                day3: this.cityTop.day3,
                day4: this.cityTop.day4,
                temp1: this.cityTop.temp1,
                temp2: this.cityTop.temp2,
                temp3: this.cityTop.temp3,
                temp4: this.cityTop.temp4,
            });           
        }

        this.setState(state => ({ window: !state.window }));
        console.log("toggle Window");
    };

    addCity = async() => {
        this.setState(state => ({ saveButton: !state.saveButton }));
        this.citiesArr.push(this.state);
        localStorage.setItem('myCities', JSON.stringify(this.citiesArr));
    };

    removeCity = param => {
        this.setState(state => ({ saveButton: !state.saveButton }));
        
        const i = this.findCity(param);
        
        this.citiesArr.splice(i,1);
        
        localStorage.setItem('myCities', JSON.stringify(this.citiesArr));
    }

    getWeather = async (val) => {
        val.preventDefault();
        // reading string from input box
        const cityString = val.target.elements.city.value;
        
        if (cityString) {
            // Array of cities for autocomplete and checking corect name of the city
            const city = cityString.split(", ");
            const city_found = CityList.find(el => (el.name === city[0] && el.country === city[1]) || el.name === city[0])
            
            if (city_found){
                // city data is optained, not yed checked with the list, I can call Api for current weather
                const ApiCallWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city[0]},${city[1]}&appid=${ApiKey}&units=metric`);
                const dataTemp = await ApiCallWeather.json();
                // city was read successfuly
                // now I can store data
                if (dataTemp){
                    this.setState({
                        temperature: dataTemp.main.temp,
                        id: dataTemp.sys.id,
                        name: dataTemp.name,
                        country: dataTemp.sys.country,
                        saveButton: true,
                        error: undefined
                    });
                    
                    // I make another api call for fetching weather forecast
                    const ApiCallForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name},${this.state.country}&appid=${ApiKey}&units=metric`);
                    const dataForecast = await ApiCallForecast.json();
                    this.setState({
                        error: undefined,
                        day1: dataForecast.list[7].dt_txt,
                        day2: dataForecast.list[15].dt_txt,
                        day3: dataForecast.list[23].dt_txt,
                        day4: dataForecast.list[31].dt_txt,
                        temp1: dataForecast.list[7].main.temp,
                        temp2: dataForecast.list[15].main.temp,
                        temp3: dataForecast.list[23].main.temp,
                        temp4: dataForecast.list[31].main.temp
                    });
                    this.cityTop = JSON.parse(JSON.stringify(this.state));
                }
                else {
                    this.cityTop = {
                        name: undefined,
                        error: "No internet conection."
                    };
                }
            }
            else{
                this.cityTop = {
                    name: undefined,
                    error: "This is not a city!",
                };
            }
        }
        else{
            // At the beggining, if submission occurs before searching city, I handle error
            this.cityTop = {
                name: undefined,
                error: "You should enter city name!"
            };
        }

        this.setState({
            window: true,
        })
    }

    componentDidMount = async() =>{
        let list = localStorage.getItem('myCities');
        if (list){ // 'myCities' exist in local storage
            this.citiesArr = JSON.parse(list); 
            for (var i=0;i<this.citiesArr.length;i++){
                const ApiCallWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.citiesArr[i].name},${this.citiesArr[i].country}&appid=${ApiKey}&units=metric`);
                const ApiCallForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.citiesArr[i].name},${this.citiesArr[i].country}&appid=${ApiKey}&units=metric`);
                const dataTemp = await ApiCallWeather.json();
                const dataForecast = await ApiCallForecast.json();
                this.citiesArr[i].temperature = dataTemp.main.temp;    
                this.citiesArr[i].day1= dataForecast.list[7].dt_txt;
                this.citiesArr[i].day2= dataForecast.list[15].dt_txt;
                this.citiesArr[i].day3= dataForecast.list[23].dt_txt;
                this.citiesArr[i].day4= dataForecast.list[31].dt_txt;
                this.citiesArr[i].temp1= dataForecast.list[7].main.temp;
                this.citiesArr[i].temp2= dataForecast.list[15].main.temp;
                this.citiesArr[i].temp3= dataForecast.list[23].main.temp;
                this.citiesArr[i].temp4= dataForecast.list[31].main.temp;
            }

        }
        this.setState({
            window: true,
        });
        console.log("component Mounter");
    }
    
    render () { 
        return (
            <div >
                <Title/>
                {
                    this.state.window 
                    ?   <Form 
                            citiesNames = {citiesNames}
                            citiesArr = {this.citiesArr} 
                            getWeather = {this.getWeather}
                            toggleWindow = {this.toggleWindow}
                            name = {this.cityTop.name}
                            country = {this.cityTop.country}
                            error = {this.cityTop.error}
                            temperature = {this.cityTop.temperature} 
                        />
                    :   <Weather 
                            temperature = {this.state.temperature} 
                            name = {this.state.name}
                            country = {this.state.country}
                            forecast = {this.state.forecast}
                            day1 = {this.state.day1}
                            day2 = {this.state.day2}
                            day3 = {this.state.day3}
                            day4 = {this.state.day4}
                            temp1 = {this.state.temp1}
                            temp2 = {this.state.temp2}
                            temp3 = {this.state.temp3}
                            temp4 = {this.state.temp4}
                            toggleWindow = {this.toggleWindow}
                            saveButton = {this.state.saveButton}
                            addCity = {this.addCity}
                            removeCity = {this.removeCity}
                        />
                }
            </div>
        )
    }
}

export default App;
