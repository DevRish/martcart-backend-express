import { Router } from "express";
import { getProductById, getProductData } from "../controller/productController";

const router = Router();

router.get("/", getProductData ); // not added isLoggedin as not logged in users should also be able to see products
router.get("/:id", getProductById ); // not added isLoggedin as not logged in users should also be able to see products

export const productRoutes = router;