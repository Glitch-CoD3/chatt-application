import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name =
      file.originalname
        .replace(ext, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, name + ext);
  }
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/;
    const extName = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowed.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  }
});
