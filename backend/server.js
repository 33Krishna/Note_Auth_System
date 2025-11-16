import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in Middleware
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoute)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});