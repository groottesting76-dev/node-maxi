import multer from 'multer';
import AppError from './app_error.js';
import path from 'path';
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'dist', 'images'));
    },
    filename(req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});
const filerFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(new AppError("Only image files are allowed", 400));
    }
};
const fileUploadMulter = multer({ storage: fileStorage, fileFilter: filerFilter });
export { fileUploadMulter };
//# sourceMappingURL=file_storage_handler.js.map