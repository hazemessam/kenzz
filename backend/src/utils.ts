import fs from 'fs';
import { IMAGES_DIRECTORY } from './config';


export function genUniqueFilename(filename: string): string {
    return Date.now() + Math.round(Math.random() * 1e6) + filename.replace(' ', '');
}


// Create images directory if not exists because sharp package dosn't support that.
export function mkImgsDirIfNotExists() {
    if(!fs.existsSync(IMAGES_DIRECTORY)) fs.mkdirSync(IMAGES_DIRECTORY)
}
