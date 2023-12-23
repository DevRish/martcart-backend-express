import chalk from "chalk";
import { Request, Response } from "express";
import { Event } from "../models/Event";

export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.status(200).json({ message: "Events fetched successfully", events });
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting events : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};

export const getEventById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        if(event) {
            res.status(200).json({ message: "Event fetched successfully", event });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (err) {
        console.log(chalk.redBright(`[-] Error while getting event by id : ${err}`));
        res.status(500).json({ message: "Server Error" });
    }
};