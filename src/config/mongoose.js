require('dotenv').config();
const mongoose=require('mongoose');
const url=process.env.DB_URL;
const collname=process.env.COLLECTION_NAME;
const schema=require('../model/schema')
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true}).then((result)=>{})
.catch((err)=>console.log(err))

const monmodel=mongoose.model(collname,schema);
module.exports=monmodel;