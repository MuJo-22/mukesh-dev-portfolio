# Mukesh M — Portfolio (React + Vite)

A single-page developer portfolio built with React and Vite. Dark "ledger/terminal"
theme, scroll animations, a simple animated hero background, and an optional
AI chat widget (backed by the real Anthropic API through a serverless function).

---

## 1. Project structure

```
mukesh-portfolio/
├── api/
│   └── chat.js            ← serverless function that talks to Anthropic (backend)
├── public/
│   └── resume.pdf         ← replace with your own résumé (keep the filename)
├── src/
│   ├── components/        ← Nav, Hero, About, Stack, Ledger, Builds, Contact, Footer, AIChat
│   ├── hooks/
│   │   └── useReveal.js   ← scroll-reveal animation hook
│   ├── data.js            ← ALL your content lives here (name, bio, jobs, projects, skills)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← all styling / design tokens
├── index.html
├── package.json
├── vite.config.js
└── README.md              ← you are here
```

**To edit your content later, you mostly only need `src/data.js`.**

---

## 2. Run it locally

You need [Node.js](https://nodejs.org) version 18 or later installed.

```bash
# 1. Unzip the project, then cd into it
cd mukesh-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.
Changes to any file auto-reload.

---

## 3. Customize your content

Open `src/data.js`. Everything on the page — your name, bio, stats, skills,
work history, projects, and contact info — is defined there as plain
JavaScript objects/arrays. Edit the text, save, and the dev server refreshes
automatically.

To swap the résumé file, replace `public/resume.pdf` with your own PDF
(keep the exact filename `resume.pdf`, or update the `href` in
`src/components/Hero.jsx` if you rename it).

To change colors, open `src/index.css` and edit the `:root` block at the
top — those CSS variables control the whole palette.

---

## 4. The AI chat widget (optional)

The "Ask my AI" button lets visitors chat with an AI that knows your résumé.
This is a **real** feature — it calls the actual Anthropic API — which means
two things:

1. **You need your own API key.** Get one at
   [console.anthropic.com](https://console.anthropic.com).
2. **It costs money to use**, billed to your Anthropic account based on
   usage (typically fractions of a cent per message for a short chat like
   this, but keep an eye on your usage dashboard, especially if the site
   gets a lot of traffic).

The key is read on the **server** (`api/chat.js`), never sent to the
browser — this is important, since anything in frontend code is publicly
visible.

**If you don't want to set this up:** the site works completely fine
without it. The chat widget will just show a friendly fallback message
("I'm having trouble connecting…") instead of a real AI response.

To edit what the AI knows about you, update the `SYSTEM_PROMPT` text at
the top of `api/chat.js`.

---

## 5. Deploying — step by step

### Option A: Vercel (recommended — the AI chat works here)

Vercel automatically turns anything in the `api/` folder into a live
serverless endpoint, which is what `api/chat.js` needs.

1. **Push the project to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   ```
   Create a new empty repo on [github.com/new](https://github.com/new), then:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/log in (GitHub login is easiest).
   - Click **"Add New" → "Project"**.
   - Select your GitHub repo. Vercel auto-detects Vite — leave the defaults.

3. **Add your API key (only if using the AI chat):**
   - In the import screen (or later under **Project → Settings → Environment Variables**), add:
     - Name: `ANTHROPIC_API_KEY`
     - Value: your key from console.anthropic.com
   - Redeploy if you add this after the first deploy.

4. **Click Deploy.** You'll get a live URL like `https://mukesh-portfolio.vercel.app`.

5. **Custom domain (optional):** Project → Settings → Domains → add your own domain and follow the DNS instructions Vercel gives you.

Every future `git push` to `main` auto-redeploys.

---

### Option B: Netlify (static + functions, slightly different setup)

1. Push to GitHub (same as above).
2. Go to [netlify.com](https://netlify.com) → **"Add new site" → "Import an existing project"** → pick your repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. For the AI chat to work on Netlify, the serverless function needs to live in
   `netlify/functions/chat.js` instead of `api/chat.js`, using Netlify's
   function signature instead of Vercel's. If you want this, ask and I'll
   convert `api/chat.js` to the Netlify format — the rest of the app doesn't change.
5. Add the `ANTHROPIC_API_KEY` environment variable under **Site settings → Environment variables**.

---

### Option C: GitHub Pages (free, static only — no AI chat backend)

GitHub Pages only serves static files, so the `/api/chat` function won't run there.
The rest of the site (including the animated hero and all content) works fine;
the AI chat button will just show the fallback message.

1. Install the deploy helper (already listed in `package.json`):
   ```bash
   npm install
   ```
2. In `vite.config.js`, uncomment and set the `base` path to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. Push your code to a GitHub repo (same git steps as Option A).
4. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch.
5. In your GitHub repo → **Settings → Pages**, set the source to the `gh-pages` branch.
6. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 6. Quick checklist before sharing the link

- [ ] Updated `src/data.js` with your real info (double-check phone/email)
- [ ] Replaced `public/resume.pdf` with your latest résumé
- [ ] Tested the site on mobile width (resize your browser or use dev tools)
- [ ] Decided whether to set up the AI chat (optional) or leave the fallback
- [ ] Ran `npm run build` locally once to make sure there are no errors before deploying
