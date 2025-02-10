
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = "386e5476b09f7ea42cbfd6fd28307615"
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (city) => {

    const response = await fetch(apiUrl  + city + `&apikey=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c' ;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed +' kmph';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src ='Assets/clouds.png';
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src ='Assets/clear.png';
    }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src ='Assets/rain.png';
    }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src ='Assets/drizzle.png';
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src ='Assets/mist.png';
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src ='Assets/snow.png';
    }
    
    document.querySelector('.weather').style.display = "block";
};
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);  
})
