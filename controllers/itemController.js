const itemModel = require("../models/itemModel.js");

// get items
const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).send(items);
    } catch (error) {
        console.log(error);
    }
};

// add item
const addItemController = async (req, res) => {
    try {
        console.log("req.body:", req.body);
        const newItem = new itemModel(req.body);
        await newItem.save();
        res.status(201).send("Items Creates Successfully");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
};

module.exports = { getItemController, addItemController };
