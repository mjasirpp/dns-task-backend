const menu = require('../Models/menuSchema')

exports.create = async(req, res)=>{
    console.log('inside create controller');
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