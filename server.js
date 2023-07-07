const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const path = require('path');
const {v4: uuidv4} =  require("uuid");
const router = require('./router');
const app = express();

const PORT = 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

app.use('/route',router);

app.get('/',(req,res)=>{
    res.render('base',{title: "Login"});
});

app.listen(PORT,()=>{
    console.log(`server firing on http://localhost:${PORT}`);
});