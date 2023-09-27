import mongoose, { Types } from "mongoose";

const orderSchema = new mongoose.Schema({
    productId: { 
        type: Types.ObjectId,
        ref: "Product",
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
    },
    date: String,
    time: String,
    quantity: Number,
    totalPrice: Number,
    address: String,
});

export interface IOrder {
    _id?: Types.ObjectId,
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    date: string,
    time: string,
    quantity: number,
    totalPrice: number,
    address: string,
}

export const Order = mongoose.model("Order", orderSchema);