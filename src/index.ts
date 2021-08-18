import express, {Request, Response} from 'express'
import cors from 'cors'
import calculateRouter from './routes/calculate.route'
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',calculateRouter)

const PORT = process.env.PORT || 5005
app.get('/', (req: Request, res: Response)=>{
    return res.status(200).json('Welcome on 5005')
})
app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))

export default app