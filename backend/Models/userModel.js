


 const mongoose = require("mongoose")
  
  //creating Schema
  const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone :{
        type : Number,
        required : true
    },
    address : {
        type : {},
        required : true,
    },
    answer : {
      type : String,
      required : true,
    },
    role:{
        type : Number,
        default : 0
    }
  },{
    timestamps : true
  },{
    versionKey : false
  })

  module.exports = mongoose.model('myusers', userSchema)