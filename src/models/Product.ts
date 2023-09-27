import mongoose, { Types } from "mongoose";

const productSchema = new mongoose.Schema({
    prod_name: String,
    img_url: String,
    price: Number,
    discount_percent: Number,
    tags: [String]
});

export interface IProduct {
    _id?: Types.ObjectId,
    prod_name: string,
    img_url: string,
    price: number,
    discount_percent: number,
    tags: [string],
};

export const Product = mongoose.model("Product", productSchema);