  

 const mongoose = require("mongoose")

   const connectDB = async()=>{ 
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log('Connect to Db')

    }catch(err){
        console.log(err)
    }
   }

   module.exports= connectDB