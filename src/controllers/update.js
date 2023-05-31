const express=require('express');
const router=express.Router();
const monmodel=require('../config/mongoose');

router.put("/update/:id",async(req,res)=>{
    let selid=req.params.id;
    let upname=req.body.name;
    let upemail=req.body.email;
    monmodel.findOneAndUpdate({id:selid},{$set:{name:upname,email:upemail}},{new:true})
    .then((data)=>{res.send(data)})
    .catch((err)=>{ 
        
        res.status(400).send("error occure");
    });
});

module.exports=router;