const express = require('express');
const expressStatic = require('express-static');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const server = express();
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'qq540548050',
    database:'node'
})
server.use(cookieParser());
server.use(cookieSession({
    keys:['java','javascript','php']
}))
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());

server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);

const fn = ()=>{
    setTimeout(()=>{
        console.log(4)
    },3000)
}

server.use('/index',async (req,res,next)=>{
    let a = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ok');
        },1000)
    })
    res.end()
})
// server.use('/index',async (req,res,next)=>{
//     await fs.readFile('./www/index.html',(err,data)=>{
//         console.log(data)
//         console.log(2);
//         res.end()
//     })
// })


server.use(expressStatic(__dirname+'/www'));

// server.use(expressStatic('./www'))
server.listen(8088)

