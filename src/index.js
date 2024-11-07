//require('dotenv').config({path: '/env'}) no issue will be there in using this line but to write improved  version of this code
import dotenv from "dotenv" 
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()