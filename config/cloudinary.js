import * as cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOD_CONFIG_NAME,
  api_key: process.env.CLOD_API_KEY,
  api_secret: process.env.CLOD_SECRET,
});

export default cloudinary;