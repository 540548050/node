const express = require('express');
const server = express();

server.use('/',(req,res)=>{
    res.send('ok')
})
server.listen(8088);

