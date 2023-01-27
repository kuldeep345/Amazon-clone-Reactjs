const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')

exports.registerUser = async(req,res)=>{

  
const {fName , email , mobile , password , cpassword } = req.body

if(!fName || !email || !mobile || !password || !cpassword){
    res.status(422).json({error:"Please fill all the fields"})
  }

try {
    const preuser = await User.findOne({email:email})

    if(preuser){
        res.status(422).json({error:"this user is already present"})
    }else if(password !== cpassword){
        res.status(422).json({error:"password and confirm password are not matching"})
    }
    else{

        const finalUser = await new User({
            fName , email , mobile , password , cpassword
        })

        const storedata = await finalUser.save()
      
        res.status(201).json(storedata)
    }

} catch (error) {
    res.status(500).json("Internal server error")
}

}


exports.loginUser = async(req,res)=>{
    const { email , password } = req.body
    
    if(!email || !password){
       return res.status(400).json({error:"Please fill all the fields"})
    }

    try {
        const userLogin = await User.findOne({email:email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password);

            const token = await userLogin.generateAuthtoken();
            
            res.cookie("Amazonweb" , token, {
                expires:new Date(Date.now() + 900000),
                httpOnly:true
            })

            if(!isMatch){
               return res.status(400).json({error:"invalid details"})
            }
            else{
                res.cookie("Amazonweb" , token, {
                    expires:new Date(Date.now() + 900000),
                    httpOnly:true
                }).status(200).json(userLogin)
            }
        }
        else{
            res.status(400).json("Invalid credentials")
        }
    } catch (error) {
        res.status(500).json("Internal server error")
        console.log(error)
    }
}