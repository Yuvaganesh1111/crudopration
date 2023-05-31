const express=require('express');
const router=express.Router();
const monmodel=require('../config/mongoose');

router.post("/post",async(req,res)=>{
    console.log("inside post");
    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });

    const val=await data.save();
    res.json(val)
})

module.exports=router;