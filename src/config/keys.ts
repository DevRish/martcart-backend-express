import { config } from "dotenv";
config();

export const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/martcart";

export const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const PORT = process.env.PORT || 5000;

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || "localhost";
// export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';
// export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || 'localhost';
