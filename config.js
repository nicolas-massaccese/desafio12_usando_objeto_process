const path = require ('path');

require('dotenv').config()

const {  moUser, moPass, mongoUri  } = require('./enviroment.js');

const mongoUser= moUser;
const mongoPass = moPass;
const database = "ecommerce";
const urlAtlas = mongoUri;


module.exports = { urlAtlas, database };

