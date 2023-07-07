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
    res.send("");
});

router.get('/logout',(req,res)=>{
    res.send("");
});

module.exports = router;
