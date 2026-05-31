# Muslim Nations · FIFA World Cup 2026

> Schedule for all **13 Muslim & Arab nations** at the 2026 FIFA World Cup.  
> All kick-off times shown in **Lebanon Time (LBT · UTC+3)**.

## Nations Included

| Nation | Group | Category |
|---|---|---|
| 🇸🇦 Saudi Arabia | H | Arab |
| 🇲🇦 Morocco | C | Arab |
| 🇪🇬 Egypt | G | Arab |
| 🇮🇶 Iraq | I | Arab |
| 🇩🇿 Algeria | J | Arab |
| 🇯🇴 Jordan | J | Arab |
| 🇹🇳 Tunisia | F | Arab |
| 🇶🇦 Qatar | B | Arab |
| 🇹🇷 Türkiye | D | Muslim |
| 🇸🇳 Senegal | I | Muslim |
| 🇮🇷 Iran | G | Muslim |
| 🇧🇦 Bosnia & Herz. | B | Muslim |
| 🇺🇿 Uzbekistan | K | Muslim |

## Features

- 📱 **PWA** — installable on iOS & Android (works offline)
- 🌙 Night sky theme
- 🏆 Derby badges for Muslim/Arab head-to-head matchups
- 🔽 Filter by Arab / Other Muslim nations
- ⚡ Zero dependencies — pure HTML, CSS, JS

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "init: Muslim WC2026 PWA"
git remote add origin https://github.com/YOUR_USERNAME/muslim-wc2026.git
git push -u origin main

# 2. Deploy via Vercel CLI
npm i -g vercel
vercel

# — or — connect your GitHub repo at vercel.com/new
```

## Deploy to GitHub Pages

```bash
# In your repo settings → Pages → Deploy from branch → main / root
# No build step needed — this is static HTML/CSS/JS
```

## Local dev

```bash
# Any static server works, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

## PWA Icons

Icons are pre-generated in `/icons/`. To regenerate:

```bash
pip install Pillow
python3 scripts/gen_icons.py
```

---

*Unofficial fan project. Not affiliated with FIFA.*
