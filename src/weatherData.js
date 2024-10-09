const WeatherData = () =>{

    const getData = async (zipCode) =>{

        const apiKey = '5583ST8L2ELBXT2B3GC4V5UKN';
        const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipCode}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const response = await fetch(baseUrl);

        if (!response.ok) {
            const { error } = await response.json();
            throw Error(error);
        }
        
        const data = await response.json();
        if ('error' in data) {
            throw Error(data.error);
        }

        return {

            feelslike: data.days[0].feelslike,
            windSpeed: data.days[0].windspeed,
            humidity: data.days[0].humidity,
            conditions: data.days[0].conditions,
            icon: data.days[0].icon,
            temperature: data.days[0].temp,
            tempMax: data.days[0].tempmax,
            tempMin: data.days[0].tempmin,
            sunRise: data.days[0].sunrise,
            sunSet: data.days[0].sunset




        }

    }



    return {

        getData

    }
}

export const fetchWeather = async (location) =>{

    const weather = WeatherData();

    

    try {
        // Await the async data fetch
        const currentWeather = await weather.getData(location);

        // Log the returned values after the promise is resolved
        console.log(currentWeather.feelslike);
        console.log(currentWeather.temperature);
        console.log(currentWeather.windSpeed);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

const location = '07945';
fetchWeather(location);