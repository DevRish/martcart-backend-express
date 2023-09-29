import { Router } from "express";
import { getOrderData, addOrder } from "../controller/orderController";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { body } from "express-validator";

const router = Router();

router.get("/getorderdata", isLoggedIn, getOrderData );

router.post("/addOrder", 
    body("productId").notEmpty().isMongoId(),
    body("quantity").notEmpty().isNumeric(),
    body("address").notEmpty().isString().trim(),
    isLoggedIn, 
    addOrder 
);

export const orderRoutes = router;