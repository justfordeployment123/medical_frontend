import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { checkDBReady } from './rag/retriever'
import chatRouter from './routes/chat'

// Load .env from server root directory
// Try multiple paths to handle different execution contexts
const envPaths = [
  path.resolve(__dirname, '../.env'),
  path.resolve(process.cwd(), 'server/.env'),
  path.resolve(process.cwd(), '.env'),
]

let envLoaded = false
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath })
    console.log(`✓ Loaded .env from: ${envPath}`)
    envLoaded = true
    break
  }
}

if (!envLoaded) {
  console.warn('⚠ Warning: .env file not found in expected locations')
}

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
