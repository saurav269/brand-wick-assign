   const comparePassword = require("../Helpers/authHelper.js")
   const hashPassword = require("../Helpers/authHelper.js")
   const userModel = require("../Models/userModel.js")

   const bcrypt = require("bcryptjs")
   const jwt = require("jsonwebtoken");
   
      const registerControler = async(req, res)=>{
      try{
         const{name,email,password,phone,address,answer} = req.body
         //validation
         if(!name){
            return res.send({message : 'Name is required'})
         }
         if(!email){
            return res.send({message : 'email is required'})
         }
         if(!password){
            return res.send({message : 'password is required'})
         }
         if(!phone){
            return res.send({message : 'phone is required'})
         }
         if(!address){
            return res.send({message : 'address is required'})
         }
         if(!answer){
            return res.send({message : 'Answer is required'})
         }
         //check user
         const existingUser = await userModel.findOne({email})
         //checking existing user
         if(existingUser){
            return res.status(200).send({
               sucess : true,
               message : 'Already Register please login'
            })
         }
         //hash Password
        const salt = await bcrypt.genSalt(5)
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success : true,
            message:"User has been register successfully",
            user,
        })

      }catch(err){
         console.log(err)
         res.status(600).send({
            success : false,
            message : 'Error in Registration',
            err
         })   
      }  
   };

   //POST LOGIN
    const loginControler = async(req, res)=>{
      try{
         const {email, password} = req.body
         //validation
         if(!email || !password){
            return res.status(404).send({
               success: false,
               message : 'Invalid email or password'
            })
         }
         //check user
         const user = await userModel.findOne({email})
         if(!user){
            return res.status(404).send({
               success: false,
               message : 'Email is not registered'
            })
         }
         //compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
            res.status(500).send({
                success : false,
                message : 'Invalid Credential'
            })
        }
        const token = jwt.sign({userID : user._id}, process.env.JWT_SECURE, {expiresIn: "1d"})
        return res.status(200).send({
            success : true,
            message:"User has been Login successfully",
            token,
            user,
        })
      }catch(err){
         console.log(err)
         res.status(500).send({
            success : false,
            message : 'Error in Login',
            err
         })
      }
   };
   //ForgotPasswordController
     const forgotPasswordController= async(req,res)=>{
      try{
         const {email,answer,newpassword} = req.body
         if(!email){
            res.status(400).send({
               message : 'Email is required'
            })
         }
         if(!answer){
            res.status(400).send({
               message : 'Answer is required'
            })
         }
         if(!newpassword){
            res.status(400).send({
               message : 'New Password is required'
            })
         }
         //CHECKING
         const user = await userModel.findOne({email,answer})
         //validation
         if(!user){
            return res.status(404).send({
               success : false,
               message : 'Wrong Email or Answer'
            })
         }
         const hashed = await hashPassword(newpassword)
         await userModel.findByIdAndUpdate(user._id, {password : hashed})
         res.status(200).send({
            success : true,
            message : 'Password Reset Successfully'
         })

      }catch(err){
         console.log(err)
         res.status(500).send({
            success : false,
            message : 'Something went wrong',
            err
         })
      }
   }


   module.exports = {registerControler, loginControler, forgotPasswordController, }



  