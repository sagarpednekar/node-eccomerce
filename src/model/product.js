const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    imagePath: String,
    description: String,
});
//Create Model
//ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', ProductSchema); // 

// ProductSchema.paginate({},{page:3,limit:4}).then(response=>{
// console.log(response);
// });
