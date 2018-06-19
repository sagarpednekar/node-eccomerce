const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Product = require('../model/product');
var Cart = require('../model/cart')


router.post("/product/new", (req, res) => {
    var myproduct = new Product;
    myproduct._id = mongoose.Types.ObjectId();
    myproduct.name = req.body.name;
    myproduct.price = req.body.price;
    myproduct.quantity = req.body.quantity;
    myproduct.imagePath = req.body.imagePath;
    myproduct.description = req.body.description;
    
    myproduct.save((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log("Product created successfully");
            res.json(data);
        }
    });
});


module.exports = router;