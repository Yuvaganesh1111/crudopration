const express=require('express');
const router=express.Router();
const monmodel=require('../config/mongoose');

router.get("/fetchall",(req,res)=>{
    monmodel.find({}).then((val)=>{res.json(val)})
    .catch(()=>{console.log("error")})
    
    
});

module.exports=router;