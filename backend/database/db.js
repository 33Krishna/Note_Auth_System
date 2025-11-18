import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected successfully at ${conn.connection.host}`)
        console.log(`Database name is ${conn.connection.name}`)
    } catch(error) {
        console.log(`MongoDB connection error ${error}`)
        process.exit(1);
    }
}

export default connectDB;