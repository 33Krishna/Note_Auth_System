
import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./database/db.js";
import userRoutes from './routes/userRoute.js'

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running at port ${PORT}`)
})