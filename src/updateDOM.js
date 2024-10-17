import { fetchWeather } from "./weatherData";
import { toFahrenheit, toMiles, toMilesPerHour} from "./convertWeather"
   
  let currentWeatherGlobal = null;
  const fahrenheitButton = document.querySelector('.fah button');
  const celsiusButton = document.querySelector('.cel button');
export const updateDOM = async (zipCode) =>{

    try{

        const {currentWeather} = await fetchWeather(zipCode);
        currentWeatherGlobal = currentWeather;
        const domElements = selectWeatherElements();
        console.log(currentWeatherGlobal);
        //updating weather stats
        updateWeatherStats('celsius', domElements, currentWeather);

        console.log("dom updated");
        
    }catch(error){



        console.error('Error updating the DOM');
    }



}
// cloudCover: data.days[0].cloudcover,
//             feelslike: data.days[0].feelslike,
//             windSpeed: data.days[0].windspeed,
//             humidity: data.days[0].humidity,
//             conditions: data.days[0].conditions,
//             icon: data.days[0].icon,
//             temperature: data.days[0].temp,
//             tempMax: data.days[0].tempmax,
//             tempMin: data.days[0].tempmin,
//             sunRise: data.days[0].sunrise,
//             sunSet: data.days[0].sunset,
//             visibility: data.days[0].visibility,
//             address: data.address,
//             datetime: data.datetime,
const selectWeatherElements = () => {
    return {
      cloudCover: document.querySelector('.Cloudcover .stat'),
      wind: document.querySelector('.Wind .stat'),
      sunrise: document.querySelector('.Sunrise .stat'),
      visibility: document.querySelector('.Visibility .stat'),
      sunset: document.querySelector('.Sunset .stat'),
      humidity: document.querySelector('.Humidity .stat'),
      temperature: document.querySelector('.temp'),
      tempMax: document.querySelector('.range .tempHigh'),
      tempMin: document.querySelector('.range .tempLow'),
      address: document.querySelector('.location'),
      dateTime: document.querySelector('.date'),


    };
  };

//update the dom elements with stats from api call
  const updateWeatherStats = (system ,elements, currentWeather) => {
    if(system === 'celsius'){
        elements.cloudCover.textContent = `${currentWeather.cloudCover}`;
        elements.wind.textContent = `${currentWeather.windSpeed}`;
        elements.sunrise.textContent = `${currentWeather.sunRise}`;
        elements.visibility.textContent = `${currentWeather.visibility}`;
        elements.sunset.textContent = `${currentWeather.sunSet}`;
        elements.humidity.textContent = `${currentWeather.humidity}`;
        elements.temperature.textContent = `° ${currentWeather.temperature}`
        elements.tempMax.textContent = `↑ ${currentWeather.tempMax}`
        elements.tempMin.textContent = `↓ ${currentWeather.tempMin}`
        elements.address.textContent = `${currentWeather.address}`
        elements.dateTime.textContent = `${currentWeather.datetime}`

     }else{

        elements.cloudCover.textContent = `${currentWeather.cloudCover}`;
        elements.wind.textContent = `${toMilesPerHour(currentWeather.windSpeed)}`;
        elements.sunrise.textContent = `${currentWeather.sunRise}`;
        elements.visibility.textContent = `${toMiles(currentWeather.visibility)}`;
        elements.sunset.textContent = `${currentWeather.sunSet}`;
        elements.humidity.textContent = `${currentWeather.humidity}`;
        elements.temperature.textContent = `° ${toFahrenheit(currentWeather.temperature)}`
        elements.tempMax.textContent = `↑ ${toFahrenheit(currentWeather.tempMax)}`
        elements.tempMin.textContent = `↓ ${toFahrenheit(currentWeather.tempMin)}`
        elements.address.textContent = `${currentWeather.address}`
        elements.dateTime.textContent = `${currentWeather.dateTime}`


     }
    
  };


 fahrenheitButton.addEventListener('click', () =>{

    const domElements = selectWeatherElements();
    updateWeatherStats('fahrenheit',domElements, currentWeatherGlobal);


  });

 celsiusButton.addEventListener('click', () =>{

    const domElements = selectWeatherElements();
    updateWeatherStats('celsius',domElements, currentWeatherGlobal);

});