import mongoose from "mongoose"
import dotenv from "./dotenv"


const ConnectDB = async () => {
  try {
    await mongoose.connect(dotenv.MONGO_URL, {
      
    });
    console.log("mongodb connection...");
  }catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
}

export default ConnectDB;