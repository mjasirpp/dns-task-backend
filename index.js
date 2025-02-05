require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./DB/connection')

const server = express()

server.use(cors())
server.use(express.json())

server.use(router)
const PORT = 4000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send(`<h1>Server Started and Backend is running</h1>`)
})