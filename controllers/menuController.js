const menu = require('../Models/menuSchema')

exports.createMenu = async(req, res)=>{
    console.log('inside createMenu controller');
    const{ name, description} = req.body
    try{
        const menuExists = await menu.findOne({name})
        if(menuExists){ 
            res.status(400).send("Menu already exists");
        }else{
            const newMenu = new menu({name, description});
            await newMenu.save();
            res.status(201).json(newMenu);
        }
    }catch (error){
        res.status(400);
        throw new Error("invalid data");
    }
}

exports.getAllMenu = async(req, res)=>{
    console.log('inside getAllMenu controller');
    try{
        const Menu = await menu.find();
        res.status(200).json(Menu);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
}