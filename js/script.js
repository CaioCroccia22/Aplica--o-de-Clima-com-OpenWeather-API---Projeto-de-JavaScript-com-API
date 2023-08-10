//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=7b7c3605fe8753e1dd6d061a46dc4ecd
const apiKey = "7b7c3605fe8753e1dd6d061a46dc4ecd";
const apiCountryUrl = "https://www.countryflagicons.com/SHINY/64/png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city-input");
const tempElement = document.querySelector("#temperature-span");
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');

//Funções
const showWeatherData = (city) => {
    console.log(city);
}


//Eventos
//Clique do botão da cidade
searchBtn.addEventListener("click", (e) => {


    e.preventDefault();


    //Pegar o valor do input
    const city = cityInput.value;

    showWeatherData(city);
})
