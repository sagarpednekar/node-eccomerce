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
router.get("/user/:userid", (req, res) => {
    var userid = req.params.userid;
    //myemp._id = mongoose.Types.ObjectId();
    User.findById(userid,(err,data)=>{
        if(err)
            res.json(err);
        res.json(data);
        console.log(data);
    })    
    });
    router.get("/user", (req, res) => {
        //myemp._id = mongoose.Types.ObjectId();
        User.find((err,data)=>{
            if(err)
                res.json(err);
            res.json(data);
            console.log(data);
        })    
        });
        router.get("/:userid/:cartid", (req, res) => {
            var userid = req.params.userid;
            var cartid = req.params.cartid;
            
            //myemp._id = mongoose.Types.ObjectId();
            User.find((err,data)=>{
                if(err)
                    res.json(err);
                res.json(data);
                console.log(data);
            })    
            });


module.exports = router;