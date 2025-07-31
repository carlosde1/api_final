const express=require('express');
const app=express();
const routerSavory = require('./routes/savoryrouter')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/savory',routerSavory)

module.exports=app;