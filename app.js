const express = require('express');
const mongoose=require('mongoose')
const admin=require('./router/admin')
const student=require('./router/student')
const register=require('./router/register')
const payment=require('./router/payment')
const inquiry=require('./router/inquiry')
const marks=require('./router/marks')
const onlineClass=require('./router/onlineClass')


const app= express();
const port=8000;


app.use(express.json());


const url='mongodb://localhost:27017' 
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})

app.use('/admin',admin)
app.use('/student',student)
app.use('/register',register)
app.use('/payment',payment)
app.use('/inquiry',inquiry)
app.use('/marks',marks)
app.use('/onlineClass',onlineClass)

app.listen(port,()=>{
    console.log("sever api start on port port 8000 ")
})