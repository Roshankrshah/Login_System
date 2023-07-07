const express = require('express');
const router = express.Router();

const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
};

router.post('/login',(req,res)=>{
    res.send("");
});

router.get('/dashboard',(req,res)=>{
    res.send("");
});

router.get('/logout',(req,res)=>{
    res.send("");
});

module.exports = router;
