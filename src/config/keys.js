if (process.env.NODE_ENV === 'production') {
  console.log(process.env.WEATHER_APP_API)
  module.exports = require('./prod')
} else {
  module.exports = require('./dev');
}