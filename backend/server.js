import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express' 
import aiRouter from './routes/aiRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'



const app = express()

await connectCloudinary()

const port = process.env.PORT || 3000


const allowedOrigins = ['https://quick-ai-1.onrender.com']

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
}))


app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => { res.send('server is live') })

// app.use(requireAuth())

app.use('/api/ai', aiRouter)
app.use('/api/user' , userRouter)


app.listen(port, () => {
    console.log(`server are running at `, port);

})