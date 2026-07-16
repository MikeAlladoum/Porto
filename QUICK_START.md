# 🚀 QUICK START - Copy & Paste Commands

## ⚡ Get Your Portfolio Running in 3 Steps

### **Step 1: Install Dependencies**

Copy and paste this into PowerShell:

```powershell
cd C:\Users\HP\Documents\porto
npm install
```

**⏱️ Takes 2-5 minutes**

---

### **Step 2: Start Development Server**

```powershell
npm run dev
```

**✅ Look for this message:**
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

### **Step 3: Open in Browser**

Click or paste into your browser:
```
http://localhost:3000
```

**🎉 Your portfolio is live!**

---

## 🎯 Common Commands

### **Development**
```powershell
npm run dev              # Start dev server (Press Ctrl+C to stop)
```

### **Production**
```powershell
npm run build           # Create optimized build
npm start               # Start production server
```

### **Code Quality**
```powershell
npm run lint            # Check code quality
```

### **Troubleshooting**
```powershell
npm cache clean --force # Clear npm cache
npm install             # Reinstall dependencies
npm list                # List all packages
```

---

## 🔧 If npm install Hangs

Try these alternatives in order:

### **Option 1: Legacy Mode** (Usually works)
```powershell
npm install --legacy-peer-deps
```

### **Option 2: Clear Cache**
```powershell
npm cache clean --force
npm install
```

### **Option 3: Use Yarn** (If installed)
```powershell
yarn install
```

### **Option 4: Manual Installation**
```powershell
npm install react react-dom next framer-motion tailwindcss
```

---

## 📱 Test Your Portfolio

After running `npm run dev`, open:

- **Hero Section**: http://localhost:3000 (automatic)
- **About Me**: Scroll down
- **Tech Stack**: Scroll down
- **Projects**: Scroll down
- **Certifications**: Scroll down
- **Experience**: Scroll down
- **Testimonials**: Scroll down
- **Contact**: Scroll down or click "Get In Touch"

---

## ✏️ Customize Your Portfolio

### **Update Your Information**

Open: `lib/data.ts`

Find and update:
```typescript
// Update your projects
export const projects = [...]

// Update your skills
export const techStack = [...]

// Update certifications
export const certifications = [...]

// Update testimonials
export const testimonials = [...]

// Update timeline
export const experience = [...]

// Update social links
export const socialLinks = [...]
```

### **Change Colors**

Open: `tailwind.config.js`

Find `colors.neo` and update:
```javascript
'accent': '#00d9ff',           // Change cyan color
'accent-purple': '#b344ff',    // Change purple
'accent-pink': '#ff344f',      // Change pink
```

---

## 🌐 Deploy to Vercel (Free)

### **Step 1: Push to GitHub**
```powershell
git init
git add .
git commit -m "My Web3 Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/porto.git
git push -u origin main
```

### **Step 2: Deploy**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"
5. Done! 🎉

Your portfolio is now live!

---

## 📊 Project Structure

```
porto/
├── app/
│   ├── layout.tsx       ← Root layout
│   ├── page.tsx         ← Main page
│   └── globals.css      ← Styles
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── TechStackSection.tsx
│   ├── ProjectsSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── UI.tsx
│   └── index.ts
├── lib/
│   ├── data.ts          ← Your content
│   └── animations.ts
├── package.json         ← Dependencies
├── tailwind.config.js   ← Styles config
└── README.md
```

---

## ✅ Checklist Before Launch

- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Open http://localhost:3000
- [ ] View all 9 sections
- [ ] Check responsive design (resize browser)
- [ ] Update `lib/data.ts` with your info
- [ ] Test contact form
- [ ] Test project links
- [ ] Build for production (`npm run build`)
- [ ] Deploy to Vercel

---

## 🎉 You're All Set!

Your professional Web3 portfolio is ready. Follow the 3 steps at the top and you'll be live in minutes!

### **Questions?**
- Check `SETUP_GUIDE.md` for detailed help
- Check `PROJECT_SUMMARY.md` for complete info
- Check `README.md` for documentation

### **Ready to impress?** 🚀

Run those commands and showcase your blockchain expertise!

---

**Built for: DJEKOURMAN ALLADOUM MIKE**
**Technology: Next.js + React + Tailwind + Framer Motion**
**Status: ✅ Production Ready**
