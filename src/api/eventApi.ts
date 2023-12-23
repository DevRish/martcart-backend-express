import { Router } from "express";
import { getEventById, getEvents } from "../controller/eventController";


const router = Router();

router.get("/", getEvents ); // not added isLoggedin as not logged in users should also be able to see categories
router.get("/:id", getEventById ); // not added isLoggedin as not logged in users should also be able to see categories

export const eventRoutes = router;