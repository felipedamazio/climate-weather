let myMap;
let marker;
export const initMaps = () => {
  myMap = L.map("map").setView([0, 0], 1);
  L.control.locate().addTo(myMap);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=dfj41jhMG9SqGX5uwzS2",
    {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 2,
      crossOrigin: true,
    }
  ).addTo(myMap);
};

// classe usada para setar o resultado do serch bar no popup do mapa

export const markerResult = (result) => {
  let latitude = result.coord.lat;
  let longitude = result.coord.lon;

  let position = [latitude, longitude];

  let iconVerde = new L.Icon({
    iconUrl: "../src/img/pinVerde.PNG",
    iconSize: [40, 45],
    shadowSize: [50, 64],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  if (marker) myMap.removeLayer(marker);

  marker = L.marker(position, { icon: iconVerde }).addTo(myMap);
  marker.bindPopup(`${result.name},${result.sys.country}`).openPopup();
};
