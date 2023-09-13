import { Router } from "express";
import { getOrderData, addOrder } from "../controller/orderController";
import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = Router();

router.post("/getorderdata", isLoggedIn, getOrderData );
router.post("/addOrder", isLoggedIn, addOrder );

export const orderRoutes = router;