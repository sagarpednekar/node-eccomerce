const mongoose = require("mongoose");
var schema = mongoose.Schema;
var Product = require('./product');
var orderSchema = new schema({
    address: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'       
    },
    status: String,
    orderedQautity: Number,
    billAmt: Number,
    cart: {type: Object, required: true}
},
    { timestamps: true },

    /**
     * The version key purpose is optimistic locking.
     * When enabled, the version value is atomically incremented whenever a document is updated.
    */
    { versionKey: '_orderkey' },
    // {versionKey: false },
    {
        collection: 'product-orders'
    });
       //In an async function, you can await for any Promise or catch its rejection cause.
       const Order = mongoose.model('Order', orderSchema);
/*        async function listOrders() {
           const orders = await Order
           .find()
           .populate('user','name')
           .populate('product','pname') 
           .select('status user')
           console.log(orders);
       } 
       listOrders(); */

module.exports = mongoose.model('Order', orderSchema);
