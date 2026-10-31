# Tumkur Events — Production Deployment Runbook & Infrastructure Guide
**Phase 15: Production Deployment & Verification Specification**  
**Document Reference:** `docs/PRODUCTION_DEPLOYMENT.md`  
**Target Release Candidate:** `RC-1.0.0-phase14` (Base Git Commit: `df6c12e`)  
**Target Domain:** `https://tumkurevents.com`  
**Framework:** Next.js 16.4.3 (App Router with Turbopack)  

---

## 1. Hosting Architecture & Requirements

The Tumkur Events web application is built on the Next.js App Router with React 19. It leverages:
- Static Site Generation (SSG) for 34 pages with instant edge delivery.
- Dynamic Server Routing for parameter validation and HTTP 404 responses.
- Next.js Image Optimization for AVIF and WebP conversion.
- Canonical Server Redirection (`/our-work` → `/gallery`).

### Recommended Deployment Providers
1. **Vercel (Recommended — Native Next.js Platform):**
   - Zero-configuration deployment with edge network CDN.
   - Built-in Next.js image optimization and automatic SSL.
   - Instant zero-downtime rollbacks to previous deployment SHAs.
2. **Netlify:**
   - Supported via the official `@netlify/plugin-nextjs` runtime.
3. **Docker / Self-Hosted VPS (Node.js 20+):**
   - Run via Dockerfile or `pm2` with `next start` on a Linux VPS behind Nginx.

---

## 2. Environment Variables Configuration

The following variables must be configured in the production hosting dashboard (e.g., Vercel Project Settings > Environment Variables). Refer to `.env.example`:

| Variable Name | Production Value | Scope | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://tumkurevents.com` | Public (Client & Server) | Canonical URL origin for metadata, Open Graph, sitemaps, and robots.txt. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919481234567` (or active SIM) | Public (Client) | International format digits only (no spaces or `+`). Used by WhatsApp click-to-chat. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `concierge@tumkurevents.com` | Public (Client) | Public email address displayed on contact page and structured data. |

> [!CAUTION]
> **Secret Hygiene:** Never prefix server-side secrets (such as future `GEMINI_API_KEY` or email SMTP keys) with `NEXT_PUBLIC_`. Keep all private credentials in the hosting dashboard.

---

## 3. Step-by-Step Deployment Process

### Option A: Deployment via Vercel (Recommended)

1. **Connect Repository:**
   - Log in to the [Vercel Dashboard](https://vercel.com).
   - Click **Add New... > Project** and import the `ShashankGowdaGS1/Tumkur-Events` repository.
2. **Configure Project Settings:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (or `next build`)
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
3. **Set Environment Variables:**
   - Add `NEXT_PUBLIC_SITE_URL=https://tumkurevents.com`.
   - Add confirmed phone number and email overrides.
4. **Deploy:**
   - Click **Deploy**. Vercel will build the release candidate and assign an isolated preview URL (e.g. `tumkur-events-*.vercel.app`).
5. **Verify Preview Deployment:**
   - Perform smoke tests on the preview URL prior to pointing custom domain DNS.

### Option B: Deployment via Node.js VPS / Docker

1. **Server Requirements:**
   - Ubuntu 22.04 / 24.04 LTS with Node.js 20.x or 22.x LTS.
2. **Build and Run:**
   ```bash
   git clone https://github.com/ShashankGowdaGS1/Tumkur-Events.git
   cd Tumkur-Events
   git checkout df6c12e
   npm ci
   npm run build
   pm2 start npm --name "tumkur-events" -- start -- -p 3000
   ```
3. **Configure Nginx Reverse Proxy & SSL:**
   - Route traffic on port 80/443 to `http://127.0.0.1:3000`.
   - Provision free SSL certificates via `certbot --nginx -d tumkurevents.com -d www.tumkurevents.com`.

---

## 4. DNS & Domain Configuration Plan

### Target Domain: `tumkurevents.com`

When the domain owner is ready to route live traffic:

| Host / Name | Record Type | Target / Value | TTL | Purpose |
|---|---|---|---|---|
| `@` (Apex) | `A` | `76.76.21.21` (for Vercel) | Auto / 300s | Routes root domain traffic to hosting edge. |
| `www` | `CNAME` | `cname.vercel-dns.com` (for Vercel) | Auto / 300s | Routes `www` subdomain. |

### Critical DNS Safety Rules:
> [!IMPORTANT]
> **Email Preservation:** Do NOT modify, overwrite, or delete any existing `MX`, `TXT` (SPF/DKIM/DMARC), or Google Workspace verification records. Only create or update the `A` and `CNAME` web records.

### Canonical Hostname & HTTPS Redirection:
- Enforce standard redirection from `http://` to `https://`.
- Enforce canonical redirection from `https://www.tumkurevents.com` to `https://tumkurevents.com` (or vice versa) to prevent duplicate content indexing.

---

## 5. Production SEO & Indexing Verification

Upon DNS cutover, verify:
1. **Robots File (`https://tumkurevents.com/robots.txt`):**
   - Confirmed allowing `User-agent: *`, `Allow: /`, and referencing `https://tumkurevents.com/sitemap.xml`.
2. **Sitemap (`https://tumkurevents.com/sitemap.xml`):**
   - Dynamically indexes all 17 canonical routes and 7 event category pages.
   - Strictly excludes unpublished drafts.
3. **Google Search Console:**
   - Add property for `https://tumkurevents.com`.
   - Submit sitemap URL: `https://tumkurevents.com/sitemap.xml`.

---

## 6. Uptime Monitoring & Error Telemetry

1. **Uptime Ping Monitoring:**
   - Configure a free monitoring service (e.g. BetterStack, UptimeRobot) with an HTTPS ping check every 5 minutes targeting:
     - `https://tumkurevents.com`
     - `https://tumkurevents.com/contact`
2. **SSL Expiration Alert:**
   - Configure alerts for SSL expiration (Vercel and Let's Encrypt renew automatically 30 days prior).
3. **Application Logs:**
   - Monitor Next.js server logs for any uncaught runtime exceptions.

---

## 7. Emergency Rollback Procedure

If a critical unexpected defect is observed on live production:

1. **Instant Hosting Rollback (Vercel / Netlify):**
   - Navigate to **Deployments** in the hosting dashboard.
   - Locate the previous stable deployment SHA.
   - Click **Instant Rollback**. Traffic shifts immediately with zero downtime.
2. **Git Baseline:**
   - Commit `df6c12e` is tagged as the stable Release Candidate 1.0 baseline.
   - Run `git revert` or checkout `df6c12e` to restore the code state.
3. **DNS Fallback:**
   - If hosting provider infrastructure fails, revert DNS `A` records to the previous server IP.

