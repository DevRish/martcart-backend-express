import { Router } from "express";
import { getUserData } from "../controller/userController";
import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = Router();

router.get("/getUser", isLoggedIn, getUserData );

export const userRoutes = router;