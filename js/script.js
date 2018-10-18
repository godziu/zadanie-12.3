'use strict'

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
    .then(function(resp) {
    	return resp.json();
    })
    .then(showCountriesList)
    .catch(function() {
      console.log("error");
      document.getElementById('error').innerHTML = "bład";
    })
}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
  resp.forEach(function(item) {
  	var liE1 = document.createElement('li');
  	liE1.innerText = item.name;
  	countriesList.appendChild(liE1);
    document.getElementById('error').innerHTML = "";
  	});
}

document.getElementById('search').addEventListener('click', searchCountries);



