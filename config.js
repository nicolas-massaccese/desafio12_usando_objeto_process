const path = require ('path');

require('dotenv').config()

const {  mongoUser, mongoPass, mongoDb, mongoUri  } = require('./enviroment.js');

const user= mongoUser;
const pass = mongoPass;
const database = mongoDb;
const urlAtlas = mongoUri;


module.exports = { urlAtlas, database };

