const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const secretKey = process.env.KEY

const authenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.Amazonweb;
        console.log(token)
        const verifyToken = jwt.verify(token , secretKey)
 

        const rootUser = await User.findOne({_id:verifyToken._id , "tokens.token":token })
        
        if(!rootUser){ throw new Error("user not found") }

        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id

        next();

    } catch (error) {
        res.status(401).send("unauthorized user")
        console.log(error)
    }
}

module.exports = authenticate