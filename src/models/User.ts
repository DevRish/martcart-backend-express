import mongoose, { Types } from "mongoose";

export enum UserTypes {
    BUYER="BUYER",
    SELLER="SELLER",
    ADMIN="ADMIN"
}

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: Types.ObjectId,
        ref: "Product",
    },
    quantity: Number
}, { _id: false });

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    userType: String,
    phone: String,
    email: String,
    password: String,
    cart: [cartItemSchema],
    joinDate: { type: Date, default: (new Date()).toISOString() }
}, { versionKey: false });

export interface ICartItem {
    productId: Types.ObjectId,
    quantity: number
};

export interface IUser {
    _id?: Types.ObjectId,
    firstname: string,
    lastname: string,
    username: string,
    userType: string,
    phone: string,
    email: string,
    password: string,
    cart: ICartItem[],
    joinDate?: Date,
}

export const User = mongoose.model("User", userSchema);