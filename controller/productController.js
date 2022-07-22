// imports 
import ProductModel from '../models/productsModel.js';

// product controllers
// get all product : get method
const getAllProduct = async (req, res) => {
    const products = await ProductModel.find({})
    res.send(products)
}

// Create a product : post method
const createProduct = async (req, res) => {
    try {
        const { title, price, img, des1, des2, des3 } = req.body;
        if (title && price && img && des1 && des2 && des3) {
            const product = new ProductModel({
                title: title,
                price: price,
                img: img,
                des1: des1,
                des2: des2,
                des3: des3

            });
            const result = await product.save();
            res.send(result);
        } else {
            return res.send({
                message: 'Please fill the required fields'
            });
        };
    } catch (error) {
        console.log(error);
    }
};

// Update a product 
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const product = await ProductModel.findById(id)
            if (product) {


                return res.send({
                    message: "product updated"
                })
            } else {
                return res.send({
                    message: "Product not found."
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllProduct,
    createProduct,
    updateProduct
}