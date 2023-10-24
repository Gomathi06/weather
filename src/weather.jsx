import React, { useState } from "react";
// import { Axios } from "axios";
import Axios from 'axios'

const Key= '62d1e1e2e0c75e2637712e8fe3b50913'

const WeatherApp = ()=>{
    const [city,setCity]= useState("")
    const [data,setData] = useState();

   const fetchData= async()=>{
    try{
        const response= await  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`
        )
        console.log(response.data);
        setData(response.data);
    }
    catch (err){
        alert("error")
    }
   }

    return(
        <>
       <h1> Weather App</h1> 
       <div className="container">
       <input type="text" className="input" value={city} onChange={e=> setCity(e.target.value)} placeholder="enter"/>
       <button onClick={fetchData}>Submit</button>
       
       </div> <br></br>
       <div className="box">
        {data &&  (
            <div className="con">
                {data.name} {data.wind.deg}<br></br>
                <div>  Temperature :{Math.round (data.main.temp)} C</div>
                <div> latitude : {data.coord.lat} <br></br> longitude: {data.coord.lon}</div>
                 </div>
                
        )}
       </div>
       
       
        </>
    )
}
export default WeatherApp;
