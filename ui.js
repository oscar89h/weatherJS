
class UI {
    constructor() {
        this.location = document.querySelector('#w-location')
        this.des = document.querySelector('#w-des')
        this.string = document.querySelector('#w-string')
        this.details = document.querySelector('#w-details')
        this.icon = document.querySelector('#w-icon')
        this.humidity = document.querySelector('#w-humidity')
        this.feelsLike = document.querySelector('#w-feels-like')
        this.dewPoint = document.querySelector('#w-dewpoint')
        this.wind = document.querySelector('#w-wind')
    }

    paint(weather) {

        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature.string; 
        this.icon.setAttribute('src', weather.icon_url);
        this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`
        this.dewPoint.textContent = `Dewpoint: ${weather.dewpoint_string}`
        this.wind.textContent = `Wind: ${weather.wind_string}`
        this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`


    }
}