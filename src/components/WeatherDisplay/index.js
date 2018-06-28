import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';

function converKToF(k) {
    return (9 / 5) * (k - 273) + 32;
}

function mapStoreToProps(store) {
    let temp, lowT, highT;
    if (store.searchField.temperature != '') {
        temp = converKToF(store.searchField.temperature).toFixed(2);
        lowT = converKToF(store.searchField.lowTemp).toFixed(2);
        highT = converKToF(store.searchField.highTemp).toFixed(2);
    } else {
        temp = '';
        lowT = '';
        highT = '';
    }
    return {
        temperature: temp,
        pressure: store.searchField.pressure,
        humidity: store.searchField.humidity,
        lowTemp: lowT,
        highTemp: highT,
        windSpeed: store.searchField.windSpeed,
        city: store.searchField.displayedCity,
        icon: store.searchField.icon,
        lat: store.searchField.lat,
        lon: store.searchField.lon,
        error: store.searchField.noResult,
        firstRender: store.searchField.firstRender,
        pending: store.searchField.pending
    };
}

export default connect(mapStoreToProps)(WeatherDisplay);