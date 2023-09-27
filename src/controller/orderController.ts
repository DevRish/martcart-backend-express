import chalk from "chalk";
import { Request, Response } from "express";
import { IUser } from "../models/User";
import { IOrder, Order } from "../models/Order";

export const getOrderData = async (req: Request, res: Response) => {
    try {
        const currUser: IUser = res.locals.user;
        const orders: IOrder[] = await Order.find({ userId: currUser._id }); 

        return res.status(200).json({ orders: orders});

    } catch (err) {
        console.log(chalk.redBright(`[-] Error while fetching orders : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const addOrder = async (req: Request, res: Response) => {
    try {
        const { prodid, date, time, quantity, totalPrice, address } = req.body;
        const currUser: IUser = res.locals.user;
        const newOrder: IOrder = { 
            productId: prodid, 
            userId: currUser._id,
            date, 
            time, 
            quantity, 
            totalPrice, 
            address
        };
        const newOrderDoc = await Order.create(newOrder);

        console.log(chalk.greenBright("[+] Order added"));
        return res.status(200).json({ message: "Order added successfully", data: newOrderDoc });

    } catch (err) {
        console.log(chalk.redBright(`[-] Error while adding order : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};