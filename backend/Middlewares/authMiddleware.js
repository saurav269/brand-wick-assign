

  const JWT = require("jsonwebtoken")

  //Protected Route by Token
   const requireSignIn= async(req, res , next)=>{
    try{
        const decode = JWT.verify
        (req.headers.authorization, process.env.JWT_SECURE);
        req.user = decode;
        next()
    }catch(err){
        console.log(err)
        res.status(401).send({
            success:false,
            err,
        })
    }
  };
  module.exports = requireSignIn