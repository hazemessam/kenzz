# Backend Server


## Table of Content
- [Tech Stack](#tech-stack)
- [Configurations](#configurations)
- [Server Setup](#server-setup)
- [API Endpoints](#api-endpoints)


## Tech Stack
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)


## Configurations
Here are the environment variables that you can configure along with their default values:
- `IMAGES_DIRECTORY`=./images
- `MAX_IMAGE_SIZE`=1 MB
- `IMAGE_WIDTH`=500
- `IMAGE_HEIGHT`=500
- `PORT`=8080


## Server Setup
#### 1. Clone the repo
```bash
$ git clone https://github.com/hazemessam/true-img.git
```

#### 2. Move to the project directory
```bash
$ cd true-img/backend
```

#### 3. Install the dependances
```bash
$ npm install
```

#### 4. Build the project
```bash
npm run build
```

#### 5. Set the environment variables according to [Configurations](#configurations)

#### 6. Run the server
```bash
$ npm start
```

#### 6. Now check http://localhost:8080/

## API Endpoints
| Method | Endpoint | Description | Request Body | Response Body |
| - | - | - | - | - |
| POST | /api/images | Upload an image. | { image: File } | { imageId: string }
| GET | /api/images | Get the available images. | N/A | { imagesIds: Array\<string> }
| GET | /api/images/:id | Get an image by its id. | N/A | File
