//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js"  // Import the app instance

dotenv.config(
    {
        path: './.env'
    }
)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw err
        })
        
    })
})
.catch((err) => {
    console.log("Mongodb connection failed !!! ", err);
})












/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);            
        })
    } catch(error) {
        console.log("ERROR: ", error);
        throw err 
    }
})() */