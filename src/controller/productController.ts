import chalk from "chalk";
import { IProduct, Product } from "../models/Product";
import { Request, Response } from "express";
import { IMAGE_DIR, NODE_ENV } from "../config/keys";
import { deleteFile, storeFile } from "../utils/storage/diskUtils";
import { storeFileS3 } from "../utils/storage/s3Utils";
import path from "path";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, currentPrice, originalPrice, categoryId, choices, specifications } = req.body;
        const newProduct: IProduct = {
            name,
            currentPrice,
            originalPrice,
            category: categoryId,
            soldBy: res.locals.user,
            imagePath: "/" + path.join("images", "fallback.png"), // image not processed yet, temporary fallback stored
            choices: JSON.parse(choices),
            specifications: JSON.parse(specifications)
        };
        let savedProduct = await Product.create(newProduct);
        try {
            const filename = savedProduct._id + path.extname(req.file.path);
            if(NODE_ENV === "AWS") {
                const key = path.join("images", filename);
                storeFileS3(key, req.file.path, req.file.mimetype);
            } else {
                const filePath = path.join(IMAGE_DIR, filename);
                storeFile(filePath, req.file.path);
            }
            await deleteFile(req.file.path);
            savedProduct = await Product.findByIdAndUpdate(savedProduct._id, {
                imagePath: "/" + path.join("images", filename)
            }, { new: true });
        } catch(err) {
            console.log(chalk.yellowBright(`[=] Product added but image couldn't be saved : ${err}`));
        }
        res.status(200).json({ message: "Successfully saved product with id: " + savedProduct._id, product: savedProduct });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while creating product : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const getProductData = async (req: Request, res: Response) => {
    try {
        const { id, name, minPrice, maxPrice, minRating, maxRating, categoryId, page, limit } = req.query;
        // priceRange and ratingRange expected to be objects of form: { min: ..., max: ... }
        // page and limit are numbers
        // id, name, categoryId are strings
        const products = await Product.find({
            [id && "_id"]: id,
            [name && "name"]: name,
            [minPrice && maxPrice && "currentPrice"]: { $gte: minPrice, $lte: maxPrice },
            [minRating && maxRating && "rating"]: { $gte: minRating, $lte: maxRating },
            [categoryId && "category"]: categoryId,
        }).skip((Number(page) - 1)*Number(limit))
          .limit(Number(limit));
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