const Product = require('../models/productModel');


const addProduct = async (req,res)=>{
    try{

        const {...ProductDetails}= req.body;
        const newProduct = await Product.create({
            ...ProductDetails
        })
        res.send({ ...ProductDetails})

    }catch(err){
        res.send({
            status : 404,
            message : "fill all the fields",
            err
        })
    }
}


const getProduct =async(req , res)=>{
    try{
        const getProduct = await Product.find();
        res.send({
            status:200,
            getProduct,
        })
    }catch(err){
        res.send({
            status: 404,
            message : "failed to fetch product"
        })
    }
}


module.exports ={ addProduct , getProduct};