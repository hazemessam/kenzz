import { Express } from 'express';
import { app } from './app';
import { mkImgsDirIfNotExists } from './utils';


function main(app: Express) {
    mkImgsDirIfNotExists();
    app.listen(process.env.PORT || 8080, () => console.log('Server is running ...'));
}

main(app);
