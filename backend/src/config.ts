export const IMAGES_DIRECTORY = process.env.IMAGES_DIRECTORY || process.cwd() + '/images';
const MB = 1024 * 1024;
export const MAX_IMAGE_SIZE = Number(process.env.MAX_IMAGE_SIZE) || 10 * MB;
export const IMAGE_WIDTH = Number(process.env.IMAGE_WIDTH) || 500;
export const IMAGE_HEIGHT = Number(process.env.IMAGE_HEIGHT) || 500;
