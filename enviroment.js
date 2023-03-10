const yargs = require('yargs/yargs')(process.argv.slice(2));

const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const mongoDb = process.env.MONGO_DB
const mongoUri = process.env.MONGO_URI

const configPort = yargs.alias(

    {
        p: 'puerto',
    },
)
.default({
    puerto: 8080,
}).argv; 

console.log(JSON.stringify(configPort, null, 2));

module.exports = { mongoUser, mongoPass, mongoDb, mongoUri, configPort };
