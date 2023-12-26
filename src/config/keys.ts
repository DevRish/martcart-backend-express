import { config } from "dotenv";
import path from "path";

config();

export const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/martcart";

export const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const PORT = process.env.PORT || 5000;

export const NODE_ENV = process.env.NODE_ENV || "DEV";

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || "localhost";
// export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';
// export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || 'localhost';

export const PUBLIC_DIR = path.join(__dirname, "..", "public");
export const IMAGE_DIR = path.join(PUBLIC_DIR, "images");
export const TEMP_DIR = path.join(PUBLIC_DIR, "images");

// AWS Settings
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || "";
export const AWS_S3_BUCKET_REGION = process.env.AWS_S3_BUCKET_REGION || "";
export const AWS_S3_BUCKET_URL = process.env.AWS_S3_BUCKET_URL || "";

// Razorpay settings
export const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "";
export const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "";