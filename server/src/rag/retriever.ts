import * as path from 'path'
import * as lancedb from '@lancedb/lancedb'
import { embed } from './embedder'

const DB_PATH = path.join(__dirname, '../../data/lancedb')
const TABLE_NAME = 'knowledge'

let table: lancedb.Table | null = null

async function getTable(): Promise<lancedb.Table> {
  if (!table) {
    const db = await lancedb.connect(DB_PATH)
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
