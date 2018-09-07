const express = require('express');
const expressStatic = require('express-static');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const server = express();
server.use(cookieParser());
server.use(cookieSession({
    keys:['java','javascript','php']
}))
console.log('test')
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());
server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);
server.use('/login',(req,res)=>{
    res.send('okok')
})
server.use('/index',(req,res)=>{
    res.render('index.ejs',{name:'busyzz'})
})

server.use(expressStatic('./www'))
server.listen(8088)

