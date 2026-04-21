# RAG Chatbot Server — Design Spec

**Date:** 2026-03-24
**Project:** IMPACKTA AI — `server/` directory inside `medicalfrontend` repo
**Goal:** A standalone Express.js server that powers a helpbot for the IMPACKTA AI website using RAG (Retrieval-Augmented Generation). One `POST /chat` endpoint, no auth, answers visitor questions about the business using a curated knowledge document.

---

## Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Runtime | Node.js + TypeScript | Consistent with frontend repo |
| Server | Express.js | Lightweight, no Next.js dependency |
| Embeddings | `@xenova/transformers` (local) | Free, no API cost, runs in Node |
| Vector DB | `@lancedb/lancedb` (+ `apache-arrow` peer) | Embedded, pure Node, no Python, no Docker |
| LLM | Gemini 2.5 Flash (`gemini-2.5-flash`) | Fast, low cost, good quality |
| Gemini SDK | `@google/genai` | Current unified Google AI SDK (supports Gemini 2.5) |

---

## Folder Structure

```
server/
├── src/
│   ├── index.ts            ← Express entry point, mounts routes, configures CORS
│   ├── routes/
│   │   └── chat.ts         ← POST /chat — validates input, calls RAG + Gemini, returns answer
│   ├── rag/
│   │   ├── ingest.ts       ← One-time script: chunk knowledge.md → embed → persist to LanceDB
│   │   ├── retriever.ts    ← Embed query, search LanceDB, return top-K chunks
│   │   └── embedder.ts     ← Wrapper around @xenova/transformers (all-MiniLM-L6-v2)
│   └── gemini.ts           ← Gemini client: builds system prompt + RAG prompt, returns answer string
├── data/
│   ├── knowledge.md        ← Curated RAG knowledge document (website content + FAQs)
│   └── lancedb/            ← Auto-created on first `npm run ingest` run
├── package.json
├── tsconfig.json
└── .env                    ← GEMINI_API_KEY, PORT, FRONTEND_URL
```

---

## API

### `POST /chat`

No authentication required.

**Request:**
```json
{ "message": "What services does IMPACKTA AI offer?" }
```

**Response 200:**
```json
{ "answer": "IMPACKTA AI offers three service tiers..." }
```

**Response 400 — missing or empty message:**
```json
{ "error": "message is required" }
```

**Response 400 — message too long (>1000 characters):**
```json
{ "error": "message too long" }
```

**Response 500:**
```json
{ "error": "Something went wrong" }
```

---

## Request Flow

```
Client POST /chat { message }
  → validate: message must be non-empty string
  → embedder.embed(message)              // local, free
  → retriever.query(embedding, topK=4)   // LanceDB similarity search
  → gemini.answer(message, chunks)       // Gemini 2.5 Flash
  → return { answer }
```

---

## RAG Pipeline

### Embedding Model
- Model: `Xenova/all-MiniLM-L6-v2` (via `@xenova/transformers`)
- Runs fully locally in Node.js — no API calls, no cost
- Downloads ~80MB model on first run, cached in `$HOME/.cache/huggingface/hub` by default
- Set `TRANSFORMERS_CACHE` env var to override (important for containers/deployment)
- Add the cache path to `.gitignore` if overriding to a local directory

### Chunking Strategy
- Split `knowledge.md` by `##` headings (one chunk per section)
- Each chunk stored as `{ id, text, embedding }` in LanceDB
- Target: ~20–30 chunks covering all content

### Retrieval
- Cosine similarity search in LanceDB
- Return top 4 chunks by similarity score
- Concatenate chunk texts as context for Gemini prompt

### Ingest Script
- Entry: `src/rag/ingest.ts`
- Run via: `npm run ingest`
- Idempotent: drops and recreates the LanceDB table each run
- Must be run once before the server can answer queries
- `data/lancedb/` must be in `.gitignore` — it is a binary vector store, never commit it

---

## Gemini Integration

### Model
`gemini-2.5-flash`

### Prompt Structure
```
System: You are a helpful assistant for IMPACKTA AI, an AI automation consultancy.
Answer questions based ONLY on the context provided. If the answer is not in the context,
say "I don't have that information — please contact us at contact@impackta.ai".
Keep answers concise and friendly.

Context:
{retrieved chunks joined by \n\n}

Question: {user message}
```

### SDK
`@google/genai` — `generateContent()` (non-streaming for simplicity)

---

## Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
FRONTEND_URL=https://impackta.ai
TRANSFORMERS_CACHE=./.cache   # optional: override HuggingFace model cache location
```

`FRONTEND_URL` is used as the CORS `origin`. In development, set to `http://localhost:3000`.

---

## CORS Configuration

```ts
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['POST', 'OPTIONS'],  // OPTIONS required for browser pre-flight
}))
```

The `cors` package handles `OPTIONS` pre-flight automatically when `OPTIONS` is in the methods list. Only `POST /chat` is exposed. No wildcard in production.

**Note on TypeScript config:** Use `"module": "CommonJS"` in `tsconfig.json` to keep `ts-node` invocations simple (no `--esm` loader needed). If ESM is preferred, use `NODE_OPTIONS='--loader ts-node/esm'` prefix in scripts.

**Note on `apache-arrow` version:** After installing `@lancedb/lancedb`, check its `peerDependencies` in `node_modules/@lancedb/lancedb/package.json` and install the matching `apache-arrow` version explicitly to avoid runtime errors.

---

## Knowledge Document — Coverage

`data/knowledge.md` covers the following sections, each becoming a discrete RAG chunk:

1. **Company Overview** — What IMPACKTA AI is, mission, vision
2. **Mission & Approach** — Why they exist, how they work
3. **Stats** — 10–25 hrs saved/week, 24/7 AI systems
4. **Solution: AI Receptionist & Virtual Front Desk** — capabilities + impact
5. **Solution: AI Admin Assistant** — capabilities + impact
6. **Solution: AI Sales Support Agent** — capabilities + impact
7. **Solution: Backend Operations Automation** — capabilities + impact
8. **Service Tier 1: AI Automations** — what's included, best for
9. **Service Tier 2: AI Systems** — what's included, best for (most popular)
10. **Service Tier 3: Custom AI Transformation** — what's included, best for
11. **Integrations** — tools IMPACKTA AI connects with
12. **How to Get Started** — free consultation, contact info, booking link
13. **FAQ** — common visitor questions and answers

---

## Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `nodemon --exec ts-node src/index.ts` | Start server with live reload |
| `build` | `tsc` | Compile TypeScript |
| `start` | `node dist/index.js` | Run compiled server |
| `ingest` | `ts-node src/rag/ingest.ts` | Build/rebuild the vector DB |

---

## Out of Scope

- Authentication / rate limiting (not required)
- Chat history / conversation memory (stateless, each request is independent)
- Streaming responses (full response returned at once)
- Frontend chat widget (separate task)
- Form submission / backend for contact form (separate task)
- Health check endpoint (`GET /health`) — not included but trivial to add at deployment time
