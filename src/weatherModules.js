import {createElement} from "./helperFunctions"
import "./weatherModStyle.css"


const createTempDash = () =>{

    const tempDash = createElement({type: 'div', className: 'tempDash'});
    const date = createElement({type:'h6', className: 'date'});
    const temperature = createElement({type:'h1', className: 'temp'});
    const tempRange = createElement({type: 'div', className: 'range'});
    const tempHigh = createElement({type: 'h6', className: 'tempHigh'});
    const tempLow = createElement({type: 'h6', className: 'tempLow'});
    tempRange.appendChild(tempHigh);
    tempRange.appendChild(tempLow);
    const location  = createElement({type: 'h6', className: 'location'});

    tempDash.appendChild(date);
    tempDash.appendChild(temperature);
    tempDash.appendChild(tempRange);
    tempDash.appendChild(location);
    return  tempDash;

}

const createWeatherInfoDash = () =>{

    const weatherInfo = createElement({type: 'div', className: 'weatherStats'});
    const cloudCover = weatherTab('Cloudcover', '89%');
    const wind = weatherTab('Wind', '89%');
    const sunrise = weatherTab('Sunrise', '89%');

    const iconContainer = iconTab("Rain", 'feels like 10', 'Cloud');
    const visibility = weatherTab('Visibility', '89%');
    const sunset = weatherTab('Sunset', '89%');
    
    const humidity = weatherTab('Humidity', '89%');
    const gitHub = weatherTab('GitHub', '89%');

    weatherInfo.appendChild(cloudCover);
    weatherInfo.appendChild(iconContainer);
    weatherInfo.appendChild(wind);
    weatherInfo.appendChild(sunrise);
    weatherInfo.appendChild(visibility);
    weatherInfo.appendChild(sunset);
    weatherInfo.appendChild(humidity);
    weatherInfo.appendChild(gitHub);
    return weatherInfo;


}

const iconTab = (description, feelsLike, icon) =>{

    const iconContainer = createElement({type: 'div', className: 'iconTab'});
    const title = createElement({type: 'h1', className:'iconDescription', textContent: description});
    const content = createElement({type: 'h6', className :'feelsLike', textContent: feelsLike});
    const textContainer = createElement({type: 'div', className: "textContainer"});
    const imgContainer = createElement({type: 'div', className: 'icon'});
    textContainer.appendChild(title);
    textContainer.appendChild(content);
    iconContainer.appendChild(textContainer);
    iconContainer.appendChild(imgContainer);
    return iconContainer;


}

const weatherTab = (description, statistic) =>{
    
    const tab = createElement({type:'div', className: `weather-tab ${description}`});
    const label = createElement({type: 'h6', className: `${description}-title`, textContent: description});
    const stat = createElement({type: 'h1', className: 'stat', textContent: statistic});

    tab.appendChild(label);
    tab.appendChild(stat);

    return tab;

}

export const displayWeather = () =>{

    const contentSection = document.querySelector('.content');
    const tempDash = createTempDash();
    const weatherStats = createWeatherInfoDash();

    contentSection.appendChild(tempDash);
    contentSection.appendChild(weatherStats);
    

}