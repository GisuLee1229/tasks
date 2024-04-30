const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userModel = require('./model/usersModel')
const studentModel = require('./model/studentModel')

const app = express()


app.get('/home', (req, res)=> {
    res.json({ message: "yes"})
})


mongoose.connect(process.env.MONGO_DB)
        .then(()=> {
            app.listen(process.env.PORT, ()=> {
                console.log("server start")
            })
        })
        .catch((error)=> {
            console.log(error)
        })
