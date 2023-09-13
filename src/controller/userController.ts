import chalk from "chalk";
import { Request, Response } from "express";

export const getUserData = (req: Request, res: Response) => {
    // isAuthenticated already ran before, so when we reach here we have current user in res.locals
    // we don't want to send certain fields for safety, so we will remove them
    try {
        const currUser = { 
            ...res.locals.user,
            _id: "", // remove(overwrite with empty) document id
            password: "", // remove(overwrite with emoty) password (will surely not be required anywhere in frontend)
        };
        res.status(200).json(currUser);
    } catch (err) {
        console.log(chalk.redBright("[-] Error occured while returning user: \n" + err));
        res.status(500).json({ message: "Server Error" });
    }
};