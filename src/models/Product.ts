import mongoose, { Types } from "mongoose";
import { ICategory } from "./Category";

const productSchema = new mongoose.Schema({
    // Searchable Data
    name: String,
    currentPrice: Number,
    rating: Number,
    category: {
        type: Types.ObjectId,
        ref: "Category"
    },
    // Non-Searchable Data
    imagePath: String,
    originalPrice: Number,
    choices: [{
        name: String,
        values: [String]
    }],
    specifications: [{
        name: String,
        value: String
    }],
});

export interface IProduct {
    _id?: Types.ObjectId,
    name: string,
    imagePath: string,
    currentPrice: number,
    originalPrice: number,
    rating: number,
    category: ICategory,
    choices: [{
        name: string,
        values: string[]
    }],
    specifications: [{
        name: string,
        value: string
    }],
};

export const Product = mongoose.model("Product", productSchema);