# 💙 Blue Confession Website

A romantic, interactive personal confession web application designed for a loved one whose favorite color is blue. Built with Next.js, React, Tailwind CSS, and Framer Motion, with background music (*“blue” by yung kai*), playful interactions, and celebratory effects.

---

## ✨ Key Features

1. **Intimate Blue Aesthetic**
   - Soft glowing gradients, midnight blues, sky blues, and glassmorphism.
   - Ambient background with drifting blue hearts, twinkling stars, and light orbs.
   - Elegant typography pairing: Cormorant Garamond serif + Plus Jakarta Sans.

2. **Sequential Storytelling**
   - 11 gradual confession parts with smooth fade & slide transitions.
   - Special visual glow emphasis on **Part 7**: *“I think I fell way too deep.”*
   - Interactive progress bar and navigation dots.

3. **Background Music**
   - Song: **“blue” by yung kai**
   - Automatically begins when the user clicks **“Open it ♡”** on the opening screen (respects browser autoplay policies).
   - Floating glassmorphism music player with equalizer bars, play/pause controls, and fallback ambient synth.

4. **Playful Question & Interactions**
   - Question: *“Would it be okay if I became your boyfriend?”*
   - **Growing Yes Button**: Each time **No** is clicked, the **Yes** button grows progressively larger.
   - **Playful No Button**: Dodges smoothly within the frame with cute responses (*“Are you sure? 🥺”*, *“Hmm… think again 👀”*, *“Really? You’re breaking my heart here 😭”*).

5. **3-Step Confirmation Flow**
   - Step 1: *“Are you sure? 🥺”*
   - Step 2: *“Like… really sure? 👀”*
   - Step 3: *“Okay, but are you REALLY, REALLY sure? 💙”* $\rightarrow$ **YES, I’M SURE**

6. **Grand Celebration Screen**
   - Blue & silver celebratory confetti cannons.
   - Official message: *“Then it’s official. 💙 You’re my boyfriend now.”*
   - Date-stamped romantic love note card and replay option.

---

## 🚀 How to Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: romantic blue confession website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and build it!

### Option 2: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Local Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📝 Customizing Text & Audio

- **Confession story & questions:** [`src/data/confessionData.ts`](./src/data/confessionData.ts)
- **Audio file:** Replace [`public/audio/blue-yung-kai.mp3`](./public/audio/blue-yung-kai.mp3) with your favorite audio recording if desired.
