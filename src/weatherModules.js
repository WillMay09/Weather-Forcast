import {createElement} from "./helperFunctions"
import "./weatherModStyle.css"


const createTempDash = () =>{

    const tempDash = createElement({type: 'div', className: 'tempDash'});


    return  tempDash;

}

const createWeatherInfoDash = () =>{

    const weatherInfo = createElement({type: 'div', className: 'weatherStats'});
    const firstSection = createElement({type:'div', className: 'firstSection'});
    const cloudiness = weatherTab('Cloudiness', '89%');
    const wind = weatherTab('Cloudiness', '89%');
    const sunrise = weatherTab('Cloudiness', '89%');

    const iconContainer = iconTab("Rain", 'feels like 10', 'Cloud');
    const secondSection = createElement({type: 'div', className: 'secondSection'});
    const firstCol = createElement({type:'div', className: 'firstCol'});
    const visibility = weatherTab('Cloudiness', '89%');
    const sunset = weatherTab('Cloudiness', '89%');
    
    const secondCol = createElement({type: 'div', className: 'secondCol'});
    const humidity = weatherTab('Cloudiness', '89%');
    const gitHub = weatherTab('Cloudiness', '89%');

    firstSection.appendChild(cloudiness);
    firstSection.appendChild(wind);
    firstSection.appendChild(sunrise);
    weatherInfo.appendChild(firstSection);

    secondSection.appendChild(iconContainer);
    const alignmentContainer = createElement({type:'div', className:'alignment'})
    firstCol.appendChild(visibility);
    firstCol.appendChild(sunset);
    secondCol.appendChild(humidity);
    secondCol.appendChild(gitHub);
    alignmentContainer.appendChild(firstCol);
    alignmentContainer.appendChild(secondCol);
    secondSection.appendChild(alignmentContainer);
    weatherInfo.appendChild(secondSection);
    return weatherInfo;


}

const iconTab = (description, feelsLike, icon) =>{

    const iconContainer = createElement({type: 'div', className: 'iconTab'});
    const title = createElement({type: 'h1', className:'iconDescription', textContent: description});
    const content = createElement({type: 'h6', className :'feelsLike', textContent: feelsLike});
    const img = createElement({type: 'h1', className: 'icon'});
    iconContainer.appendChild(title);
    iconContainer.appendChild(content);
    iconContainer.appendChild(img);
    return iconContainer;


}

const weatherTab = (description, statistic) =>{
    
    const tab = createElement({type:'div', className: 'weather-tab'});
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