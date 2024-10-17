import { description } from "commander";

export const WeatherData = () =>{

    const getData = async (zipCode) =>{

        const apiKey = '5583ST8L2ELBXT2B3GC4V5UKN';
        const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipCode}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const response = await fetch(baseUrl);

        if (!response.ok) {
            const { error } = await response.json();
            throw Error(error);
        }
        
        const data = await response.json();
        if ('error' in data) {// Check if there's an error in the data itself.
            throw Error(data.error);
        }
        console.log(data);
        return {
            cloudCover: data.days[0].cloudcover,
            feelslike: data.days[0].feelslike,
            windSpeed: data.days[0].windspeed,
            humidity: data.days[0].humidity,
            conditions: data.days[0].conditions,
            icon: data.days[0].icon,
            description: data.days[0].description,
            precipType: data.days[0].preciptype,
            temperature: data.days[0].temp,
            tempMax: data.days[0].tempmax,
            tempMin: data.days[0].tempmin,
            sunRise: data.days[0].sunrise,
            sunSet: data.days[0].sunset,
            visibility: data.days[0].visibility,
            address: data.address,
            datetime: data.days[0].datetime,
        
        }

    }



    return {

        getData

    }
}

export const fetchWeather = async (location) =>{

    const weather = WeatherData();

    let currentWeather = null;

    try {
        // Await the async data fetch
         currentWeather = await weather.getData(location);

        // Log the returned values after the promise is resolved
        console.log(currentWeather.feelslike);
        console.log(currentWeather.temperature);
        console.log(currentWeather.windSpeed);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

    return{


        currentWeather
    }
}

// const location = '07945';
// fetchWeather(location);