import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env"
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000)
  console.log(`Server is running at Port: ${process.env.PORT}`);
  app.on("Error ",(err)=>{
    console.log("Error: ", err);
    throw err
  }) 
})
.catch((err)=>{
  console.log("MongoDB connection failde !!", err);
})



























/*
(async()=>{                         IIFE (Immediately Invoked Function Expression) 
   try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   } catch (error) {
     console.error("ERROR: ", error)
     throw err
  }
 })() 
*/