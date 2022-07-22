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
        if (title === '' || price === '' || img === '' || des1 === '', des2 === '', des3 === '') {
            return res.send({
                message: 'Please fill the required fields'
            });
        } else {
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

        };

    } catch (error) {
        console.log(error);
    }

};

export {
    getAllProduct,
    createProduct
}