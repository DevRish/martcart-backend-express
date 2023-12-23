import { Router } from "express";
import { createProduct, getProductById, getProductData } from "../controller/productController";
import multer from "multer";
import { TEMP_DIR } from "../config/keys";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { canCreateProduct } from "../middlewares/permGuards";

const upload = multer({ 
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, TEMP_DIR);
        },
        filename(req, file, callback) {
            const contentType = file.mimetype.split("/");
            callback(null, Date.now().toString() + "." + contentType[contentType.length - 1]);
        },
    }) 
});

const router = Router();

router.post("/", upload.single("image"), isLoggedIn, canCreateProduct, createProduct);
router.get("/", getProductData); // not added isLoggedin as not logged in users should also be able to see products
router.get("/:id", getProductById); // not added isLoggedin as not logged in users should also be able to see products

export const productRoutes = router;