const express = require('express');
const app = express();

const index = require('./routes/index');
const filmes = require('./routes/filmesRouter');

app.use((req,res,next) =>{
    console.log('¬¬¬¬¬¬ Nova requisicao realizada');

    next()
});

app.use('/', index);
app.use('/filmes',filmes);

module.exports = app;