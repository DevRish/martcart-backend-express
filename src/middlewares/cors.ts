import { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import { CLIENT_URL } from "../config/keys";

const ALLOWED_ORIGINS = [ CLIENT_URL ];

export const manageCORS = (req: Request, res: Response, next: NextFunction) => {
    try {
        // must have origin header
        let hasOriginHeader = false;
        for(const key in req.headers) {
            if(key.toLowerCase() === "origin") {
                hasOriginHeader = true;
                break;
            }
        }
        if(!hasOriginHeader) {
            console.log(chalk.redBright("[-] No origin header in request"));
            res.status(403).json({ message: "CORS Error: No origin header" });
            return;
        }

        // origin must be in the list of allowed origins
        if(ALLOWED_ORIGINS.includes(req.headers.origin)) {
            res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
            res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
        }

        next();
    } catch (error) {
        
    }
};