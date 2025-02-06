const menuItems = require('../Models/menuItemsSchema');
// const menuItems = require('../Models/menuItemsSchema')

exports.createMenuItems = async(req, res)=>{
    console.log('inside createMenuItems controller');
    const { name, description, price} = req.body
    const { menuId } = req.params;
    try{
        const newMenuItem = new menuItems({name, description, price, menuId});
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    }catch (error){
        res.status(400).json(error.message);
    }
}

exports.getMenuItems = async(req, res)=>{
    console.log('inside getMenuItems controller');
    const { menuId } = req.params;
    try{
        const getmenuItem = await menuItems.find({ menuId });
        res.status(200).json(getmenuItem);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
}