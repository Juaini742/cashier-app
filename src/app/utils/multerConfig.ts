import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(_req, _file, callback) {
    callback(null, path.join(process.cwd(), "../../../public/images"));
  },
  filename(_req, file, callback) {
    const uniqueSuffix = `${Date.now()}-${Math.random() * 1e9}`;
    const newFileName = `${uniqueSuffix}-${file.originalname}`;
    callback(null, newFileName);
  },
});

const upload = multer({storage});

module.exports = upload;
