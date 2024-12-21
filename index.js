const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecomm");
const prodSchema=new mongoose.Schema(
    {
        name:String,
        price:Number,
        type:String
    }
);

const saveIndb=async()=>{
    
    const ProductsModel=mongoose.model('products',prodSchema);
    let data=new ProductsModel({name:"addidas",price:5600,type:"shoes"});
    let result=await data.save();
    console.log(result);
}

const updateIndb=async ()=>{
    const ProductsModel=mongoose.model('products',prodSchema);
    let data=await ProductsModel.updateOne(
        {
            name:"shoes"
        },{
         $set:({price:100})   
        }
    )
    console.log(data);
}

const deleteIndb=async()=>{
    const ProductsModel=mongoose.model('products',prodSchema);
    let data=await ProductsModel.deleteOne({
        name:"rebbok"
    })
    console.log(data);
}

const findIndb=async()=>{
    const ProductsModel=mongoose.model('products',prodSchema);
    let data=await ProductsModel.find({type:"cloths"});
    console.log(data);
}
findIndb();