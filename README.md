# Mike Alladoum's Web3 Portfolio 🚀

A **premium, production-ready** Web3 portfolio with a **full-featured admin dashboard** for managing all portfolio content. Built with vanilla technologies for maximum simplicity and performance.

**Status:** ✅ Deployed to production on Vercel
**Live URL:** https://porto-sage-beta.vercel.app

---

## 🎯 Features

### Public Portfolio
- ✅ Modern Web3 Design with glassmorphism effects
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth animations and transitions
- ✅ Performance optimized
- ✅ SEO friendly

### Admin Dashboard
- ✅ **Projects CRUD** - Create, edit, delete, feature projects
- ✅ **Certifications Management** - Add/manage certifications dynamically
- ✅ **Education Tracking** - Manage educational background
- ✅ **CV Management** - Upload/download/manage CV files
- ✅ **Testimonials Moderation** - Approve/reject/edit testimonials
- ✅ **Analytics Dashboard** - Real-time statistics and charts
- ✅ **Dark/Light Theme Toggle** - UI preference persistence
- ✅ **localStorage Persistence** - Data persists across sessions

---

## 📋 Sections

1. **Hero Section** - Impactful introduction with CTA buttons
2. **About Me** - Personal story and core strengths
3. **Tech Stack** - Visual showcase of 16+ technologies
4. **Projects** - Featured and complete project portfolio
5. **Certifications** - Dynamic credentials management
6. **Experience Timeline** - Blockchain journey timeline
7. **Education** - Educational background and courses
8. **Testimonials** - Social proof from colleagues
9. **Contact** - Forms and social media links
10. **Footer** - Quick links and information

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- No frameworks (Vue, React, Next.js)
- No build tools required
- Google Fonts (Space Grotesk, Inter)
- Font Awesome 6.4.0 icons

**Backend:**
- Node.js v22+ (local development)
- HTTP native module (no Express)
- localStorage for data persistence

**Deployment:**
- Vercel (Production)
- Static site hosting
- Global CDN distribution
- Automatic SSL/HTTPS

---

## 🚀 Quick Start

### Development (Local)

```bash
# Install dependencies
npm install

# Start development server
node server-local.js

# Visit
http://localhost:3000
```

### Production

**Via Vercel (Recommended):**
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically
4. Live URL: `https://your-domain.vercel.app`

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for detailed steps.

---

## 📊 Development Phases

| Phase | Feature | Commit | Status |
|-------|---------|--------|--------|
| 1 | Dashboard Overview | Initial | ✅ Live |
| 2 | Projects CRUD | Projects management | ✅ Live |
| 3 | Certifications | Certificate management | ✅ Live |
| 4 | Education | Education CRUD | ✅ Live |
| 5 | CV Management | File upload/download | ✅ Live |
| 6 | Testimonials | Moderation workflow | ✅ Live |
| 7 | Analytics | Real-time statistics | ✅ Live |
| 8 | UI Polish | Dark/Light mode + animations | ✅ Live |
| 9 | Vercel Deployment | Production ready | ✅ Live |

---

## 🔐 Admin Dashboard

### Access Credentials
- **URL:** `/admin/login.html`
- **Email:** `admin@portfolio.dev`
- **Password:** `admin123`

### Dashboard Features

#### 📁 Projects Management
- Add/Edit/Delete projects
- Mark projects as featured
- Archive projects
- Track technologies used

#### 🏆 Certifications
- Add/Manage certifications
- Organize by issuer and year
- Mark active/inactive

#### 📚 Education
- Track courses and formations
- Manage educational timeline
- Add institutions and dates

#### 📥 CV Management
- Upload multiple CV versions
- Mark one as active
- Download CVs
- Track file sizes

#### 💬 Testimonials Moderation
- Review pending testimonials
- Approve/reject testimonials
- Edit testimonial content
- Filter by status

#### 📊 Analytics
- Real-time visitor statistics
- Page views and CV downloads
- Content breakdown (projects, certs, etc.)
- Monthly activity charts
- Technology usage breakdown
- Reset statistics

#### 🎨 UI Features
- **Dark/Light Mode Toggle** - Persistent theme preference
- **Advanced Animations** - Fade, slide, bounce effects
- **Glassmorphism** - Premium visual effects
- **Responsive Design** - Works on all devices

---

## 💾 Data Persistence

All admin data is stored in **browser localStorage**:
- `adminProjects` - Project data
- `adminCertificates` - Certificates
- `adminEducation` - Education records
- `adminCVs` - CV metadata and base64 content
- `adminTestimonials` - Testimonials with status
- `adminAnalytics` - Analytics statistics
- `adminTheme` - Theme preference (dark/light)
- `adminSession` - Authentication token

**Note:** Data is local to each browser. No backend database required.

---

## 🎨 Design System

### Color Palette
- **Primary Cyan:** `#00d9ff`
- **Primary Purple:** `#b344ff`
- **Primary Pink:** `#ff344f`
- **Dark Background:** `#0a0e27`
- **Dark Secondary:** `#1a1f3a`

### Animations
- Fade-in/out
- Slide-in (Up, Down, Left, Right)
- Bounce effect
- Pulse effect
- Glow effect
- Rotate effect
- Staggered transitions

### Glassmorphism
- `backdrop-filter: blur(10px)`
- `rgba(255,255,255,0.05)` backgrounds
- Soft shadows and glows
- Premium aesthetic

---

## 🔒 Security

### Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Caching
- HTML/JSON: No cache (always fresh)
- Static assets: 1-year cache (immutable)
- Admin routes: No cache (security)

