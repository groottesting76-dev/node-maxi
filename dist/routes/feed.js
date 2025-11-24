import express from 'express';
import { getPosts, createPosts, uploadedImage, downloadFile, downloadFileAsStream } from '../controllers/feed.js';
import { body, header } from 'express-validator';
import { fileUploadMulter } from '../utils/file_storage_handler.js';
import isAuth from '../middleware/is_auth.js';
const router = express.Router();
router.get("/posts", isAuth, getPosts);
router.post("/posts", isAuth, [
    // header('Authorization').not().isEmpty().withMessage('Authorization header is required.'),
    body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters long.'),
    body('content').trim().isLength({ min: 5 })
], createPosts);
router.post('/images', isAuth, fileUploadMulter.single('image'), uploadedImage);
router.get('/download/:fileName', isAuth, downloadFile);
router.get('/downloadAsStream/:fileName', isAuth, downloadFileAsStream);
export default router;
//# sourceMappingURL=feed.js.map