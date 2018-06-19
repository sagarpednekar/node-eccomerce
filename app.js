const express = require("express");
const app = express();
const fs = require('fs');
const PORT = 3000;
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/orders"
var bodyParser = require('body-parser');
const orderRoutes = require('./src/routes/orderRoutes');  // require order routes  
const productRoutes = require('./src/routes/productRoutes'); // routes for products
const userRoutes = require('./src/routes/userRoutes'); // routes for users
//const cartRoutes = require('./src/routes/cartRoutes')
app.use(bodyParser.json()); //Parses the text as JSON and exposes the resulting object on req.body
/**
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) 
 * and exposes the resulting object (containing the keys and values) on req.body
 * 
 */
//app.use(bodyParser.urlencoded({ extended: true })); 
let employee_data = '';
/**
 * Moogoose connection
 * */
mongoose.connect(url).then((db) => {
    console.log("Database Connected");
    app.use('',orderRoutes);
    app.use('',productRoutes);
    app.use('',userRoutes);
  //  app.use('',cartRoutes);
});


fs.readFile('employees.json', 'utf-8', (error, data) => {
    if (error) return;
    employee_data = JSON.parse(data);
});



// listen to port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

