import multer from "multer";
// ZASVAR oruulah
export const multerStore = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10000000},
});