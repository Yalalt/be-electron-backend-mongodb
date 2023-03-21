import express from "express";
import multer from "multer";
import { nanoid } from "nanoid";

const imageRouter = express.Router();

const storageFiles = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/products");
  },
  filename: (req, file, cb) => {  
    console.log("Request recev==> ", req);

    const ext = extractExtension(file.originalname);
    console.log("extension: ", ext);

    const newName = nanoid() + "." + ext;

    cb(null, file.originalname);
    // cb(null, newName);
  },
});

const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "Uspported file format" }, false);
  }
};

const upload = multer({
  storage: storageFiles,
});
// const upload = multer({
//   storage: storageFiles,
//   limits: { fileSize: 1024 * 1024 },
//   fileFilter: fileFilter,
// });

// upload router listener
imageRouter.post("/file", upload.single("file"), async (req, res) => {
  console.log("request===> : ", req);
  console.log("request file: ", req.file);
  // const filePathName = req.file?.filename;

  // console.log("filePathName: ", filePathName);
});

export default imageRouter;
