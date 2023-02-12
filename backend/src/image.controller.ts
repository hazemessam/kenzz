import fs from 'fs/promises';
import sharp from 'sharp';
import { Request, Response } from 'express';
import { IMAGES_DIRECTORY, IMAGE_HEIGHT, IMAGE_WIDTH } from './config';
import { genUniqueFilename } from './utils';
import APIError from './error';


export default class ImageController {
    static async addImage(req: Request, res: Response) {
        if (!req.file) throw new APIError('Missing the image file', 400);
        
        const imageId = genUniqueFilename(<string> req.file?.originalname);

        await sharp(req.file?.buffer).resize(IMAGE_WIDTH, IMAGE_HEIGHT)
            .toFile(`${IMAGES_DIRECTORY}/${imageId}`);

        return res.status(201).json({ imageId });
    }


    static async getAllimagesIds(req: Request, res: Response) {
        const imagesIds: Array<string> = await fs.readdir(IMAGES_DIRECTORY);
        return res.status(200).json({ imagesIds });
    }


    static async getImageById(req: Request, res: Response) {
        const imagesIds: Array<string> = await fs.readdir(IMAGES_DIRECTORY);
        const imageId = req.params.id;

        if (!imagesIds.includes(imageId))
            return res.status(404).json({ msg: `${imageId} not found!` });

        return res.sendFile(`${IMAGES_DIRECTORY}/${imageId}`);
    }
}
