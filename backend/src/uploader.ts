import multer, { Options as MulterOptions  } from 'multer';
import { MAX_IMAGE_SIZE } from './config';
import APIError from './error';


const multerOptions: MulterOptions = {
    storage: multer.memoryStorage(),
    limits: { fileSize: MAX_IMAGE_SIZE },
    fileFilter: (req, file, cb) => { 
        if (file.mimetype.startsWith('image')) cb(null, true);
        else cb(new APIError(`File with mime type ${file.mimetype} not supported`, 400));
    }
};

const uploader = multer(multerOptions);

export default uploader;
