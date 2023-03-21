import * as cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: 'dhirtao9q',
  api_key: '532861227729412',
  api_secret: '5pvdCXdq4zyVht733OyvMBr5cmQ'
});

export default cloudinary;