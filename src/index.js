const express = require("express");

 const app = express()

 app.listen(3000)

 app.get("/", (req,res)=>{
  return res.json({message:" oi"})
 })