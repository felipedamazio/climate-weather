import { exibirToday } from "./src/Js/currentDate.js";
import { CalendarControl } from "./src/Js/calendar.js";
import { saudacao } from "./src/Js/saudacao.js";
import { currentHour } from "./src/Js/currentHour.js";
import { eventSearch } from "./src/Js/ClimaTempo.js";
import { initMaps } from "./src/Js/maps.js";

// Crie a seção .main
const mainSection = document.createElement("section");
mainSection.classList.add("main");

// Crie o elemento .ClimaTempo
const climaTempoDiv = document.createElement("div");
climaTempoDiv.classList.add("ClimaTempo");

// Crie o elemento .header
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");

// Crie o elemento h1
const h1 = document.createElement("h1");
h1.textContent = "Clima Tempo";

// Crie a imagem
const img = document.createElement("img");
img.src = "./src/assets/pngwing.com.png";
img.alt = "imagem não carregada";

// Crie o input
const input = document.createElement("input");
input.type = "text";
input.id = "searchBar";
input.placeholder = "Search...";

// Adicione os elementos uns aos outros
h1.appendChild(img);
headerDiv.appendChild(h1);
headerDiv.appendChild(input);
headerDiv.appendChild(exibirToday());
headerDiv.appendChild(saudacao());

// INICIO DA DIV CONTENT ----------------------------

// Crie o elemento .content
const contentDiv = document.createElement("div");
contentDiv.classList.add("content");

// Crie o elemento .hora-atual
const horaAtualDiv = document.createElement("div");
horaAtualDiv.classList.add("hora-atual");

// Crie os elementos de informações e horas para diferentes locais
const locais = ["bra", "usa", "fra", "chi"];

for (let i = 0; i < locais.length; i++) {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-" + locais[i]);

  const horaDiv = document.createElement("div");
  horaDiv.classList.add("hora-" + locais[i]);

  horaAtualDiv.appendChild(infoDiv);
  horaAtualDiv.appendChild(horaDiv);
}

// Crie o elemento .dados
const dadosDiv = document.createElement("div");
dadosDiv.classList.add("dados");

// Crie o elemento .city
const cityDiv = document.createElement("div");
cityDiv.classList.add("city");
cityDiv.textContent = "Local";

// Crie o elemento .infos-adicionais
const infosAdicionaisDiv = document.createElement("div");
infosAdicionaisDiv.classList.add("infos-adicionais");

// Crie grupos de informações adicionais
const subgrupos = ["subgrup-one", "subgrup-two", "subgrup-three"];

for (let j = 0; j < subgrupos.length; j++) {
  const subgrupoDiv = document.createElement("div");
  subgrupoDiv.classList.add(subgrupos[j]);

  // Crie os elementos para cada subgrupo
  if (j === 0) {
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp");
    tempDiv.innerHTML = "-<span>&deg;C</span>";

    const descDiv = document.createElement("div");
    descDiv.classList.add("desc");
    descDiv.textContent = "Condição";

    subgrupoDiv.appendChild(tempDiv);
    subgrupoDiv.appendChild(descDiv);
  } else if (j === 1) {
    const minDiv = document.createElement("div");
    minDiv.classList.add("min");
    minDiv.innerHTML =
      '<i class="fas fa-temperature-low"></i>Min:<span>&deg;C</span>';

    const maxDiv = document.createElement("div");
    maxDiv.classList.add("max");
    maxDiv.innerHTML =
      '<i class="fas fa-temperature-high"></i>Max:<span>&deg;C</span>';

    subgrupoDiv.appendChild(minDiv);
    subgrupoDiv.appendChild(maxDiv);
  } else if (j === 2) {
    const humidadeDiv = document.createElement("div");
    humidadeDiv.classList.add("humidade");
    humidadeDiv.innerHTML = "Humidade:<span>--</span>";

    const ventoVelocidadeDiv = document.createElement("div");
    ventoVelocidadeDiv.classList.add("vento-velocidade");
    ventoVelocidadeDiv.innerHTML =
      'Velocidade do Vento:<span>--</span><i class="fa fa-wind"></i>';

    const ventoDirecaoDiv = document.createElement("div");
    ventoDirecaoDiv.classList.add("vento-direcao");
    ventoDirecaoDiv.innerHTML =
      'Direção do Vento:<span>--</span<i class="fas fa-location-arrow"></i>';

    const sunriseDiv = document.createElement("div");
    sunriseDiv.classList.add("sunrise");
    sunriseDiv.innerHTML = "Nascer do sol:<span>--</span>";

    const sunsetDiv = document.createElement("div");
    sunsetDiv.classList.add("sunset");
    sunsetDiv.innerHTML = "Por do sol:<span>--</span>";

    subgrupoDiv.appendChild(humidadeDiv);
    subgrupoDiv.appendChild(ventoVelocidadeDiv);
    subgrupoDiv.appendChild(ventoDirecaoDiv);
    subgrupoDiv.appendChild(sunriseDiv);
    subgrupoDiv.appendChild(sunsetDiv);
  }

  infosAdicionaisDiv.appendChild(subgrupoDiv);
}

// Crie o elemento .content-map
const contentMapDiv = document.createElement("div");
contentMapDiv.classList.add("content-map");

// Crie o elemento do mapa
const mapDiv = document.createElement("div");
mapDiv.id = "map";

// Adicione os elementos uns aos outros
contentMapDiv.appendChild(mapDiv);
dadosDiv.appendChild(cityDiv);
dadosDiv.appendChild(infosAdicionaisDiv);
dadosDiv.appendChild(contentMapDiv);

// Crie o elemento .calendar
const calendarDiv = document.createElement("div");
calendarDiv.classList.add("calendar");

contentDiv.appendChild(horaAtualDiv);
contentDiv.appendChild(dadosDiv);
contentDiv.appendChild(calendarDiv);

climaTempoDiv.appendChild(headerDiv);
climaTempoDiv.append(contentDiv);

// INICIO DA DIV FOOTER ----------------------------

// Adicione o link do LinkedIn ao footer
const footer = document.createElement("footer");
const link = document.createElement("a");
link.href = "https://www.linkedin.com/in/felipe-damazio/";

const linkedInImg = document.createElement("img");
linkedInImg.src = "../src/assets/felp.png";
linkedInImg.classList.add("felp");

link.appendChild(linkedInImg);
footer.appendChild(link);

// Adicione o .ClimaTempo e o footer ao .main
mainSection.appendChild(climaTempoDiv);
mainSection.appendChild(footer);

const app = document.querySelector("#app");

// Adicione o .main ao app
app.appendChild(mainSection);

// funções executadas após a montagem do html
initMaps();
CalendarControl();
setInterval(currentHour, 1000);
eventSearch();
