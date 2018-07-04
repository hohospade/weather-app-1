import React from 'react';
import { getWeather, updateCity } from './searchFieldActions';
// import { updateWeatherInfo } from '../WeatherDisplay/weatherDisplayActions';
import { addNewSearchItem } from '../SearchHistory/searchHistoryActions';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }
  // This is for the search bar area for the initial search

  handleClick(event) {
    const { dispatch, selectedCity } = this.props;
    // dispatch(updateWeatherInfo());
    dispatch(getWeather(selectedCity));
    dispatch(addNewSearchItem(selectedCity));
  }

  // This is for the pre setup city tab above the search bar no matter what the city presets are changes to.
  handleTabClick(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
    dispatch(addNewSearchItem(event.target.value));
  }

  //This will handle the update when I enter a new value into the search bar
  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  render() {
    const selectedCity = this.props.selectedCity;
    return (
      <div>
        {/* This will be the history button to look back at the last 5 searches which each button is putting the city name into the search function anything you change the name to it will change the search*/}
        <button onClick={this.handleTabClick} value='Nashville' className='btn btn-primary' id='text' >Nashville</button>
        <button onClick={this.handleTabClick} value='Tokyo' className='btn btn-primary' id='text' >Tokyo</button>
        <button onClick={this.handleTabClick} value='Los Alamitos' className='btn btn-primary' id='text' >Los Alamitos</button>
        <button onClick={this.handleTabClick} value='London' className='btn btn-primary' id='text' >London</button>
        <button onClick={this.handleTabClick} value='New York' className='btn btn-primary' id='text' >New York</button>
        {/* This will be the input field and button to search for the cities */}
        <div className='input-group'>
          <input id='city' onChange={this.handleInputChange} value={selectedCity} className='form-control' type='text' placeholder='Enter a City' />
          <span className='input-group-btn'>
            <button onClick={this.handleClick} className='btn btn-primary' type='button'>Get Weather!</button>
          </span>
        </div>
        <p></p>
      </div>
    )
  }
}