const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Product = require('../model/product');
var Cart = require('../model/cart');

// add new product

router.get("/add-to-cart/:id", (req, res) => {
    var productId = req.params.id;
    var cart = new Cart({});
    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
         cart.add(product, product.id);
         console.log(cart);
         res.json(cart);
     });
});

router.post("/product/new", (req, res) => {
    var myproduct = new Product;
    myproduct._id = mongoose.Types.ObjectId();
    myproduct.pname = req.body.pname;
    myproduct.price = req.body.price;
    myproduct.quantity = req.body.quantity;

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