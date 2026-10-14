# Adithya R. — Portfolio

Premium dark portfolio built with Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, Supabase Realtime, and Dexie/IndexedDB local-first caching.

## Requirements
- Node.js 20 LTS recommended
- A Supabase project (optional for local demo; required for live database sync)
- A public deployment target such as Vercel for a resume-ready URL

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. Without Supabase credentials, the site runs using bundled profile data and shows a clear “Local Preview” state.

## Configure Supabase
1. Create a project at https://supabase.com.
2. Open SQL Editor and run `supabase/schema.sql`.
3. In Project Settings → API, copy the Project URL and anon/public key into `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
4. In Database → Replication (or publication settings), ensure `projects` and `telemetry_metrics` are enabled for `supabase_realtime`. The schema attempts to add them to the publication; if Supabase reports they are already members, that is harmless.
5. Restart `npm run dev`. Public visitors can read portfolio data; there are intentionally no public write policies. Use the Supabase dashboard or trusted server-side admin tooling to manage content. Never expose a service-role key in browser code.

## Local-first behaviour
- Bundled seed content renders immediately.
- Browser IndexedDB stores the most recent successful Supabase dataset.
- On startup, cached data is loaded before remote refresh.
- Offline events switch the status pill to “Local Cache Offline Mode”; reconnect events retry the sync.
- Realtime changes on either table trigger a refetch and animated React layout updates.
- If Supabase is not configured, the page stays functional in local preview mode.

## Deploy and make the QR
1. Push this folder to a GitHub repository.
2. Import the repository in https://vercel.com and add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `NEXT_PUBLIC_SITE_URL` in project environment variables.
3. Deploy and verify the public `https://...vercel.app` URL on a phone and desktop.
4. Generate a high-resolution QR PNG for the deployed URL:
   ```bash
   npm run qr -- https://your-real-portfolio-url.vercel.app
   ```
   The QR image is written to `public/portfolio-qr.png`. Only generate it after deployment; a localhost URL will not work on a resume.
5. Add the QR PNG to your resume and test it from a printed copy before sending applications.

## Important notes
- The telemetry cards are portfolio instrumentation and profile-derived counts, not live market feeds. The UI note states this. Do not present these as real-time financial market prices.
- Some projects are described from the available profile context; add their real repository/demo links when ready.
- Google Fonts are an optional online enhancement; core layout remains usable if they cannot load.
