import { Router } from "express";
import { getCartData, addToCart, removeFromCart, emptyCart } from "../controller/cartController";
import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = Router();

router.post("/getCart", isLoggedIn, getCartData );
router.post("/addItem", isLoggedIn, addToCart );
router.post("/removeItem", isLoggedIn, removeFromCart );
router.post("/emptyCart", isLoggedIn, emptyCart );

export const cartRoutes = router;