import * as path from 'path'
import * as lancedb from '@lancedb/lancedb'
import { embed } from './embedder'

const DB_PATH = path.join(__dirname, '../../data/lancedb')
const TABLE_NAME = 'knowledge'

let table: lancedb.Table | null = null

export async function checkDBReady(): Promise<void> {
  const db = await lancedb.connect(DB_PATH)
  const tables = await db.tableNames()
  if (!tables.includes(TABLE_NAME)) {
    throw new Error(
      `LanceDB table "${TABLE_NAME}" not found. Run "npm run ingest" on the server to build the knowledge base.`
    )
  }
  table = await db.openTable(TABLE_NAME)
  console.log(`LanceDB ready — "${TABLE_NAME}" table loaded (${tables.length} table(s) found)`)
}

async function getTable(): Promise<lancedb.Table> {
  if (!table) {
    const db = await lancedb.connect(DB_PATH)
    const tables = await db.tableNames()
    if (!tables.includes(TABLE_NAME)) {
      throw new Error(
        `Knowledge base not found. Run "npm run ingest" first.`
      )
    }
    table = await db.openTable(TABLE_NAME)
  }
  return table
}

export async function retrieve(query: string, topK = 4): Promise<string[]> {
  const queryVector = await embed(query)
  const t = await getTable()

  const results = await t
    .vectorSearch(queryVector)
    .limit(topK)
    .toArray()

  return results.map((r: { text: string }) => r.text)
}
