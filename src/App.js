import React, { useEffect,useState } from 'react';
import './App.css';
//no need of importing images => since the images are in public folder

//Main App
function App() {
 
  // taking input value
  const [inputvalue,setinputvalue]=useState('')
  const [cityname,setcityname] = useState('berlin');
  const [humid,sethumid]=useState(50)
  const [wind,setwindspeed]=useState(15)
  const [weather,setweathertype] = useState('clouds')
  //to display only input at start
  let [roar,setroar]=useState(false)
  //weather images
  //to chagne src link of images
  const weatherimages ={
    'Clear': 'images/clear.png',
    'Clouds': 'images/clouds.png',
    'Rain': 'images/rain.png',
    'Drizzle': 'images/rain.png',
    'Wind': 'images/wind.png',
    'Snow': 'images/snow.png',
    'Mist': 'images/mist.png',
    'Humidity': 'images/humidity.png',
    'Haze':'images/mist.png'
  }

  //getting temp from api
  const [temp,settemp]=useState(0)
  
  const Apikey = '7ec58081e577971d009b3f1d3ef70631'
  
  //fetch again evrytime city name changes
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}&units=metric`

    //fetching data
    async function fetchWeather() {
      const response = await fetch(url)
      if (response.ok){ //same as response.status===200
        console.log('fetch is workingfine')
      }else{
        console.log('fetch not working fine')
      }
      const data = await response.json()
      console.log(data)
      
      try{
        settemp(data.main.temp);
      }
      catch(e){
        console.log('city not found',e)
        throw Error('city name wrong at fetch')
      }
      
      sethumid(data.main.humidity)
      setwindspeed(data.wind.speed)
      setweathertype(data.weather[0].main)
      console.log(data.weather[0].main)
    }

    fetchWeather();

    //set input to blank after finishing
    setinputvalue('')
    
  },[cityname])
  
 
  return (
   
    <div className="card">
      <div className='search'>
        <input type='text' placeholder='enter city name' spellCheck='false' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
        <button onClick={()=>  {setcityname(inputvalue); setroar(true)} }> <img src='images/search.png'></img></button>
      </div>
       {roar && (<><div className='weather'>
        <img src={weatherimages[weather]}></img>
        <h1>{Math.round(temp)}°C</h1>
        <h2 className='city'>{cityname}</h2>
      </div><div className='details'>
          <div className='col'>
            <img src='images/humidity.png'></img>
            <div>
              <p className='humidity'>{humid}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='col'>
            <img src='images/wind.png'></img>
            <div>
              <p className='wind'>{wind} km/h</p>
              <p>Windspeed</p>
            </div>
          </div>
        </div></>) }

    </div>
  
  );
}

export default App;
