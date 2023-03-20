import express from "express";
import { nanoid } from "nanoid";
import { multerStore } from "../config/multer.js";
import cloudinary from "../config/cloudinary.js";

const imageRouter = express.Router();

const storageFiles = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("extension: ", ext);

    const newName = nanoid() + "." + ext;

    cb(null, file.originalname);
  },
});

const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

// const upload = multer({ storage: storageFiles });

// upload router listener
imageRouter.post("/file", multerStore.single("file"), async (req, res, next) => {
  console.log("request file: ", req.file);


  // const resp = await cloudinary.v2.uploader.upload("/tmp/corgi_picture_download_hq_Medium.png", {
  //   folder: "product",
  //   use_filename: true,
  // });
  
  // resp.then((data) => {
  //   console.log(data);
  //   console.log(data.secure_url);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
});


export default imageRouter;
