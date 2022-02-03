const wLocation = document.querySelector('#w-location');




const weather = new Weather('boston', 'MA');


weather.getWeather()
    .then((weatherItem) => {
    console.log(weatherItem)})
    .catch(err => console.log(err));
