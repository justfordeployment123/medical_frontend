import { Router, Request, Response } from 'express'
import { retrieve } from '../rag/retriever'
import { generateAnswer } from '../gemini'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const { message } = req.body

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    res.status(400).json({ error: 'message is required' })
    return
  }

  if (message.length > 1000) {
    res.status(400).json({ error: 'message too long' })
    return
  }

  try {
    const chunks = await retrieve(message.trim())
    const answer = await generateAnswer(message.trim(), chunks)
    res.json({ answer })
  } catch (err) {
    console.error('Chat error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default router
