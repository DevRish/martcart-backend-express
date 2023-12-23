import { Request, Response, NextFunction } from "express";
import { UserTypes } from "../models/User";

export const canCreateProduct = (req: Request, res: Response, next: NextFunction) => {
    const allowedTypes = [UserTypes.SELLER.toString()];
    if(allowedTypes.includes(res.locals.user.userType)) {
        next();
    } else {
        return res.status(403).json({ message: "Access Denied" });
    }
};