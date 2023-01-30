// Imports

import {showMapLocation} from '../js/map.js';
import {infoContent} from '../js/map.js';

// Consts

const formContent = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('.button');

// Get Location API

const changeLocation = async item => {
  const url = await fetch(`https://ipapi.co/${item}/json/`);
  const response = await url.json();
  if (response.error === true) {
    input.placeholder = response.reason;
    return;
  }
  input.placeholder = 'Search for any IP adress or Domain';
  showMapLocation(response);
  infoContent(response);
};

// Send Location API

const sendIpInfo = event => {
  event.preventDefault();
  changeLocation(input.value.trim());
  input.value = '';
  return;
};

formContent.addEventListener('submit', sendIpInfo);
button.addEventListener('click', sendIpInfo);
