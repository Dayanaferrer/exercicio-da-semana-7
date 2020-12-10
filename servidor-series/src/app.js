const express = require('express');
const app = express();

const index = require('./routes/index');
const series = require ('./routes/seriesRouter')

app.use((req,res,netx) => {
    console.log('Nova requisicao realizada');

    netx()
});

app.use("/", index);
app.use("/series", series);

module.exports = app;