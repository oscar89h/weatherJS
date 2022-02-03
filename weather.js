
class Weather {
    constructor(city, state) {
        this.apikey = '165161sad15d6fs1ca6';
        this.city = city;
        this.state = state;

    }

    async getWeather () {
        const res = await fetch('http://dataservice.accuweather.com/forecasts/v1/minute');

        const responseData = await res.json();

        return responseData.current_observation;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
