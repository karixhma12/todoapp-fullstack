const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

router.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const hashedPassword = await bcrypt.hash(password,10);

    User.create({
        username : username,
        email : email,
        password : hashedPassword
    })
    .then(()=>{
        res.json({message : "Signed up successfully!"});
    })
    .catch((err)=>{
        res.status(401).json({message : "emailId/username already exists. Try again!"})
    })

})


router.post("/login",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({
        email : email
    })

    if(!user){
        return res.status(403).json({message: "Invalid credentials!"});
    }

    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password,hashedPassword);

    if(passwordsMatch){
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET);
        return res.status(200).json({message : "Successfully logged in!", token : token});
    }
    else{
        return res.status(403).json({message : "Invalid credentials!"});
    }

})  


module.exports = router;
