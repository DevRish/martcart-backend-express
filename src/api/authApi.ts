import { Router } from "express";
import { signupController, loginController, logoutController } from "../controller/authController";
import { body } from "express-validator";
import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = Router();

router.post("/login", 
    body("username").notEmpty().isString().trim(),
    body("password").notEmpty().isString().trim(),
    loginController
);

router.post("/signup",
    body("firstname").notEmpty().isString().trim(),
    body("lastname").notEmpty().isString().trim(),
    body("username").notEmpty().isString().trim(),
    body("phone").notEmpty().isString().isMobilePhone("any").trim(), // min == max means exact
    body("email").notEmpty().isString().isEmail().trim(),
    body("password").notEmpty().isString().isLength({ min: 6 }).trim(),
    signupController,
    loginController
);

router.post("/logout", isLoggedIn, logoutController);

export const authRoutes = router;