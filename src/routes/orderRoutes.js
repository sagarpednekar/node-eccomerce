const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Order = require('../model/order');
var Product = require('../model/product');
var User = require('../model/user');


// read
router.get("/", (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) console.error(err);
        res.json(orders)
    }).populate('user', '-password -__v',)
      .populate('product','-__v')
      // to limit the properties .select('status user product'); 
    // res.json(employee_data.employees[parseInt(index)]);
});
// findById    
router.get("/order/:id", (req, res) => {
    let index = req.params.id;
    Order.findById(index, (err, document) => {
        if (err) return;
        res.json(document)
    });
});

// delete
router.delete("/order/:id", (req, res) => {
    let index = req.params.id;
    Order.findByIdAndRemove(index, {}, () => {
        res.send(`Order with ${index} is removed`);
    });
});
// insert
router.post("/order/new", (req, res) => {
    var myorder = new Order;
    //myemp._id = mongoose.Types.ObjectId();    
    myorder.user = req.body.user;
    myorder.product = req.body.product;
    myorder.status = req.body.status;
    myorder.orderedQautity = req.body.orderedQautity;
    myorder.billAmt = req.body.billAmt;
    myorder.save((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log("Order created successfully");
            res.json(data);
        }
    });
});

// update
router.put("/order/:id", (req, res) => {
    let index = req.params.id;
    Order.findByIdAndUpdate(index, req.body, { new: true }, (err, doc) => {
        // res.send(`Data with ${index} is updated`);
        if (err) res.send(err);
        res.json(doc);
    });
});


module.exports = router;