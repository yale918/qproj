const express = require('express')
const server = express()
const PORT = 3333

server.get('/',(req,res)=>{
  res.send("hello from client")
})

server.listen(PORT,()=>{
  console.log("#server listening on: ",PORT)
})