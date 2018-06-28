import { connect } from 'react-redux';
import SearchField from './SearchField';

function mapStoreToProps(store) {
    return {
        displayedCity: store.searchField.displayedCity,
        selectedCity: store.searchField.selectedCity,
        temperature: store.searchField.temperature,
        pressure:store.searchField.pressure,
        humidity: store.searchField.humidity,
        lowTemp: store.searchField.lowTemp,
        highTemp: store.searchField.highTemp,
        windSpeed: store.searchField.windSpeed,
        icon: store.searchField.icon,
        lat: store.searchField.lat,
        lon: store.searchField.lon
    };
}

export default connect(mapStoreToProps)(SearchField);