import { markerResult } from "./maps.js";

const url = "https://api.openweathermap.org/data/2.5/";
const key = "739ef515e3ade2c79525a82f51f458a5";

export const eventSearch = () => {
  const searchBar = document.querySelector("#searchBar");
  searchBar.addEventListener("keypress", setQuery);
};

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=pt`;

  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result, "result");

  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let iconDesc = document.querySelector(".icon-desc");
  iconDesc.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;

  let min = document.querySelector(".min span");
  min.innerText = `${Math.round(result.main.temp_min)}°C`;
  let max = document.querySelector(".max span");
  max.innerText = `${Math.round(result.main.temp_max)}°C`;

  let humidade = document.querySelector(".humidade span");
  humidade.innerHTML = `${Math.round(result.main.humidity)}%`;

  let ventoVelocidade = document.querySelector(".vento-velocidade span");
  ventoVelocidade.innerText = `${Math.round(result.wind.speed)}Km/h`;

  let resultado = Math.round(result.wind.deg);
  let ventoDirecao = document.querySelector(".vento-direcao span");
  ventoDirecao.innerText = direccionViento(resultado);

  let sunrise = document.querySelector(".sunrise span");
  sunrise.innerText = formataData(result.sys.sunrise);

  let sunset = document.querySelector(".sunset span");
  sunset.innerText = formataData(result.sys.sunset);

  markerResult(result);
};

function direccionViento(deg) {
  if (deg > 337.5) return "Norte";
  if (deg > 292.5) return "Noroeste";
  if (deg > 247.5) return "Oeste";
  if (deg > 202.5) return "Suldoeste";
  if (deg > 157.5) return "Sul";
  if (deg > 122.5) return "Sudeste";
  if (deg > 67.5) return "Oeste";
  if (deg > 22.5) return "Nordeste";
  return "Norte";
}

function formataData(date) {
  let format = new Date(date);
  const hour = format.getHours();
  const min = format.getMinutes();
  const sec = format.getSeconds();
  const dateFormater = `${hour}:${min}:${sec}`;
  return dateFormater;
}
