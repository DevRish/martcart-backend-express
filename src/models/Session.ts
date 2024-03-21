import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    createdAt: { type: Date, expires: 1800, default: Date.now }, // 1800 secs = 0.5 hour, expires after 0.5 hour
}, { versionKey: false });

export interface ISession {
    userId: string,
    createdAt: Date,
};

export const Session = mongoose.model("Session", sessionSchema);