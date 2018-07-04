const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();


const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
