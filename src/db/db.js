import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'


export const connectDB = async()=>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log("✅ mongoDB Connected");
  } catch (error) {
    console.error("Mongo Connection error", error);
    process.exit(1)
  }
}
