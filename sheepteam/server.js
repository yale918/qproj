console.log("hello world");

const express = require("express");
const server = express();
const PORT = 5555;



server.use(express.static('public'))

/*
server.get('/',(req,res)=>{
  res.send("respond from server.js");
})
*/

server.listen(PORT,()=>{
  console.log("server is listen on port: ",PORT);
})

