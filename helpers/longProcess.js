process.on('message', () => {

    let num = Math.floor(Math.random()*100);
    // res.sendStatus(num);

    process.send({ num });
});