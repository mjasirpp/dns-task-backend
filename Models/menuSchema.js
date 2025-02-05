const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const menu = mongoose.model("menu",menuSchema)
module.exports = menu