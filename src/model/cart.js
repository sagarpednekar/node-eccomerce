const mongoose = require("mongoose");
var schema = mongoose.Schema;
// sample user schema
var CartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    totalQty: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items : Object
});
var Cart = mongoose.model('Cart', CartSchema);

module.exports =  mongoose.model('Cart', CartSchema); // 


/* module.exports = function Cart(initItems) {
    this.items = initItems;

    this.totalQty = 0;
    this.totalPrice = 0;

    if (this.items) {
        for (var key in this.items) {
            this.totalQty += this.items[key].qty;
            this.totalPrice += this.items[key].qty * this.items[key].item.price;
        }
    }

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {qty: 0, item: item, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;
    };

    this.remove = function (id) {
        this.items[id].qty --;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty --;
        this.totalPrice -= this.items[id].item.price;
        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };
    
    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
}; */