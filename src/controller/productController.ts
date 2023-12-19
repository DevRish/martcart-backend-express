import chalk from "chalk";
import { Product } from "../models/Product";
import { Request, Response } from "express";

export const getProductData = async (req: Request, res: Response) => {
    try {
        const { id, name, priceRange, ratingRange, categoryId, page, limit } = req.body;
        // priceRange and ratingRange expected to be objects of form: { min: ..., max: ... }
        // page and limit are numbers
        // id, name, categoryId are strings
        const products = await Product.find({
            [id && "_id"]: id,
            [name && "name"]: name,
            [priceRange && "currentPrice"]: { $gte: priceRange.min, $lte: priceRange.max },
            [ratingRange && "rating"]: { $gte: ratingRange.min, $lte: ratingRange.max },
            [categoryId && "category"]: categoryId,
        }).skip((page - 1)*limit)
          .limit(limit);
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