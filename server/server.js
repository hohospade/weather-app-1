const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();


const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/:city',(req,res)=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.WEATHER_API_KEY}`)
            .then(results => res.send(results.data))
            .catch(err => console.log(err))
})
module.exports = app;
