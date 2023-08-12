
const apiKey = "7b7c3605fe8753e1dd6d061a46dc4ecd";
//7b7c3605fe8753e1dd6d061a46dc4ecd

const apiCountryUrl = "https://www.countryflagicons.com/SHINY/64/png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature-span");
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');

//Funções
//Consulta dos dados da API
//Função assincrona pois é uma API e pode demorar um tempo para responder
const getWeatherData = async (city) => {

    
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    //Fetch - recursos do js para realizar requisições assincronas
    const res = await fetch(apiWeatherURL);
    //Dados chegam em JSON e é transformado em objeto JS
    const data = await res.json();

    return data;


}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    //ParseInt - converte a string em um número inteiro
    tempElement.innerText = parseInt(data.main.temp);
    
}


//Eventos
//Clique do botão da cidade
searchBtn.addEventListener("click", (e) => {


    e.preventDefault();


    //Pegar o valor do input
    const city = cityInput.value;

    showWeatherData(city);
})
