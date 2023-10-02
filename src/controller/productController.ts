import chalk from "chalk";
import { Product } from "../models/Product";
import { Request, Response } from "express";

export const getProductData = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: "Products fetched successfully", products });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting products : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(product) {
            res.status(200).json({ message: "Product fetched successfully", product });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting product by id : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};