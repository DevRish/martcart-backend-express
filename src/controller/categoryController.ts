import chalk from "chalk";
import { Request, Response } from "express";
import { Category } from "../models/Category";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const newCategory = await Category.create({ name });
        res.status(200).json({
            message: "Successfully created new category with id: " + newCategory._id,
            category: newCategory
        });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while creating product : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ message: "Categories fetched successfully", categories });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting categories : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if(category) {
            res.status(200).json({ message: "Category fetched successfully", category });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting category by id : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};