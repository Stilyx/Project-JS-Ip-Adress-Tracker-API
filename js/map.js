// Fix UTC Number

const fixUTC = item => (item = `${item.slice(0, 3)}:${item.slice(3)}`);

export const infoContent = ({ip, city, utc_offset, org}) => {
  document.querySelector('.ipAdress').textContent = ip;
  document.querySelector('.location').textContent = city;
  document.querySelector('.timeZone').textContent = `${fixUTC(utc_offset)}`;
  document.querySelector('.isp').textContent = org;
};

// Show Map

var map;

export const showMapLocation = ({latitude, longitude}) => {
  var iconMarker = L.icon({
    iconUrl: './images/icon.png',
    iconSize: [45.96, 55.02]
  });

  if (map === undefined) {
    map = L.map('map').setView([latitude, longitude], 14);
  } else {
    map.remove();
    map = L.map('map').setView([latitude, longitude], 14);
  }

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([latitude, longitude], {icon: iconMarker}).addTo(map);
};
