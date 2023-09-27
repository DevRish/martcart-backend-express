import { Router } from "express";
import { getCartData, addToCart, removeFromCart, emptyCart } from "../controller/cartController";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { body } from "express-validator";

const router = Router();

router.get("/getCart", 
    isLoggedIn, 
    getCartData 
);

router.post("/addItem", 
    body("prodid").notEmpty().isMongoId(),
    isLoggedIn, 
    addToCart 
);

router.post("/removeItem", 
    body("prodid").notEmpty().isMongoId(),
    isLoggedIn, 
    removeFromCart 
);

router.post("/emptyCart", isLoggedIn, emptyCart );

export const cartRoutes = router;