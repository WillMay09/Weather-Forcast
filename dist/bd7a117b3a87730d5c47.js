const WeatherData = () =>{

    const getData = async () =>{

        const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/07930?unitGroup=metric&key=5583ST8L2ELBXT2B3GC4V5UKN&contentType=json")

        console.log(data);

    }

    return {

        getData

    }
}

WeatherData().getData();