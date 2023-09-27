import chalk from "chalk";
import { ICartItem, IUser, User } from "../models/User";
import { Request, Response } from "express";
import { Types } from "mongoose";

export const getCartData = async (req: Request,res: Response) => {
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
        if(populatedCart.length === 0) {
            res.status(200).json({ cart: [] });
        } else {
            res.status(200).json({ cart: populatedCart[0].cart });
        }
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting cart data : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const addToCart = async (req: Request, res: Response) => {
    try {
        const newProductId = String(req.body.prodid);
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

        console.log(chalk.greenBright("[+] Item added to cart"));
        return res.status(200).json({ message: `Item ${newProductId} added to cart` });

    } catch (err) {
        console.log(chalk.redBright(`[-] Error while adding item to cart : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const removeFromCart = async (req: Request, res: Response) => {
    try {
        const productId = String(req.body.prodid);
        const currUser: IUser = res.locals.user;
        const checkIncludes = currUser.cart.find((item: ICartItem) => (String(item.productId) === productId));
        if(checkIncludes) { // Item present in cart already. Quantity needs to be modified
            currUser.cart = currUser.cart.map((item: ICartItem) => {
                const q = item.quantity;
                if(String(item.productId) === productId) {
                    if((q-1) === 0) return; // exclude the item, quantity became 0
                    else return { ...item, quantity: (q-1) };
                }
                else return item;
            });
            currUser.cart = currUser.cart.filter((item) => (!!item)); // eliminate null values

            await User.findByIdAndUpdate(currUser._id, currUser);

            console.log(chalk.greenBright("[+] Item removed from cart"));
            return res.status(200).json({ message: `Item ${productId} removed from cart` });

        } else { // item not present in cart, no need to remove anything
            console.log(chalk.greenBright("[+] Item was not present in cart"));
            return res.status(200).json({ message: "Item was not present in cart" });
        }
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