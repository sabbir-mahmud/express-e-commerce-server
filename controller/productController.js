// imports 
import ProductModel from '../models/productsModel.js';

// product controllers
// get all product : get method
const getAllProduct = async (req, res) => {
    const results = await ProductModel.find({})
    res.send(results)
};

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

// Update a product : PUT/PATCH
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const product = await ProductModel.findById(id)
            if (product) {
                const { title, price, img, des1, des2, des3 } = req.body;
                if (title && price && img && des1 && des2 && des3) {
                    const result = await product.update({
                        title: title,
                        price: price,
                        img: img,
                        des1: des1,
                        des2: des2,
                        des3: des3
                    })
                    return res.send({
                        message: "product updated", result
                    })
                } else {
                    return res.send({
                        message: "fil the required fields"
                    })
                }
            } else {
                return res.send({
                    message: "Product not found."
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
};

// Delete a product : DELETE Method
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductModel.findById(id)
        if (product) {
            await ProductModel.findByIdAndRemove(id)
            res.send({
                message: "Product deleted successfully"
            })
        } else {
            res.send({
                message: "Product not found"
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    getAllProduct, // GET Method
    createProduct, // POST Method
    updateProduct, // PUT Method
    deleteProduct, // DELETE Method
}