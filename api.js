const express=require('express');
require('./config');
const products=require('./products');
const { log } = require('console');
const app =express();
app.use(express.json());


app.post('/create',async (req,res)=>{
    const data=req.body;
    const saveData=new products(req.body);
    const result=await saveData.save();
    res.send(result);
})

app.get('/get',async (req,res)=>{
    
    const saveData=await products.find({name:"demo"});
    //const result=await saveData.find();
    res.send(saveData);
})


app.put('/update_data/:name',async (req,res)=>{
    const data=await products.updateOne({name:req.params.name},{$set:(req.body)});
    console.log(data);
    res.send(data);
    
})

app.delete('/datele/:name',async (req,res)=>{
    const data=await products.deleteOne({name:req.params.name});
    console.log(data);
    res.send(data);    
})
app.get('/search/:key',async (req,res)=>{
    let data=await products.find({
        "$or":[
            {
                "type":{$regex:req.params.key}},
            {
                "name":{$regex:req.params.key}
            }
        ]
    });
    console.log(data);
    res.send(data);
})
app.listen('3000');