### Authentication
- Simple username/password (localStorage)
- Session token in localStorage
- Automatic logout on page close

---

## 📱 Responsive Design

- **Desktop (1200px+):** Full layout with sidebars
- **Tablet (768px-1199px):** Adjusted spacing and sizing
- **Mobile (<768px):** Hamburger menu, stacked layout

---

## ⚡ Performance

- **Lighthouse Score:** 90+
- **First Contentful Paint:** <1s
- **Largest Contentful Paint:** <1.5s
- **Cumulative Layout Shift:** 0
- **No external framework overhead**
- **Minimal JavaScript bundle**
- **CDN distribution via Vercel**

---

## 🛣️ File Structure

```
porto/
├── public/
│   ├── index.html                 # Main portfolio
│   ├── admin/
│   │   ├── login.html             # Admin login
│   │   └── dashboard.html         # Admin dashboard (CRUD)
│   └── assets/                    # Images, fonts, etc.
├── server-local.js                # Local Node server
├── package.json                   # Dependencies
├── vercel.json                    # Vercel config
├── .gitignore                     # Git ignore rules
├── README.md                      # This file
└── VERCEL_DEPLOYMENT_GUIDE.md     # Deployment instructions
```

---

## 🚀 Deployment

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for:
- Step-by-step Vercel deployment
- Configuration options
- Post-deployment checklist
- Custom domain setup
- Performance optimization

**Quick Deploy:**
```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel
# Go to https://vercel.com/import

# 3. Select repository and deploy
# Live in 1-2 minutes!
```

---

## 🔄 Environment Variables

No environment variables required for basic deployment.

Optional for future enhancements:
- `REACT_APP_API_URL` - Backend API (Phase 10)
- `DATABASE_URL` - Database connection (Phase 10)
- `SMTP_HOST` - Email service (Phase 11)

---

## 🐛 Troubleshooting

### Admin Panel Not Loading
```bash
# Clear browser cache
# Delete all localStorage entries
# Reload page
# Try different browser
```

### CSS/JS Not Loading
```bash
# Verify public/ folder structure
# Check Vercel build logs
# Ensure file paths use /public/ prefix
```

### Form Submissions Not Working
```bash
# Check browser console for errors
# Verify localStorage is enabled
# Check JavaScript is enabled
```

---

## 📚 Documentation

- [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) - Production deployment
- [copilot-instructions.md](./.github/copilot-instructions.md) - Project setup
- Source code comments - Inline documentation

---

## 🎯 Future Phases (10+)

- **Phase 10:** Database Integration (MongoDB/Supabase)
- **Phase 11:** Email Notifications & Alerts
- **Phase 12:** Advanced Analytics & Reporting
- **Phase 13:** API Documentation
- **Phase 14:** Mobile App

---

## 👨‍💻 Author

**DJEKOURMAN ALLADOUM MIKE**
- 📍 Location: Lomé, Togo
- 🔗 Portfolio: https://porto-sage-beta.vercel.app
- 📧 Email: admin@portfolio.dev
- 🔗 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: https://github.com/MikeAlladoum

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🙏 Acknowledgments

- Vercel for hosting
- Font Awesome for icons
- Google Fonts for typography
- Community feedback and testing

---

**Status:** Production Ready ✅
**Last Updated:** 2026-07-16
**Version:** 1.0.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd porto
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information

Update personal details in `lib/data.ts`:

```typescript
// Update social links, contact info, projects, etc.
```

### Colors & Theme

Modify the theme in `tailwind.config.js`:

```javascript
// Update neo-accent colors and gradients
```

### Content Sections

Edit individual section components in `components/`:

- `HeroSection.tsx` - Main hero content
- `AboutSection.tsx` - About me text and interests
- `ProjectsSection.tsx` - Project details
- `ContactSection.tsx` - Contact information

### Adding New Projects

Update the `projects` array in `lib/data.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Description...',
    image: '🚀',
    stack: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    demo: 'https://...',
    featured: true,
    status: 'Completed',
  },
  // Add more projects...
];
```

### Adding Certifications

Use the built-in form in the Certifications section or update `lib/data.ts`:

```typescript
export const certifications = [
  {
    id: 1,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    badge: '🎖️',
  },
  // Add more certifications...
];
```

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy directly to Vercel, Netlify, or your preferred hosting platform.

## 🎨 Design Highlights

### Color Palette

- **Primary Accent**: Cyan (`#00d9ff`)
- **Secondary Accent**: Purple (`#b344ff`)
- **Tertiary Accent**: Pink (`#ff344f`)
- **Dark Background**: (`#0a0e27`)
- **Card Background**: (`#1a1f3a`)

### Animations

- Smooth fade-ins and scale transitions
- Hover effects with glow shadows
- Floating background elements
- Scroll-triggered animations
- Staggered content reveals

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS theme
- `postcss.config.js` - PostCSS plugins
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules

## 📄 SEO & Performance

- Meta tags for social sharing
- Open Graph support
- Optimized images
- Fast page load times
- Smooth 60fps animations

## 🤝 Contributing

Feel free to fork, modify, and adapt this portfolio for your own use!

## 📞 Contact

- **GitHub**: [MikeAlladoum](https://github.com/MikeAlladoum)
- **LinkedIn**: [mikealladoum](https://linkedin.com/in/mikealladoum)
- **Twitter**: [@Mike_Alladoum](https://x.com/Mike_Alladoum)
- **Location**: Lomé, Togo

## 📄 License

This portfolio is open source and available under the MIT License.

---

**Built with ❤️ for a Web3 future** | Made with Next.js + React + Tailwind CSS + Framer Motion
