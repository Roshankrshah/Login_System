const express = require('express');
const router = express.Router();

const  credential = {
    email : "admin@backend.com",
    password : "admin123"
};

router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    }else{
        res.end("Invalid username");
    }
});

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user});
    }else{
        res.send("Unauthorized user");
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send("Error");
        }else{
            res.render('base',{title:"Logout",logout:"You logout Successful"});
        }
    })
});

module.exports = router;
