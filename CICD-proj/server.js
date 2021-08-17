const express = require('express')
const server = express()
const PORT = 5455

server.use(express.static('./public'))

/*
server.get('/',(req,res)=>{
  console.log('request in')
  res.json({data:"hello from server"})
})
*/
server.listen(PORT,()=>{
  console.log("server is listening: ", PORT)
})