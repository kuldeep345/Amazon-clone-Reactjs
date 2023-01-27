const Product = require('./models/productsSchema')
const {products} = require('./constant/productData')

const DefaultData = async()=>{
    try {
        products.map(async(item)=>{
        const product = await new Product(item)
        await product.save()
       })
        
    } catch (error) {
        console.log("error"+ error.message)
    }
}

module.exports = DefaultData