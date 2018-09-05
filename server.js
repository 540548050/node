const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const serverStatic = require('express-static');
const server = express();
server.use(cookieParser());
server.use(cookieSession({
    name:'busyzz',
    keys:['java','javascript','php']
}))
server.use(bodyParser.urlencoded({extended:false}));

server.use('/',(req,res,next)=>{
    console.log(req.query)
    res.end();
})
server.use(serverStatic('./www'));
server.listen(8088);

