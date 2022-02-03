const wLocation = document.querySelector('#w-location');
const ui = new UI();



const weather = new Weather('boston', 'MA');


weather.getWeather()
    .then((weatherItem) => {
        ui.paint(weatherItem);
    })
    .catch(err => console.log(err));
