const express=require('express')
const users=require('./Routers/users')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()

app.use(cors())

mongoose.connect('mongodb+srv://vicky:admin138@cluster0.8rwpavb.mongodb.net/trendhub')

mongoose.connection.on("connected",()=>{
    console.log("mongo connectd");
})

app.get('/',(req,res)=>{
    res.send("server")
})

app.use('/users',users)

app.listen(3009,()=>{
    console.log("server is running");
})