import { fetchWeather } from "./weatherData";

   
  let currentWeatherGlobal = null;
  const fahrenheitButton = document.querySelector('.fah button');
  const celsiusButton = document.querySelector('.cel button');
export const updateDOM = async (zipCode) =>{

    try{

        const {currentWeather} = await fetchWeather(zipCode);
        currentWeatherGlobal = currentWeather;
        const domElements = selectWeatherElements();
        console.log(`temp ${currentWeather.temperature}`)
        //updating weather stats
        updateWeatherStats('celsius', domElements, currentWeather);

        console.log("dom updated");
        
    }catch(error){



        console.error('Error updating the DOM');
    }



}
//select all weather elements from the dom
const selectWeatherElements = () => {
    return {
      cloudCover: document.querySelector('.Cloudcover .stat'),
      wind: document.querySelector('.Wind .stat'),
      sunrise: document.querySelector('.Sunrise .stat'),
      visibility: document.querySelector('.Visibility .stat'),
      sunset: document.querySelector('.Sunset .stat'),
      humidity: document.querySelector('.Humidity .stat'),
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

     }else{



     }
    
  };


// fahrenheitButton.addEventListener('click', () =>{



// });

 celsiusButton.addEventListener('click', () =>{

    const domElements = selectWeatherElements();
    updateWeatherStats('celsius',domElements, currentWeatherGlobal);

});