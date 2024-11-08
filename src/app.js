import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// three major configuration 
app.use(express.json({limit: "16kb"})) // to accept the json data 
app.use(express.urlencoded({extended: true,limit: "16kb"})) // url improvement like %20 and + between url search
app.use(express.static("public")) // public assets for storing the photo files in server

app.use(cookieParser())  


export {app}
