import express from 'express'
import cors from 'cors'
 import 'dotenv/config'

 import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/ImageRoutes.js'

 const PORT = process.env.PORT || 4000
const app = express()

 app.use(express.json())
 app.use(cors())


 await connectDB()
 app.get('/', (req, res) => res.send("Api working"))


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
 app.listen(PORT, ()=>console.log('server is running on port ' + PORT));
 
