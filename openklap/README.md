# OpenKlap
A free, open-source alternative to klap.app designed to run on Cloudflare Workers and Pages.

## Core Stack
- **Next.js** (App Router) on Cloudflare Pages
- **Cloudflare Workers AI** (Llama 3 & Whisper)
- **Cloudflare R2** (Storage)
- **Cloudflare D1** (SQL Database)
- **FFmpeg.wasm** (Client-side video processing)

## Setup
1. Clone this repo.
2. Run `npm install`.
3. Create D1 database: `npx wrangler d1 create openklap-db`.
4. Run migrations: `npx wrangler d1 execute openklap-db --file=./schema.sql`.
5. Create R2 bucket: `npx wrangler r2 bucket create openklap-assets`.
6. Update `wrangler.toml` with your database ID.
7. Deploy: `npm run deploy`.
