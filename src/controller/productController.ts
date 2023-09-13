import chalk from "chalk";
import { Product } from "../models/Product";
import { Request, Response } from "express";

export const getProductData = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting products : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};