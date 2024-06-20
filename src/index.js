import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
})

connectDB()



























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