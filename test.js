const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fs = require('fs');
const multer = require('multer');
let objMulter = multer({dest:'./www/upload'});
server.use(objMulter.any());
server.use('/upload',(req,res)=>{
    console.log(req.files)
})
server.use('/index.html',(req,res)=>{
    fs.readFile('./www/index.html',(err,doc)=>{
        res.write(doc);
        res.end()
    })
})
server.listen(8088)
