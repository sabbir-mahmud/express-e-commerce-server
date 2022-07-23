// imports
import express from 'express';
const router = express.Router();
import {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controller/productController.js';


// routes
router.get('/all', getAllProduct); // GET: Fetching data
router.post('/create', createProduct); // POST: Creating data
router.put('/update/:id', updateProduct); // PUT/PATCH: Updating data
router.delete('/delete/:id', deleteProduct); // Delete: Deleting data

export default router