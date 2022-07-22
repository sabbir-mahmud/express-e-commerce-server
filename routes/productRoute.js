// imports
import express from 'express';
const router = express.Router();
import {
    getAllProduct,
    createProduct,
    updateProduct
} from '../controller/productController.js';


// routes
router.get('/all', getAllProduct);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);

export default router