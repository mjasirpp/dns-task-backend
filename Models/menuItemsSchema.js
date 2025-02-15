const mongoose = require('mongoose')

const menuItemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    menuId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
})

const menuItems = mongoose.model("menuItems",menuItemsSchema)

module.exports = menuItems