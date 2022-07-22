// imports
import mongoose from "mongoose";

// Defining Schema
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    des1: { type: String, required: true },
    des2: { type: String, required: true },
    des3: { type: String, required: true },

});

// Model
const ProductModel = mongoose.model("product", productSchema);

export default ProductModel;