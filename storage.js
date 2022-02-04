
class Storage {
    constructor() {
        this.city
        this.state
        this.currentCity = 'Miami'
        this.currentState = 'FL'
    }


    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.currentCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null) {
            this.state = this.currentState;
        } else {
            this.state = localStorage.getItem('state');
        }


        return {
            city: this.city,
            state: this.state
        }
    }


    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }

}