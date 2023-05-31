const express=require('express');
const app=express();
const fetchOne=require('./src/controllers/fetch');
const fetchAll=require('./src/controllers/fetchall');
const post=require('./src/controllers/post');
const update=require('./src/controllers/update');
const deleteOne=require('./src/controllers/delete');



app.use(express.json());


app.use(fetchOne);
app.use(fetchAll);
app.use(post);
app.use(update);
app.use(deleteOne);


app.listen(8080,()=>{console.log("running in 8080 port")});
