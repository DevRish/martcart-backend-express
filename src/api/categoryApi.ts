import { Router } from "express";
import { getCategories, getCategoryById } from "../controller/categoryController";


const router = Router();

router.get("/", getCategories ); // not added isLoggedin as not logged in users should also be able to see categories
router.get("/:id", getCategoryById ); // not added isLoggedin as not logged in users should also be able to see categories

export const categoryRoutes = router;