// imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()


// create express app
const app = express();

// application layer middleware
app.use(cors());


// root route
app.get('/', (req, res) => {
    res.send('E-commerce server running')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})