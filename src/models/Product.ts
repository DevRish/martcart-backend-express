import mongoose, { Types } from "mongoose";
import { ICategory } from "./Category";

const productSchema = new mongoose.Schema({
    // Searchable Data
    name: String,
    currentPrice: Number,
    rating: {
        type: Number,
        default: -1
    },
    category: {
        type: Types.ObjectId,
        ref: "Category"
    },
    soldBy: {
        type: Types.ObjectId,
        ref: "User"
    },
    // Non-Searchable Data
    originalPrice: Number,
    imagePath: String,
    choices: [{
        name: String,
        values: [String]
    }],
    specifications: [{
        name: String,
        value: String
    }],
}, { versionKey: false });

export interface IProduct {
    _id?: Types.ObjectId,
    name: string,
    currentPrice: number,
    originalPrice: number,
    rating?: number,
    category: ICategory | Types.ObjectId,
    soldBy: ICategory | Types.ObjectId,
    imagePath: string,
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