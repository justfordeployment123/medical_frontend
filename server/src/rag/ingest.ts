import * as fs from 'fs'
import * as path from 'path'
import * as lancedb from '@lancedb/lancedb'
import { embed } from './embedder'

const DB_PATH = path.join(__dirname, '../../data/lancedb')
const KNOWLEDGE_PATH = path.join(__dirname, '../../data/knowledge.md')
const TABLE_NAME = 'knowledge'

function chunkDocument(markdown: string): { id: string; text: string }[] {
  const sections = markdown.split(/\n## /)
  const chunks: { id: string; text: string }[] = []

  for (let i = 0; i < sections.length; i++) {
    const raw = i === 0 ? sections[i] : '## ' + sections[i]
    const text = raw.trim()
    if (text.length < 20) continue
    chunks.push({ id: `chunk_${i}`, text })
  }

  return chunks
}

async function ingest() {
  console.log('Reading knowledge document...')
  const markdown = fs.readFileSync(KNOWLEDGE_PATH, 'utf-8')

  const chunks = chunkDocument(markdown)
  console.log(`Split into ${chunks.length} chunks`)

  console.log('Connecting to LanceDB...')
  const db = await lancedb.connect(DB_PATH)

  // Drop existing table if it exists (idempotent)
  const tableNames = await db.tableNames()
  if (tableNames.includes(TABLE_NAME)) {
    await db.dropTable(TABLE_NAME)
    console.log('Dropped existing table')
  }

  console.log('Embedding chunks...')
  const records = []
  for (let i = 0; i < chunks.length; i++) {
    const { id, text } = chunks[i]
    process.stdout.write(`  [${i + 1}/${chunks.length}] ${id}...\r`)
    const vector = await embed(text)
    records.push({ id, text, vector })
  }
  console.log('\nAll chunks embedded')

  console.log('Writing to LanceDB...')
  await db.createTable(TABLE_NAME, records)

  console.log(`Done. ${records.length} chunks stored in LanceDB at ${DB_PATH}`)
}

ingest().catch(err => {
  console.error('Ingest failed:', err)
  process.exit(1)
})
