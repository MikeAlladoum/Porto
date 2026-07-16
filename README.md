# Mike Alladoum's Web3 Portfolio

A premium, modern, and futuristic portfolio website for **DJEKOURMAN ALLADOUM MIKE**, a passionate blockchain developer from Lomé, Togo.

## 🎯 Features

- **Modern Web3 Design**: Inspired by the latest blockchain and Web3 UI trends
- **Glassmorphism Effects**: Premium frosted glass aesthetic throughout
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Sophisticated dark theme with neon accents
- **Dynamic Sections**: Interactive components that engage visitors
- **Performance Optimized**: Fast loading and smooth user experience

## 📋 Sections

1. **Hero Section** - Impactful introduction with call-to-action buttons
2. **About Me** - Personal story and core strengths
3. **Tech Stack** - Visual showcase of technologies and tools
4. **Projects** - Featured and complete project portfolio
5. **Certifications** - Credentials with ability to add new ones
6. **Experience Timeline** - Journey through blockchain learning and achievements
7. **Testimonials** - Social proof from colleagues and mentors
8. **Contact** - Form and social media links
9. **Footer** - Quick links and closing information

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Components**: React
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
