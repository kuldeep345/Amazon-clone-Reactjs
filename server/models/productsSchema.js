const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    detailsUrl:{
        type:String,
    },
    title:{
        type:Object,
        required:true
    },
    price:{
        type:Object,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    discount:{
        type:String,
        required:true
    },
    tagline:{
        type:String,
        required:true
    }    
})


const Product =  mongoose.model("products" , productsSchema)

module.exports = Product