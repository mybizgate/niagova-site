# niagova-site

Corporate website for **Niagova** (formerly MyBizGate) — websites, booking, ordering and business systems for Malaysian SMEs. Production domain `https://niagova.com`, contact `sales@niagova.com`.

Static, buildless, mobile-first. `index.html`, `style.css`, `script.js`, `assets/`. Built and deployed through the shared MyBizGate platform (`site.config.yml`, `.github/workflows/deploy.yml`, push to `deploy`).

- Business types, needs, demo links and plan prices live in `script.js` (`BIZ`, `NEEDS`, `PLANS`, `DEMOS`).
- Brand assets are in `assets/brand/` (from the NIAGOVA kit); favicons and manifest in `assets/` and the root.
- Photos are Codex-generated and illustrative; replace with real client photography when available.
- Go-to-market notes: `docs/marketing-strategy.md`.

Preview locally from the workspace root: `python3 -m http.server 8000` then open `/niagova-site/`.
