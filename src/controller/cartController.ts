import chalk from "chalk";
import { ICartItem, IUser, User } from "../models/User";
import { Request, Response } from "express";
import { Types } from "mongoose";
import { Product } from "../models/Product";

export const getCartData = async (req: Request, res: Response) => {
    // isLoggedIn runs before this, so we have res.locals.user
    // but cart items haven't been populated, need to populate them
    try {
        const currUser: IUser = res.locals.user;
        const populatedCart = await User.aggregate([
            {
                $match: {
                    _id: currUser._id
                }
            },
            {
                $unwind: "$cart"
            },
            {
                $lookup: {
                    from: "products",
                    localField: "cart.productId",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $set: {
                    "cart.productId": "$product" 
                }
            },
            {
                $group: {
                    _id: "$_id",
                    cart: { $push: "$cart" }
                }
            }
        ]);
        const cart = populatedCart[0].cart;
        for(const item of cart) {
            item.productId = item.productId[0];
        }
        if(populatedCart.length === 0) {
            res.status(200).json({ message: "Successfully fetched cart", cart: [] });
        } else {
            res.status(200).json({ message: "Successfully fetched cart", cart: cart });
        }
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting cart data : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const addToCart = async (req: Request, res: Response) => {
    try {
        const newProductId = String(req.body.productId);
        const currUser: IUser = res.locals.user;
        const checkIncludes = currUser.cart.find((item: ICartItem) => (String(item.productId) === newProductId));
        if(checkIncludes) { // Item present in cart already. Quantity needs to be modified
            currUser.cart = currUser.cart.map((item: ICartItem) => {
                const q = item.quantity;
                if(String(item.productId) === newProductId) return { ...item, quantity: (q+1) };
                else return item;
            });
        } else { // item not present in cart, need to push
            currUser.cart.push({
                productId: new Types.ObjectId(newProductId),
                quantity: 1,
            });
        }
        await User.findByIdAndUpdate(currUser._id, currUser);

        const product = await Product.findById(req.body.productId);

        console.log(chalk.greenBright("[+] Item added to cart"));
        return res.status(200).json({ message: `Item ${newProductId} added to cart`, product });

    } catch (err) {
        console.log(chalk.redBright(`[-] Error while adding item to cart : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const removeFromCart = async (req: Request, res: Response) => {
    try {
        const productId = String(req.body.productId);
        const currUser: IUser = res.locals.user;
        currUser.cart = currUser.cart.map((item: ICartItem) => {
            if(String(item.productId) === productId) item.quantity = item.quantity - 1;
            return item;
        }).filter((item: ICartItem) => (item.quantity !== 0));

        await User.findByIdAndUpdate(currUser._id, currUser);

        const product = await Product.findById(req.body.productId);

        console.log(chalk.greenBright("[+] Item removed from cart"));
        return res.status(200).json({ message: `Item ${productId} removed from cart`, product });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while removing item from cart : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const emptyCart = async (req: Request, res: Response) => {
    try {
        const currUser: IUser = res.locals.user;
        currUser.cart = [];
        await User.findByIdAndUpdate(currUser._id, currUser);
        console.log(chalk.greenBright("[+] Cart Emptied"));
        return res.status(200).json({ message: "Cart Emptied" });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while emptying cart : ${err}`));
        return res.status(500).json({ message: "Server Error" });
    }
};