import { cloudinary } from "cloudinary";

// Configuration 
export const configCloudinary =  cloudinary.v2.config({
  cloud_name: "dhirtao9q",
  api_key: "532861227729412",
  api_secret: "5pvdCXdq4zyVht733OyvMBr5cmQ"
});


// Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);s
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });



// // The output url
// console.log(url);