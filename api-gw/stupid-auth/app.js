const express = require('express');
const cors = require('cors');
const auth = require('./auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);

module.exports = app;
