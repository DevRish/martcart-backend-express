import { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import crypto from "crypto";
import { JWT_SECRET } from "../config/keys";
import { Session } from "../models/Session";
import { User } from "../models/User";

export const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // check for authorization header
        let hasAuthHeader = false;
        for(const key in req.headers) {
            if(key.toLowerCase() === "authorization") {
                hasAuthHeader = true;
                break;
            }
        }
        if(!hasAuthHeader) {
            console.log(chalk.redBright("[-] No Authorization header in request"));
            res.status(403).json({ message: "Unauthorized Access" });
            return;
        }

        // if there is auth header, it should be of form: "Bearer <token>" where token is supposed to be a jwt token 
        // (if user has indeed logged in previously, loginController would have sent back that jwt token, containing the session id)
        const jwtToken = req.headers.authorization.split(" ")[1];
        if(!jwtToken) { 
            console.log(chalk.redBright("[-] Invalid JWT Token")); // no token
            res.status(403).json({ message: "Unauthorized Access" });
            return;
        }

        // validate whether the token is a legit jwt token (signature should be encrypted form of encoded header and encoded payload)
        const [ encodedHeader, encodedPayload, signature ] = jwtToken.split(".");
        if(!encodedHeader || !encodedPayload || !signature) {
            console.log(chalk.redBright("[-] Invalid JWT Token")); // token not of form xxx.yyy.zzz
            res.status(403).json({ message: "Unauthorized Access" });
            return;
        }
        const hashFunc = crypto.createHmac("sha512", JWT_SECRET);
        hashFunc.update(encodedHeader+"."+encodedPayload);
        const expectedSignature = hashFunc.digest("base64url");
        if(signature !== expectedSignature) { // invalid according to the definition of jwt tokens (https://jwt.io/introduction)
            console.log(chalk.redBright("[-] Invalid JWT Token")); // signature is not properly related with header and payload
            res.status(403).json({ message: "Unauthorized Access" });
            return;
        }

        // check if session is valid and still exists
        const payload = JSON.parse(Buffer.from(encodedPayload, "base64").toString("utf8"));
        const session = await Session.findById(payload.id);
        if(!session) {
            console.log(chalk.redBright("[-] Session invalid or expired"));
            res.status(403).json({ message: "Unauthorized Access" });
            return;
        }

        // if session found, valid user, attach user to res.locals
        const user = await User.findById(session.userId);
        if(!user) {
            console.log(chalk.redBright("[-] Bad session. Session's userid doesnt match any users."));
            res.status(403).json({ message: "Something went wrong. Please login again." });
            return;
        }

        // if user found, either store in req or in res, res.locals is an object that is not sent back in response and is available
        // to be used for this kind of scenarios (when we need to attach extra stuff to res to communicated between middlewares)
        res.locals.user = user;

        next();
    } catch (error) {
        console.log(chalk.redBright("[-] Error occured in isLoggedIn middleware:"));
        console.log(error);
        res.status(403).json({ message: "Unauthorized Access" });
        return;
    }
};