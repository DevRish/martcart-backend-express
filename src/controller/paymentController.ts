import chalk from "chalk";
import { Request, Response } from "express";
import { rzp } from "../utils/payment";

export const createRzpOrder = async (req: Request, res: Response) => {
    try {
        const { amount } = req.body;
        
        const order = await rzp.orders.create({
            amount: amount*100, // as this is in paise
            currency: "INR",
            // above two are mandatory, there are 3 other optional parameters, not using any of them right now
        });

        res.status(200).json({
            message: "Successfully created new order",
            orderId: order.id // don't send other confidential info, the order object contains a lot of confidential stuff
            // frontend only needs orderId for checkout
        });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while creating product : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};