import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/note_auth_system`);
        console.log(`MongoDB Connected Successfully at: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;