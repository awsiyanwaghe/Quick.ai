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


app.use(cors({
    origin:['*','https://quick-ai-1.onrender.com/'],
    methods:['GET','POST','PATCH',"PUT",'DELETE'],
    credentials:true
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