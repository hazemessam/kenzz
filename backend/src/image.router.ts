import express from 'express';
import uploader from './uploader';
import ImageController from './image.controller';


const router = express.Router();

router.route('/')
    .post(uploader.single('image'), ImageController.addImage)
    .get(ImageController.getAllimagesIds);

router.route('/:id').get(ImageController.getImageById);

export default router;
