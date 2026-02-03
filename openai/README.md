# OpenKlap
A free, browser-based alternative to klap.app for personal use.

## How it works
1. **FFmpeg.wasm**: No server-side processing. All video cropping happens right in your Chrome/Edge browser.
2. **COOP/COEP**: Netlify headers are configured to allow SharedArrayBuffer for high-speed processing.
3. **OpenAI Whisper**: (Planned) User provides their own API key for transcription.

## Deployment
1. Connect this repo to Netlify.
2. Ensure `netlify.toml` is used for headers.
3. Profit.
