const mongoos=require('mongoose');

const productsShema=new mongoos.Schema(
    {
        name:String,
        type:String,
        price:Number
    }
);

module.exports =mongoos.model('products',productsShema);