import chalk from "chalk";
import crypto from "crypto";
import { IUser, User } from "../models/User";
import { Session } from "../models/Session";
import { JWT_SECRET } from "../config/keys";
import { NextFunction, Request, Response } from "express";

export const signupController = async (req: Request, res: Response, next: NextFunction) => {
    const { firstname, lastname, username, phone, email, password } = req.body;
    try 
    {
        // Check existing
        const existingUser = await User.findOne({username: username});
        if(existingUser) return res.status(404).json({ message : "User already exists" });

        // Encrypt password
        // different salt form every unique user => greater safety
        const now = new Date();
        // const salt = crypto.randomBytes(128).toString("base64"); // generate a random string and use it as salt, 
        // but then have to store salt explicitly in database
        const salt = now.toString(); // using the unchangeable property: joinDate, as the salt, 
        // someone having unauthorized access to the data can't know straightaway that joinDate was used as the salt
        const hashFunc = crypto.createHmac("sha512", salt); // creating a "sha512" algo hasher with given salt
        hashFunc.update(password); // string to be hashed
        const encryptedPassword = hashFunc.digest("hex"); // result of hashing

        // New User
        const newUser: IUser = { 
            firstname, 
            lastname, 
            username,
            phone,
            email,
            password: encryptedPassword,
            cart: [],
            joinDate: now,
        };

        // The process of storing salt along with password is one of the industry practices
        // One thing came to my mind, that if someone gets access to database then here they get access to the salt too automatically,
        // so all that is left for them to do is guess the hashing function
        // I thought of using some combination of other parameters as salt, but remembered that they might get changed (name, email, phone etc can be updated)
        // So, I need some unchangeable parameter, and I came up with the joinDate
        // It is a property unique for all users and it is supposed to remain constant

        // Save user
        const savedUser = await User.create(newUser); // savedUser is just newUser with an extra _id attribute, given by the database
        console.log(chalk.greenBright(`[+] Account of ${savedUser.username} was created`));
        next(); // pass on to loginController

    } catch (err) 
    {
        console.log(chalk.redBright("[-] Error occured in registration: \n" + err));
        res.status(500).json({ message: "Server Error" });
    }
};

export const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try 
    {
        // TODO: Data validation middleware

        // Check existing
        const existingUser = await User.findOne({username: username});
        if(!existingUser) return res.status(404).json({ message : "User doesn't exists" });

        // Compare password (hash given password with same strategy as done while storing, and then compare the two hash outputs)
        const storedEncryptedPassword = existingUser.password;
        const salt = existingUser.joinDate.toString();
        const hashFunc = crypto.createHmac("sha512", salt);
        hashFunc.update(password); // hashing the given password
        const encryptedPassword = hashFunc.digest("hex"); // result of hashing the given password

        if(storedEncryptedPassword !== encryptedPassword) {
            res.status(403).json({ message: "Wrong Password" });
            return;
        }

        // reaching here means correct password
        const newSession = await Session.create({
            userId: existingUser._id
        });

        // creating jwt token (according to specifications: https://jwt.io/introduction)
        const header = { alg: "HS512", typ: "JWT" };
        const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64url");
        const payload = { id: newSession._id };
        const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
        const hashFunc2 = crypto.createHmac("sha512", JWT_SECRET);
        hashFunc2.update(encodedHeader+"."+encodedPayload);
        const signature = hashFunc2.digest("base64url");
        const jwtToken = encodedHeader + "." + encodedPayload + "." + signature;

        // will not using cookies to avoid cors issues, instead will use the 'Authorization' header on frontend
        // backend will send the token and frontend will use it in the headers
        // session will eventually expire(0.5 hour ttl setup in database schema), at which time user will need to login again

        res.status(200).json({
            message: "Successfully logged in",
            token: jwtToken, // frontend must put this token in every upcoming requests, that part is to be handled in frontend
            user: {
                firstname: existingUser.firstname,
                lastname: existingUser.lastname,
                cart: existingUser.cart,
            }
        });

        // TODO: (DONEE)
        // - Middleware to handle the checking of presence of 'Authorization' header in incoming requests, 
        // - if present, (i) Validate the jwt using it's signature, (ii) decode the jwt, (iii) check if a session exists with the extracted id
        // - for absence of 'Authorization' header, invalid jwt, or non existing session id, return 403 Unauthorized
        // - otherwise, successfully authorized, proceed with other middlewares and stuff
        
    } catch (err) 
    {
        console.log(chalk.redBright("[-] Error occured while logging in: \n" + err));
        res.status(500).json({ message: "Server Error" });
    }
};

export const logoutController = async (req: Request, res: Response) => {
    // will use isLoggedIn middleware before this
    // it will verify that auth headers are present, jwt is present and valid(both structure and signature), and session is present
    // here, we will only remove the session
    try {
        const jwtToken = req.headers.authorization.split(" ")[1];
        const encodedPayload = jwtToken.split(".")[1]; // [header, payload, signature]
        const payload = JSON.parse(Buffer.from(encodedPayload, "base64").toString("utf8"));
        await Session.deleteOne({ _id: payload.id });
        // if any error occurs it will go to catch, else:
        res.status(200).json({ message: "Successfully logged out" });
    } catch (err) {
        console.log(chalk.redBright("[-] Error occured while logging out: \n" + err));
        res.status(500).json({ message: "Server Error" });
    }
};