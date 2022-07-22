// imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/connectDB.js'
import productRouter from './routes/productRoute.js'

// create express app
const app = express();

// application layer middleware
app.use(cors());
app.use(express.json());

// connect to DataBase:
const uri = process.env.DB_URI
connectDB(uri)

// root route
app.get('/', (req, res) => {
    res.send('E-commerce server running')
});

// product route
app.use('/api/products', productRouter)

// listening server to port
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})