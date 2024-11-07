import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// this is second aproach to connect database using mongoose
// in this step we are creating a function in  different file and then using that funciton in index.js of src to connect the database

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection Failed", error);
    process.exit(1); // further study this exit(1) and many more types like exit(0)..... in details
  }
};

export default connectDB
