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
   console.log("cityName :" , +cityName)

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62beca7abecd9df6160deafa94100d92&units=metric`)
    .then(function (response) {
   
      console.log("datadata" , +data.response);  
   
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

return <div>
  
  <div>State variable</div>
    {data}

    <button onClick={() => {

      setData(data + 1)

    }}>plus</button>

    <button onClick={() => {

      setData(data - 1)

    }}>minus</button>


    {(data % 2 === 0) ? <b>Even</b> : <i>Odd</i>}



    <hr />
 <h1>Weather App</h1>
  
  <form onSubmit={submitHandler}>
  <label>Enter city name</label>
  <input type="text" 
  placeholder='Enter City'
  onChange={(e) => {
    setCityName(e.target.value)
  }}
  />
 <button type='submit'>GetWeather</button>
</form>

<br />

{(weather?.name)?
<div>
  <div>weather of {weather?.name}</div>
  <div>weather tempreature {weather?.main?.temp}</div>
  <div>weather tempreature {weather?.clouds?.cod}</div>
</div>
:
null
}
</div>
}
ReactDOM.render(<Hi />, document.getElementById('root'));