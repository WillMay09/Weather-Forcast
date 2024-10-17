import { fetchWeather } from "./weatherData";

// feelslike: data.days[0].feelslike,
//             windSpeed: data.days[0].windspeed,
//             humidity: data.days[0].humidity,
//             conditions: data.days[0].conditions,
//             icon: data.days[0].icon,
//             temperature: data.days[0].temp,
//             tempMax: data.days[0].tempmax,
//             tempMin: data.days[0].tempmin,
//             sunRise: data.days[0].sunrise,
//             sunSet: data.days[0].sunset




const toFahrenheit = (celsius)=>{

    const fahrenheit = celsius*(9/5)+32;

    return Math.round(fahrenheit);

};

const toMiles = (kilometers) =>{

    const mi = (kilometers/1.609)
    return Math.round(mi)


}

const toKilometers = (miles) =>{

    const km = (miles*1.609344);
    return Math.round(km);

}

//from meters per hour
const toMilesPerHour = (kiloPerHour) =>{

    const mph = (kiloPerHour*0.62137119);

    return Math.round(mph);

}

export { toFahrenheit, toMiles, toMilesPerHour}