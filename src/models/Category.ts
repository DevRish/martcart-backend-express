import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    itemCount: {
        type: Number,
        default: 0
    },
});

export interface ICategory {
    _id?: Types.ObjectId,
    name: string,
    itemCount: number,
};

export const Category = mongoose.model("Category", categorySchema);