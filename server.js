const express = require('express');
const server = express();
server.use((req,res,next)=>{
    next();
})
server.use('/index.html',(req,res)=>{
    console.log('bubu')
    res.end()
})
server.listen(8088);

