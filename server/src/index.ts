import * as path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '../.env') })
import express from 'express'
import cors from 'cors'
import chatRouter from './routes/chat'
import { checkDBReady } from './rag/retriever'

const app = express()
const PORT = process.env.PORT ?? 3001
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:3000'

app.use(cors({
  origin: FRONTEND_URL,
  methods: ['POST', 'OPTIONS'],
}))

app.use(express.json())
app.use('/chat', chatRouter)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

async function start() {
  // Verify knowledge base exists before accepting traffic
  await checkDBReady()

  app.listen(PORT, () => {
    console.log(`IMPACKTA AI chatbot server running on port ${PORT}`)
    console.log(`CORS allowed origin: ${FRONTEND_URL}`)
  })
}

start().catch(err => {
  console.error('Failed to start server:', err.message)
  console.error('Fix: run "npm run ingest" to build the knowledge base, then restart.')
  process.exit(1)
})
