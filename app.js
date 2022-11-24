const express = require('express');
const app= express();
const port=8000;
const mongoose=require('mongoose');

app.use(express.json());

const admin=require('./router/admin')


const url='mongodb://localhost:27017' 
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})

app.use('/admin',admin)

app.listen(port,()=>{
    console.log("sever api start on port port 8000 ")
})