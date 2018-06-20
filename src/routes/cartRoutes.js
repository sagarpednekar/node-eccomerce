const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Product = require('../model/product');
var Cart = require('../model/cart')

router.get('/add-to-cart/:userID/:id', function (req, res, next) {
    var productId = req.params.id;
    var userId = req.params.userID;
    var cart = new Cart;
    //find user
    Cart.findOne({user: userId},(err,data)=>{
        if (err) {
            console.error(err);
        }
        console.log(data._id);
        res.json(data);
    })
/*     Product.findById(productId,(err,data)=>{
        if(err) res.send(err);
        var storedItem = data._id = {qty: 0, item: data, price: 0};
        if (cart) {
            cart.product = data;
            cart.user= userId;
            cart.totalQty ++;
            storedItem.qty ++;
            cart.totalPrice = data.price * storedItem.qty;
            cart.items = storedItem;
            cart.save((err, data) => {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(data);   
                    res.json(cart);
                }
            });            
        } else {
            //cart.product = data;
            cart.totalQty ++;
            storedItem.qty ++;
            cart.totalPrice = data.price * storedItem.qty;
            cart.items = storedItem;
            cart.update((err, data) => {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(data);
        
                    res.json(listCarts());
                }
            });                     
        }
    });   
 */});
// router.get('/remove-from-cart/:id', function (req, res, next) {
//     var productId = req.params.id;
//     var cart = new Cart(req.session.cart ? req.session.cart.items : {});
//     Product.findById(productId, function (err, product) {
//         cart.remove( product.id);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.json(req.session.cart);
//     });
// });


module.exports = router;