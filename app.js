const express = require('express');
const mongoose=require('mongoose')
const admin=require('./router/admin')
const student=require('./router/student')
const register=require('./router/register')
const payment=require('./router/payment')
const inquiry=require('./router/inquiry')
const marks=require('./router/marks')
const onlineClass=require('./router/onlineClass')
const cors = require('cors')
require('dotenv').config()

const app= express();
const port=8000;


app.use(express.json());
app.use(cors())


const url=process.env.MONGO_URL
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB connected..!')
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