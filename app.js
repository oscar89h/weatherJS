const wLocation = document.querySelector('#w-location');


const ui = new UI();

const storage = new Storage();

const weatherLocation = storage.changeLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);


document.addEventListener('DOMContentLoaded', getWeather);


document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

    weather.changeLocation(city, state);

    getWeather();

    storage.setLocationData(city, state)

    $('#localModal').modal('hide');

})


function getWeather() {
    weather.getWeather()
        .then((weatherItem) => {
            ui.paint(weatherItem);
        })
        .catch(err => console.log(err));

}
