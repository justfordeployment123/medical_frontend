import { GoogleGenAI } from '@google/genai'

// Lazy-initialized so dotenv has already run by the time this is used
let genai: GoogleGenAI | null = null

function getClient(): GoogleGenAI {
  if (!genai) {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set in environment variables')
    genai = new GoogleGenAI({ apiKey })
  }
  return genai
}

const SYSTEM_INSTRUCTION = `You are a helpful assistant for IMPACKTA AI, an AI automation consultancy.
Answer questions based ONLY on the context provided below. Be concise, friendly, and professional.
If the answer is not in the context, say: "I don't have that information — please contact us at contact@impackta.online or visit impackta.online/contact to book a free consultation."
Do not make up information. Do not reference the context chunks directly — just answer naturally.`

export async function generateAnswer(
  userMessage: string,
  contextChunks: string[]
): Promise<string> {
  const context = contextChunks.join('\n\n---\n\n')

  const prompt = `${SYSTEM_INSTRUCTION}

Context:
${context}

Question: ${userMessage}`

  const response = await getClient().models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  })

  return response.text ?? 'Sorry, I was unable to generate a response. Please try again.'
}
