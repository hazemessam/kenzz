import dotenv from 'dotenv'; dotenv.config();
import express, { Response } from 'express';
import cors from 'cors';
import imageRouter from './image.router';
import { errorHandler } from './error.middleware';
import APIError from './error';


export const app = express();

app.use(cors());

app.get('/', (_, res: Response) => res.json({ msg: 'Server is running...' }));
app.use('/api/images', imageRouter);

// Handle errors
app.use(_ => { throw new APIError('Not found', 404) });
app.use(errorHandler);
