import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    itemCount: Number,
    tagLine: String,
});

export interface ICategory {
    _id?: Types.ObjectId,
    name: string,
    itemCount: number,
    tagLine: string,
};

export const Category = mongoose.model("Category", categorySchema);