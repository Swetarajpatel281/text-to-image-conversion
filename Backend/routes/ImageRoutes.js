import express from 'express'
import {generateImage} from '../controllers/ImageController.js'
import userAuth from '../middleware/Auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth,generateImage)

export default imageRouter