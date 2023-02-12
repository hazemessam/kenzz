import { Request, Response, NextFunction } from 'express';
import { MulterError } from 'multer';
import APIError from './error';


export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err);

    if (err instanceof APIError)
        return res.status(err.code).json({ msg: err.message });

    if (err instanceof MulterError)
        return res.status(400).json({ msg: err.message });

    return res.status(500).json({ msg: 'Internal Server Error' });
}
