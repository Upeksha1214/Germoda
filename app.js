const express = require('express');
const app= express();
const port=3535;
const mongoose=require('mongoose');

app.use(express.json());

const url='mongodb://localhost/germado'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})

app.listen(port,()=>{
    console.log("sever api start on port port 8000 ")
})