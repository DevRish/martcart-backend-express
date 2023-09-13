import chalk from "chalk";
import { User } from "../models/User";
import { Request, Response } from "express";

export const getCartData = (req: Request,res: Response) => {
    // isLoggedIn runs before this, so we have res.locals.user
    try {
        const currUser = res.locals.user;
        res.status(200).json({ cart: currUser.cart});
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting cart data : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const addToCart = (req,res) => {
    User.find({ username: req.body.currUser }).then((users) => {
        let user = users[0];
        const checkIncludes = user.cart.find((item) => (item.prodid === req.body.prodid));
        if(checkIncludes) // Item present in cart already. Quantity needs to be modified
        {
            user.cart = user.cart.map((item) => {
                let q = item.quantity;
                if(item.prodid === req.body.prodid) return { ...item, quantity: (q+1) }
                else return item;
            })
            User.updateOne({ username: req.body.currUser }, user)
            .then(() => {
                res.status(200).json({ message: `Item ${req.body.prodid} added to cart` })
                console.log(chalk.greenBright("[+] Item added to cart"))
            })
            .catch(err => {
                res.status(404).json({ error: err })
                console.log(chalk.redBright(`[-] Error while adding item to cart : ${err}`))
            })
        }
        else // Item doesn't exist in cart. Needs to be pushed
        {
            User.updateOne({ username: req.body.currUser }, {}, { 
                $push: { 
                    cart: { 
                        prodid: req.body.prodid, quantity: 1 
                    } 
                } 
            })
            .then(() => {
                res.status(200).json({ message: `Item ${req.body.prodid} added to cart` })
                console.log(chalk.greenBright("[+] Item added to cart"))
            })
            .catch(err => {
                res.status(404).json({ error: err })
                console.log(chalk.redBright(`[-] Error while adding item to cart : ${err}`))
            })
        }
    })
}

export const removeFromCart = (req,res) => {
    // console.log(req.body.prodid)
    User.find({ username: req.body.currUser }).then((users) => {
        let user = users[0];
        const checkIncludes = user.cart.find((item) => (item.prodid === req.body.prodid));
        if(checkIncludes)
        {
            user.cart = user.cart.map((item) => {
                let q = item.quantity;
                if(item.prodid === req.body.prodid) return { ...item, quantity: (q-1) };
                else return item;
            })
            console.log("Cart after map function : "+user.cart);
            user.cart = user.cart.filter((item) => (item.quantity > 0))
            console.log("Cart after filter function : "+user.cart);
            User.updateOne({ username: req.body.currUser }, user)
            .then(() => {
                res.status(200).json({ message: `Item ${req.body.prodid} removed from cart` })
                console.log(chalk.greenBright(`[+] Item ${req.body.prodid} removed from cart`))
            } )
            .catch(err => {
                res.status(404).json({ error: err })
                console.log(chalk.redBright(`[-] Error while removing item from cart : ${err}`))
            })
        }
        else
        {
            res.status(200).json({ message: "Item was not present in cart" })
            console.log(chalk.greenBright("[+] Item was not present in cart"))
        }
    })
}

export const emptyCart = (req,res) => {
    User.find({ username: req.body.currUser }).then((users) => {
        let user = users[0];
        user.cart = [];
        User.updateOne({ username: req.body.currUser }, user)
        .then(() => {
            res.status(200).json({ message: "Cart emptied" })
            console.log(chalk.greenBright("Cart Emptied"))
        })
        .catch(err => {
            res.status(404).json({ error: err })
            console.log(chalk.redBright(`[-] Error while removing item from cart : ${err}`))
        })
    })
}