# Mike Alladoum's Web3 Portfolio - Project Setup Instructions

## Project Overview

This is a professional Web3 portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. The portfolio showcases blockchain expertise for DJEKOURMAN ALLADOUM MIKE, a junior blockchain developer from Lomé, Togo.

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Space Grotesk from Google Fonts

## Project Structure

```
porto/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── AboutSection.tsx     # About me section
│   ├── TechStackSection.tsx # Technology showcase
│   ├── ProjectsSection.tsx  # Portfolio projects
│   ├── CertificationsSection.tsx # Certs & achievements
│   ├── ExperienceSection.tsx # Timeline
│   ├── TestimonialsSection.tsx # Reviews
│   ├── ContactSection.tsx   # Contact form
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── UI.tsx               # Shared components
│   └── index.ts             # Exports
├── lib/                     # Utilities and data
│   ├── data.ts              # Content data
│   └── animations.ts        # Framer Motion variants
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
├── postcss.config.js       # PostCSS config
├── .eslintrc.json          # ESLint rules
└── README.md               # Documentation

## Key Features

### Sections
1. **Hero Section** - Main landing with CTA buttons
2. **About Me** - Personal story and strengths
3. **Tech Stack** - 16+ technologies organized by category
4. **Projects** - 6 featured/completed projects
5. **Certifications** - Add/manage credentials dynamically
6. **Experience Timeline** - Blockchain journey
7. **Testimonials** - Peer reviews (carousel + grid)
8. **Contact** - Form + social links
9. **Header/Footer** - Navigation and closing

### Design Elements
- Dark mode with neon cyan, purple, and pink accents
- Glassmorphism effects
- Smooth animations with Framer Motion
- Responsive mobile-first design
- Custom scrollbar styling
- Floating background elements

## Development Workflow

### Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Customization Guide

### Update Personal Information
Edit `lib/data.ts`:
- `projects` - Add/modify projects
- `certifications` - Add/manage certifications
- `testimonials` - Update testimonials
- `experience` - Modify timeline
- `socialLinks` - Update contact info
- `techStack` - Update technologies

### Modify Design
Edit `tailwind.config.js`:
- Colors in `neo` theme object
- Animations and keyframes
- Breakpoints and spacing

### Change Content Text
Edit individual section components in `components/`:
- Update descriptions
- Modify headings
- Change CTAs

### Add New Sections
1. Create new component file: `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to main layout
4. Style with Tailwind classes

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Works with Netlify, GitHub Pages, or any Node.js host:
```bash
npm run build
# Deploy the .next directory
```

## Performance Optimization

- Next.js Image optimization
- Lazy loading components
- Smooth 60fps animations
- Optimized bundle size
- SEO-friendly metadata

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes for Future Updates

- Certifications form saves to localStorage (can add backend)
- Projects can be extended with more details
- Contact form can integrate with email service
- GitHub stats can be fetched with API
- Consider adding Dark/Light mode toggle

## Support & Resources

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs/

---

Last Updated: May 2026
