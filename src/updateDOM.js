import { fetchWeather } from "./weatherData";

export const updateDOM = async (zipCode) =>{

    try{

        const {currentWeather} = await fetchWeather(zipCode);

        const tempDash = document.querySelector('.tempDash');
        const cloudCover = document.querySelector('.Cloudcover');
        const wind = document.querySelector('.Wind');
        const sunrise = document.querySelector('.Sunrise');
        
        const iconTab = document.querySelector('.iconTab');
        const visibility = document.querySelector('.Visibility');
        const sunset = document.querySelector('.Sunset');
        const humidity = document.querySelector('.Humidity');
        const gitHub = document.querySelector('.GitHub');

        //updating weather stats

        cloudCover.querySelector('.stat').textContent = `${currentWeather.cloudCover}`;
        wind.querySelector('.stat').textContent = `${currentWeather.windSpeed}`;
        sunrise.querySelector('.stat').textContent = `${currentWeather.sunRise}`;
        visibility.querySelector('.stat').textContent = `${currentWeather.visibility}`;
        sunset.querySelector('.stat').textContent = `${currentWeather.sunSet}`;
        humidity.querySelector('.stat').textContent = `${currentWeather.humidity}`;
        

        console.log("dom updated");



        
    }catch(error){



        console.error('Error updating the DOM');
    }



}
