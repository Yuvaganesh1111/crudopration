const express=require('express');
const router=express.Router();
const monmodel=require('../config/mongoose');

router.delete("/delete/:id",(req,res)=>{
    deleteid=req.params.id;
    monmodel.findOneAndDelete({id:deleteid}).then((val)=>{if(val){res.send(val)}
    else{
        res.status(404).send(`this ID ${deleteid} not found`)
    }
})
.catch((err)=>{res.send(deleteid+"this ID not present")})
})

module.exports=router;