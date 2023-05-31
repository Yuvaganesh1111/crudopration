const express=require('express');
const router=express.Router();
const monmodel=require('../config/mongoose')

router.get("/fetch/:id",(req,res,next)=>{
    fetchid=req.params.id;
    monmodel.find({id:fetchid}).then((value)=>{if(value){res.send(value)}
    else{ res.status(404).send("no value found")}})
    .catch((err)=>{res.status(404).send("error")})
    
    
});
module.exports=router;