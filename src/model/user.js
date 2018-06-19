const mongoose = require("mongoose");
var schema = mongoose.Schema;
// sample user schema
var UserSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    password:{ type:Number , required : true} 
});

module.exports =  mongoose.model('User', UserSchema); // 