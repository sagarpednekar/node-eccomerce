const express = require("express");
var router = express.Router();
var User = require('../model/user');


router.post("/user/new", (req, res) => {
    var myuser = new User;
    //myemp._id = mongoose.Types.ObjectId();
    myuser.name = req.body.name;
    myuser.email = req.body.email;
    myuser.contact = req.body.contact;
    myuser.password = req.body.password;
    myuser.save((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log("User created successfully");
            res.json(data);
        }
    });
});




module.exports = router;