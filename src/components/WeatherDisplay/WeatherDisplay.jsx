import React from 'react';

export default class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city,
      icon,
      lat = '',
      lon = '',
      temperature,
      pressure,
      humidity,
      lowTemp,
      highTemp,
      windSpeed,
      error,
      firstRender,
      pending } = this.props;
    let snippet;
    if (firstRender && !pending) {
      snippet =
        <div className='card border-primary mb-3'>
          <div className='card-header text-white bg-primary' id='text' >Weather Info</div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-12 col-md-12'>
                <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                  <h5 className='card-title' id='text' >Your weather is waiting</h5>
                </div>
              </div>
            </div>
          </div>
        </div>;
    } else if (error) {
      snippet =
        <div className='card border-primary mb-3'>
          <div className='card-header text-white bg-primary' id='text' >Weather Info</div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-12 col-md-12'>
                <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                  <h3 className='card-title' id='text2' >Error Error does not compute!!!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>;
    } else if (pending) {
      snippet =
        <div className='card border-primary mb-3'>
          <div className='card-header text-white bg-primary'>Pending...</div>
        </div>;
    } else {
      snippet =
        <div className='card border-primary mb-3'>
          <div className='card-header text-white bg-primary'>City Information</div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-12 col-md-12'>
                <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                  <h2 className='card-title'>{city}</h2>
                  <p className='card-text'><small>{`Lat:  ${lat}, Lon: ${lon}`}</small></p>
                </div>
                <hr />
                <div style={{ 'paddingBottom': '40px' }} className='row'>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Temperature (F)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{temperature}</h5>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Pressure (mbar)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{pressure}</h5>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Humidity (%)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{humidity}</h5>
                    </div>
                  </div>
                </div>
                <div style={{ 'paddingBottom': '40px' }} className='row'>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Lowest Temp (F)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{lowTemp}</h5>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Highest Temp (F)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{highTemp}</h5>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div style={{ borderColor: 'white' }} className='card card-outline-default text-center'>
                      <h6 className='card-title'>Wind Speed (mph)</h6>
                      <h5 style={{ color: 'blue' }} className='card-text'>{windSpeed}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
    return (
      snippet
    )
  }
}