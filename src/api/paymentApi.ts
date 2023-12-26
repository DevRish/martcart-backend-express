import { Router } from "express";
import { createRzpOrder } from "../controller/paymentController";

const router = Router();

router.post("/createOrder", createRzpOrder);

export const paymentRoutes = router;