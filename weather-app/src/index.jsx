import React from 'react';
import ReactDOM from 'react-dom';
import {useState , useEffect} from 'react';
import axios from "axios";
import "./index.css";
function Hi() {
  // const [isLit, setLit] = useState(true);
  // const lighteness = isLit ? "lit" : "dark";
  const [data, setData] = useState(0);
  const [cityName ,setCityName] = useState("");
  const [weather , setWeather] = useState("{}");

  const submitHandler = (e) => {
   e.preventDefault();
   console.log("cityName :" , cityName)

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62beca7abecd9df6160deafa94100d92&units=metric`)
    .then(function (response) {
   
      console.log("datadata" ,  response.data );  
   
    setWeather(response.data);
  })
   
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

useEffect(() => {
const getWeather = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=62beca7abecd9df6160deafa94100d92&units=metric`)
  .then(function (response) {

    console.log("data: ", response.data);
    setWeather(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
getWeather();
}, [])

return <div className='all'>
  
  {/* <div>State variable</div>
    {data}

    <button onClick={() => {

      setData(data + 1)

    }}>plus</button>

    <button onClick={() => {

      setData(data - 1)

    }}>minus</button>


    {(data % 2 === 0) ? <b>Even</b> : <i>Odd</i>}



    <hr /> */}
  
  <form onSubmit={submitHandler}>
<div className='name'><div className='heading'> <h1>Weather App</h1></div>

  <div>
  <input type="text" 
  placeholder='Enter City Name'
  onChange={(e) => {
    setCityName(e.target.value)
  }}
  /> <br /> <br /> 
 <button type='submit'>GetWeather</button></div></div>
</form>

<br />

{(weather?.name)?
<div id='result'>
  <div><h1>Country :{weather?.sys?.country}</h1></div><hr />
  <div><h2>City Of :{weather?.name}</h2></div><hr />
  <div> Weather Tempreature :{weather?.main?.temp}°C</div><hr />
  <div>Weather Pressure :{weather?.main?.pressure}</div><hr />
  <div><h5>Min_Temp :{weather?.main?.temp_max}°C <hr />
     Max_Temp {weather?.main?.temp_min}°C</h5></div>
  
</div>
:
null
}
</div>
}
ReactDOM.render(<Hi />, document.getElementById('root'));