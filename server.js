const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const path = require('path');
const {v4: uuidv4} =  require("uuid");
const router = require('./router');
const app = express();

const PORT = 8080;

app.use('/route',router);

app.get('/',(req,res)=>{
    res.send("Hello from space");
});

app.listen(PORT,()=>{
    console.log(`server firing on http://localhost:${PORT}`);
});