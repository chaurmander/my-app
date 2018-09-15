import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
let WEATHER_KEY = "48208adbdeedee4ea3e7b0e55b68f4f2";
//import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
export default class App extends React.Component  {
  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  
  
 
   getWeatherData= async (e:any) => {
    e.preventDefault();
   
    let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${WEATHER_KEY}&units=metric`);
    let weatherJson = await weatherData.json();
    console.log(weatherJson)
    if(weatherJson.cod === "404"){
       this.setState({
        error: "Please enter a correct value"
      })
    } else {
      this.setState({
        temperature : weatherJson.main.temp,
        city: weatherJson.name,
        country: weatherJson.sys.country,
        humidity: weatherJson.main.humidity,
        description: weatherJson.weather[0].description,
        error: ""
      });
      
    }
    
    

    
    
  } 
  handleChange = (event:any) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  onSubmit = (e:any) =>{
    e.preventDefault();
    this.getWeatherData(e);
    console.log(this.state)

  };

  
  public render() {
    
    return (
      
        <div>
          <form>
            <Grid container spacing={0} direction="column" alignItems="center" style={{minHeight: '100vh'}}>
              <Grid item xl alignItems="center">
                <Paper style={{padding:20 ,minWidth:400,marginTop:20,fontSize:20}}>
                  <Input name="city" value={this.state.city} placeholder="City" onChange={e=> this.handleChange(e)}  fullWidth/><br/>
                  <Input name="country" value={this.state.country} placeholder="Country" onChange={e=> this.handleChange(e)}/><br/>
                  <Button onClick={e=> this.onSubmit(e)}>Enter</Button><br/>
                </Paper>
                
              </Grid>
              <Grid item xl>
                <Paper style={{padding:20 ,minWidth:400,marginTop:20}}>
                  {JSON.stringify(this.state,null,2)}
                </Paper>
                
              </Grid>
              
             
            </Grid>
            
            
          </form>
        </div>
        
         
        
     /*      <div>
          { this.state.city && this.state.country && <p>Location: {this.state.city}, {this.state.country}</p>}
          { this.state.temperature && <p>Temperature: {this.state.temperature}</p>}
          { this.state.humidity && <p>Humidity: {this.state.humidity}</p>}
          { this.state.description && <p>Conditions: {this.state.description}</p>}
          { this.state.error && <p>{this.state.error}</p>}
          
          
        </div> */

     
    );
  }
}