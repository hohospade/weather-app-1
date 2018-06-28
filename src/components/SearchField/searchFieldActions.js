import axios from 'axios';
//This const export is going into the search field reduce to be called in the axios function.
export const types = {
    GET_WEATHER: 'GET_WEATHER',
    UPDATE_CITY: 'UPDATE_CITY',
    
};
//getweather will display requested weather info on the left panel. Back ticks used in order to get ${city} to work correctly. The ${city} added into the api url will pull anything that I enter into the search field. I can also use a + city + with also using back ticks in place of the ${city}.

export function getWeather(city) {
    return {
        type: types.GET_WEATHER,
        payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=646de5ebd97d00284a039220b85837f7`)
            .then(results => results.data)
            .catch(err => console.log(err))
    }
};

export function updateCity(city) {
    return {
        type: types.UPDATE_CITY,
        payload: {
            city: city
        }
    }
};
