import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    phone: String,
    email: String,
    password: String,
    cart: { type: Array },
    orders: { type: Array },
    joinDate: { type: Date }
});

export interface IUser {
    firstname: string,
    lastname: string,
    username: string,
    phone: string,
    email: string,
    password: string,
    cart: [],
    orders: [],
    joinDate?: Date,
}

export const User = mongoose.model("User", userSchema);