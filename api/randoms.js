const Router = require('express');

const { fork } = require('child_process');
const randomsApiRouter = new Router()

// let visits = 0;

// const longProcess = fork('./helpers/longProcess.js');


let visit = 0

console.log(visit);

randomsApiRouter.get('/', async (req, res) => {
    
    visit ++;

    console.log(visit);

    res.send(`usted a visitado ${visit} veces`);

    // const { cant } = req.query;
    
    // let pantalla
    // function randomNumbers ( min, max){
    //     return Math.floor(Math.random() * ( max - min +1) + min);
    // }

    //     for( let i = 1; i <= cant ; i++){
    //         pantalla = (randomNumbers(1, 1000));

    //     }
    
        // pantalla = Array.from({ length: cant ?? 5 }).map(() => ({
            
        //     }));
        // console.log(pantalla);

    


    // let numbers = Math.floor(Math.random()*1000);


    // numbers = Array.from({ length: cant ?? 5 }).map(() => ({
    //     name: faker.name.firstName(),
    
    // })); 

    // res.json(numbers);

    // if(cant){

    // }
    // let num = Math.floor(Math.random()*1000);
});

// randomsApiRouter.get('/check', async (req, res) => {
    
//     // visits ++;

//     // res.send(`tenemos ${visits}`);
//     longProcess.send('message');

//     longProcess.on('message', (msg) => {
//         res.end(`la suma es  ${msg.num}`);

//     })

// });




// app.get('/api/products-test', (req, res) => {
//     const { cant } = req.query;
    
//     const products = Array.from({ length: cant ?? 5 }).map(() => ({
//         name: faker.name.firstName(),
//         description: faker.commerce.product(),
//         price: faker.finance.amount(),
//         photo: faker.image.cats(),
//         stock: faker.datatype.number(),        
//     })); 
//     let dataHtml = `<div class="container">
//     <table class="table">
//         <thead>
//             <tr>
//                 <th scope="col">name</th>
//                 <th scope="col">description</th>
//                 <th scope="col">price</th>
//                 <th scope="col">photo</th>
//                 <th scope="col">stock</th>
//             </tr>
//         </thead>
//         <tbody>`;

//     let dataCierre = `</tbody>
//                     </table>
//                     </div>`

//     products.forEach(data => {
//         dataHtml +=`      
//                     <tr>
//                         <td>${data.name}</th>
//                         <td>${data.description}</td>
//                         <td>${data.price}</td>
//                         <td>${data.stock}</td>
//                         <td><img height="60p" src="${data.photo}" alt="${data.name}"></td>
//                     </tr>`
//     });
//     res.send(`${dataHtml}${dataCierre}`);
// });




module.exports = { randomsApiRouter };