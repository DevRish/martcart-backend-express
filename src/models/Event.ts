import mongoose, { Types } from "mongoose";

// events are displayed on carousel on home page
// events can be created, updated and deleted only by admin
// events can be read(fetched) by everyone

const eventSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    tagLines: [String],
    ctaLink: String // redirection link on call to action button
});

export interface IEvent {
    _id?: Types.ObjectId,
    imagePath: string,
    tagLines: string[],
    ctaLink: string
};

export const Event = mongoose.model("Event", eventSchema);