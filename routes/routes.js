import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import cors from 'cors'; // Import CORS middleware

const router = express.Router();

// Use CORS middleware for all routes
router.use(cors());

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;