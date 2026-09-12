# Khawaja Idrees - Professional Portfolio (Next.js + TypeScript)

A premium, minimalist, editorial-style personal portfolio website built with modern technologies.

## 🛠️ Technology Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Deployment
- **Vercel** - Recommended hosting platform (free)

## 📋 Features

✨ **Modern Tech Stack**
- Built with React + Next.js + TypeScript
- Tailwind CSS for styling
- Fully type-safe components
- Client-side interactivity

🎨 **Premium Design**
- Minimalist editorial aesthetic
- Warm off-white and black color scheme
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)

📱 **Fully Responsive**
- Desktop (1400px+)
- Tablet (768px - 1024px)
- Mobile (below 768px)

⚡ **Performance**
- Optimized for Vercel
- Fast build and load times
- Efficient component structure

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm or yarn package manager

### Installation

1. **Extract the project** to your desired location

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

**Option 1: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option 2: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import this repository
4. Click Deploy
5. Done! Your site is live

**Option 3: Manual GitHub Deployment**
1. Push code to GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Select your repository
4. Click Deploy

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles & animations
│   └── favicon.ico
├── components/
│   ├── Sidebar.tsx         # Left sidebar with logo
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills/technologies
│   ├── Work.tsx            # Selected projects
│   ├── Experience.tsx      # Experience timeline
│   ├── Connect.tsx         # Social links section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
├── tailwind.config.ts     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── .eslintrc.json         # ESLint config
└── .gitignore             # Git ignore rules
```

## 🎨 Customization Guide

### 1. **Personal Information**
Edit `components/Header.tsx`, `components/Hero.tsx`, `components/About.tsx`, etc.

```tsx
// Example: Change email
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 2. **Projects**
Edit `components/Work.tsx`:
```tsx
const projects = [
  { year: '2024', category: 'YOUR CATEGORY', name: 'YOUR PROJECT' },
  // Add more projects...
]
```

### 3. **Experience**
Edit `components/Experience.tsx`:
```tsx
const experiences = [
  {
    date: 'Your Date',
    title: 'Your Title',
    company: 'Your Company',
    description: 'Your Description',
  },
  // Add more experience...
]
```

### 4. **Skills**
Edit `components/Skills.tsx`:
```tsx
const skills = [
  { name: 'Your Skill', color: 'bg-blue-600' },
  // Add more skills...
]
```

### 5. **Colors**
Edit `tailwind.config.ts`:
```ts
colors: {
  'cream': '#F7F3F0',           // Background
  'text-primary': '#000000',    // Main text
  'text-secondary': '#333333',  // Secondary text
  'border-light': '#D9D5D1',    // Borders
}
```

### 6. **Social Links**
Edit `components/Connect.tsx` and update href/onClick handlers

## ⚙️ Environment Setup

No environment variables needed for basic functionality. Optional for email services:

Create `.env.local`:
```env
# Optional: For contact form integration
NEXT_PUBLIC_FORMSPREE_ID=your_id_here
```

## 🔧 npm Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Component Documentation

### Sidebar Component
- Displays name vertically
- Theme toggle button
- Logo/initials

### Header Component
- Navigation with active state
- Email contact link
- Connect button (scrolls to contact)

### Hero Component
- Large bold name
- Role subtitle
- CTA buttons (View Work, Download CV)
- Decorative elements

### About Component
- About section with bio
- 6 info cards with icons
- Responsive grid

### Skills Component
- Technology logos with brand colors
- Hover scale animation

### Work Component
- Project list with metadata
- Diagonal arrow link buttons
- Hover effects

### Experience Component
- Horizontal timeline
- Experience entries
- Date, title, company info

### Connect Component
- Social media cards
- GitHub, LinkedIn, Resume, Email
- Download functionality

### Contact Component
- Contact form with validation
- Contact information
- Success notification

## 🐛 Troubleshooting

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Ensure TypeScript is in dependencies
npm install typescript --save-dev

# Rebuild
npm run build
```

### Issue: Tailwind styles not applying
- Ensure all component files are in `app/` or `components/`
- Check `tailwind.config.ts` content paths
- Restart dev server

### Issue: Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Next.js version compatibility

## 📝 Git Workflow

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/repo.git

# Push
git push -u origin main
```

## 🚀 Performance Tips

1. **Images**: Optimize all images to <100KB
2. **Code Splitting**: Next.js automatically code-splits
3. **Lazy Loading**: Use `dynamic()` for heavy components
4. **Caching**: Vercel caches builds automatically

## 📊 SEO Optimization

- Metadata configured in `layout.tsx`
- Meta description included
- Open Graph tags ready
- Sitemap auto-generated by Next.js

## 🔒 Security

- TypeScript for type safety
- ESLint for code quality
- Environment variables for sensitive data
- Next.js security best practices

## 📈 Analytics (Optional)

To add analytics, install Vercel Web Analytics:
```bash
npm install @vercel/analytics @vercel/speed-insights
```

Then add to `app/page.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      {/* Your content */}
      <Analytics />
    </>
  )
}
```

## 💡 Next Steps

1. ✅ Customize all personal information
2. ✅ Update projects with real work
3. ✅ Add social media links
4. ✅ Test on multiple devices
5. ✅ Deploy to Vercel
6. ✅ Set up custom domain (optional)
7. ✅ Monitor analytics

## 📞 Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This portfolio is free to use and modify for personal use.

## 🎉 Ready to Deploy?

Your portfolio is production-ready! Follow these steps:

1. **Test locally**: `npm run dev`
2. **Build production**: `npm run build`
3. **Deploy to Vercel**: Push to GitHub and import
4. **Custom domain**: Set up in Vercel dashboard
5. **Share**: Your portfolio is live!

---

**Built with React, Next.js, TypeScript, and Tailwind CSS** ✨

Designed for Khawaja Idrees - Frontend Developer & UI/UX Enthusiast

# personal-portfolio