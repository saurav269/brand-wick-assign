   
   const express = require("express")
   const requireSignIn = require("../Middlewares/authMiddleware")
   const {registerControler, loginControler,forgotPasswordController} = require("../Controllers/authControler")
   //router object
   const router = express.Router()

   //routing
   //REGISTER || POST METHOD
   router.post('/register', registerControler )

   //LOGIN || POST

   router.post('/login', loginControler);

   //FORGOT password route || POST

   router.post('/forgot-password', forgotPasswordController)


   //protected route auth for User
   router.get('/user-auth', requireSignIn, (req,res) =>{
      res.status(200).send({ok : true})
   })
 

  module.exports = router