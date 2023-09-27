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
    quantity: Number,
    address: String,
    totalPrice: Number,
    orderedAt: Date,
});

export interface IOrder {
    _id?: Types.ObjectId,
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    quantity: number,
    address: string,
    totalPrice: number,
    orderedAt: string,
}

export const Order = mongoose.model("Order", orderSchema);