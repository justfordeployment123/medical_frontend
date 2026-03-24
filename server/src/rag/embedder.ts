import { pipeline, FeatureExtractionPipeline } from '@xenova/transformers'

let embedder: FeatureExtractionPipeline | null = null

async function getEmbedder(): Promise<FeatureExtractionPipeline> {
  if (!embedder) {
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
  }
  return embedder
}

export async function embed(text: string): Promise<number[]> {
  const extractor = await getEmbedder()
  const output = await extractor(text, { pooling: 'mean', normalize: true })
  return Array.from(output.data as Float32Array)
}
