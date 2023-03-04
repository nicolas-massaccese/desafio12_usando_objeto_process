const express = require('express');
const { createServer } = require('http');
const socketIo = require('socket.io');
const expressSession = require('express-session');

const { productosApiRouter } = require('./api/productos.js');
const { mensajesApiRouter } = require('./api/mensajes.js');
const { userApiRouter } = require('./api/users.js');
const { randomsApiRouter } = require('./api/randoms.js');

const { productSocket } = require('./webSocket/productosWS.js');
const { messageSocket } = require('./webSocket/mensajesWS.js');

const { mainPage } = require('./pages/loadPages.js');

const path = require ('path');

const { configPort } = require('./enviroment.js');


const app = express();
const server = createServer(app);
const io = socketIo(server, {cors: {origin:"*"}});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${path.join(__dirname, `public`)}`));

app.use(expressSession({
    secret: 'my-super-secret',
    resave: true,
    saveUninitialized: true,
}));

app.use(productosApiRouter);
app.use(mensajesApiRouter);
app.use(userApiRouter);
app.use('/api/randoms', randomsApiRouter);

app.get('/quiensoy', (req,res) => {
    if(req.session.loguedUser){
        res.send(`Usuario Logueado: ${req.session.loguedUser} !!!`);
    } else {
        res.send(`No se ha iniciado session aún !!!`);
    }
});

app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
    if (err) {
        res.status(500).send(`Something terrible just happened!!!`);
    } else {
        res.redirect('/');
    }
    })
});

io.on('connection', async client => {
    console.log(`Client ${client.id} connected`);

    productSocket(client, io.sockets);
    messageSocket(client, io.sockets);

    client.on('login-user', data => {
    if(data.estado == 1){
        const sendString = JSON.stringify({ user: data.usuario, html: mainPage });
        client.emit('reload', sendString);
    } else {
        client.emit('user-error', data.mensaje);
    }
    });
});


server.listen(configPort.p, () => {
    console.log(`Servidor http WebSocket escuchando en el puerto ${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/info', async (req, res) => {
    
// res.send(
//     'Argumentos de entrada:'  + process.platform;
//     'Nombre de la plataforma (sistema operativo):' + process.platform;
//     'Versión de node.js:' + process.version;
//     'Memoria total reservada (rss):' + process.memoryUsage();
//     'Path de ejecución:'
//     'Process id:' + process.pid;
//     'Carpeta del proyecto:' + process.cwd();

// )


});

