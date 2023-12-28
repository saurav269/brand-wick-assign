


   // import connectDB from './config/db.js';


   const express = require("express")
   const dotenv = require("dotenv")
   const cors = require("cors")
   const connectDB = require("./config/db")
    
    //config env file
    dotenv.config();

    //database config
    connectDB()

    //rest object
    const app = express()

    //middlewares
    app.use(cors())
    app.use(express.json())

    //all routes
    app.use('/api/v1/auth', require("./Route/AuthRoute"))

    //rest api
    app.get('/', (req,res) =>{  
    res.send('<h2>Welcome to my app</h2>')
    })

    //PORT
    const PORT = process.env.PORT

    //run server
    app.listen(PORT, () =>{
       console.log(`Server is running on ${PORT}`)
    })
