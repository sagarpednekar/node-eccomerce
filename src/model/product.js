const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    pname: String,
    price: Number,
    quantity: Number
});
//Create Model
//ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', ProductSchema); // 

// ProductSchema.paginate({},{page:3,limit:4}).then(response=>{
// console.log(response);
// });
