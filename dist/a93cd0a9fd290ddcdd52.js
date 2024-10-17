
import "./style.css";
import { displayWeather } from "./weatherModules";
import { updateDOM } from "./updateDOM";
displayWeather();
updateDOM('07945');

document.getElementById('searchForm').addEventListener('submit',(event) =>{

    event.preventDefault();
    const searchedItem = document.getElementById('searchInput').value;
    

    if(checkCode(searchedItem)){
        displayWeather();
        updateDOM(searchedItem.trim());

    }else{

        alert('Please enter a valid 5-digit zip code');
    }

});

const checkCode = (searchedItem) =>{

    const correctPattern = /^\d{5}$/;
    return correctPattern.test(searchedItem);


}



