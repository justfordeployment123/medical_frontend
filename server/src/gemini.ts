import OpenAI from 'openai'

// Lazy-initialized so dotenv has already run by the time this is used
let openai: OpenAI | null = null

function getClient(): OpenAI {
  if (!openai) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error('Available environment variables:', Object.keys(process.env).filter(key => key.includes('API') || key.includes('KEY') || key.includes('OPENAI')))
      throw new Error('OPENAI_API_KEY is not set in environment variables. Make sure .env file is properly loaded.')
    }
    openai = new OpenAI({ apiKey })
  }
  return openai
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

  const response = await getClient().chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `${SYSTEM_INSTRUCTION}\n\nContext:\n${context}`,
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
  })

  return response.choices[0]?.message?.content ?? 'Sorry, I was unable to generate a response. Please try again.'
}
