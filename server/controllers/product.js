const Product = require('../models/productsSchema');

exports.getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}


exports.getProduct = async(req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findOne({_id:id})
        console.log(product)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}