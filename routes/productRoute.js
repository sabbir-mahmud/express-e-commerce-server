// imports
import express from 'express';
const router = express.Router();
import {
    getAllProduct,
    createProduct
} from '../controller/productController.js';


// routes
router.get('/all', getAllProduct);
router.post('/create', createProduct);

export default router