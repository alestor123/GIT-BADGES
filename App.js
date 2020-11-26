require('dotenv').config()
var express = require('express'),
app = express(),
axios = require('axios'),
port = process.env.PORT || 3000,
Model = require('./model/model'),
mongoose = require('mongoose');
app.listen(port, () => console.log(`server running at ${port}`))
