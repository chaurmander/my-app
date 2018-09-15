import * as React from 'react';
import './App.css';

let WEATHER_KEY = "48208adbdeedee4ea3e7b0e55b68f4f2";
interface IState {
  temperature: any,
  city: any,
  country: any
  humidity: any,
  description: any,
  error: any
}
export default class App extends React.Component<{}, IState>  {
  constructor(props:any){
    super(props)
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

 
  getWeatherData= async (e:any) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_KEY}&units=metric`);
    let weatherJson = await weatherData.json();
    if (city && country){
      this.setState({
        temperature : weatherJson.main.temp,
        city: weatherJson.name,
        country: weatherJson.sys.country,
        humidity: weatherJson.main.humidity,
        description: weatherJson.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter a correct value"
      })

    }
    
  }
  
  public render() {
  
    return (
      <div>
        <div>
          <form onSubmit={this.getWeatherData}>
          <input type="text" name="city" placeholder="City"/>
          <input type="text" name="country" placeholder="Country"/>
          <button>Get weather</button>
          </form>
        </div>
        <div>
          { this.state.city && this.state.country && <p>Location: {this.state.city}, {this.state.country}</p>}
          { this.state.temperature && <p>Temperature: {this.state.temperature}</p>}
          { this.state.humidity && <p>Humidity: {this.state.humidity}</p>}
          { this.state.description && <p>Conditions: {this.state.description}</p>}
          { this.state.error && <p>{this.state.error}</p>}
          
          
        </div>

      </div>
    );
  }
}