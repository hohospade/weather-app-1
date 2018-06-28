import React from 'react';
import SearchField from '../components/SearchField';
import WeatherDisplay from '../components/WeatherDisplay';
import SearchHistory from '../components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div id='mainImage'>
      <div className='container'>
        <div className='jumbotron' id='cat' >
          <h1 className='display-4 text-center'>Eric's Wacky Cat Weather App</h1>
          <p id='tagLine' className='lead text-center'>Best places to take your cat on a afternoon stroll</p>
        </div>

        {/* This will be the input field and button to search for the cities */}
        <div className='row'>
          <div className='col'>
            <SearchField />
          </div>
        </div>

        {/* This section will display the current search data from the submit field pulling the function from the weather display components */}
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <WeatherDisplay />
          </div>

          {/* search history card where data will be displayed in a table format.This data is pulled from the searchHistory component */}
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
