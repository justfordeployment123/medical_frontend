import * as path from 'path'
import * as dotenv from 'dotenv'
const envPath = path.join(__dirname, '../.env')
const result = dotenv.config({ path: envPath })
console.log('dotenv path:', envPath)
console.log('dotenv result:', result.error ? result.error.message : 'OK')
console.log('GEMINI_API_KEY loaded:', !!process.env.GEMINI_API_KEY)
import express from 'express'
import cors from 'cors'
import chatRouter from './routes/chat'

const app = express()
const PORT = process.env.PORT ?? 3001
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:3000'

app.use(cors({
  origin: FRONTEND_URL,
  methods: ['POST', 'OPTIONS'],
}))

app.use(express.json())

app.use('/chat', chatRouter)

app.listen(PORT, () => {
  console.log(`IMPACKTA AI chatbot server running on port ${PORT}`)
  console.log(`CORS allowed origin: ${FRONTEND_URL}`)
})
