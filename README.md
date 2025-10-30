# 🚀 Tejas Sonkusare - Portfolio Website

A modern, feature-rich portfolio website showcasing professional experience, projects, certifications, and skills. Built with cutting-edge technologies and enhanced with beautiful animations, loading states, and interactive elements.

[![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-ff69b4?style=for-the-badge)](https://www.framer.com/motion/)

## 🌟 Live Demo

Visit the live portfolio: **[https://tejas-sonkusare-portfolio.vercel.app/](https://tejas-sonkusare-portfolio.vercel.app/)**

## 🚀 Technologies & Tools

- **Framework**: Next.js 15.0.3 with App Router & Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone or navigate to the project directory**
```bash
cd /Users/tejassonkusare5/Desktop/portfolio
```

2. **Install dependencies**
```bash
npm install
```

## 🏃 Running the Project

### Development Mode

To run the project in development mode:

**Option 1: Default port (3000)**
```bash
npm run dev
```
The application will be available at: `http://localhost:3000`

**Option 2: Specific port**
```bash
npm run dev -- -p 3000
```

**Option 3: Different port**
```bash
npm run dev -- -p 3001
```

### Production Build

1. **Build the project**
```bash
npm run build
```

2. **Start the production server**
```bash
npm start
```

### Linting

To check for code quality issues:
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # Reusable components
│   │   └── Navbar.tsx     # Navigation bar
│   └── sections/          # Page sections
│       ├── About.tsx      # About section
│       ├── Certifications.tsx  # Certifications section
│       ├── Contact.tsx    # Contact section
│       ├── Education.tsx  # Education section
│       ├── Experience.tsx # Experience section
│       ├── Hero.tsx       # Hero/Landing section
│       ├── Projects.tsx   # Projects section
│       ├── Skills.tsx     # Skills section
│       └── index.ts       # Export all sections
├── public/                # Static assets
│   ├── certificates/      # Certificate images
│   ├── profile.jpg        # Profile picture
│   └── Tejas_Sonkusare_Resume.pdf  # Resume PDF
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── next.config.mjs        # Next.js configuration
```

## ✨ Key Features

### 🎯 Enhanced Sections

#### 🏠 Hero Section
- Animated greeting with typewriter effect
- Live online status indicator with pulsing animation
- Quick stats dashboard (Projects, Experience, Certifications)
- Social media links with hover effects
- Gradient background with floating elements
- Call-to-action buttons (View Work, Download Resume, Contact)

#### 👤 About Me
- Professional background and achievements
- Core competencies with interactive skill cards
- Creative pursuits and philosophy
- Animated achievement cards
- Smooth scroll animations

#### 💼 Professional Journey
- Detailed work experience timeline
- Role-specific achievements and responsibilities
- Technology stack for each position
- Interactive cards with hover effects
- Color-coded categories

#### 🚀 Projects Showcase
- Interactive category filtering (9 categories)
- Project status badges (Active, Live, Completed, Archived)
- Technology stack display with animated tags
- Detailed project information on hover
- Year and feature count indicators
- Smooth layout transitions

#### 🎓 Education
- **1-second loading animation** when viewing degree certificate
- Academic performance visualization with progress bars
- Key subjects studied with icons
- CGPA and graduation year display
- Modal certificate viewer with watermark protection

#### 💻 Technical Skills
- Multi-domain skill categorization
- Interactive technology tags with "Skilled" tooltips
- Proficiency levels with animated progress bars
- Category navigation with mini progress indicators
- 360° icon rotation on hover
- Comprehensive tech stack across all domains

#### 🏆 Professional Certifications
- **1-second loading animation** when viewing certificates
- 17+ certifications across 5 specialized domains
- Featured certification badges
- Category-based filtering
- Interactive certificate viewer with modal
- Integration with Credly profile
- Animated certificate cards with glow effects

#### 💬 Contact Section (Let's Connect)
- **Live availability status** with green indicator
- **Quick stats**: Response Time, Reply Rate, Timezone
- **Multiple contact methods**:
  - Email with copy-to-clipboard
  - Phone with copy-to-clipboard
  - WhatsApp integration
  - Location display
- **Enhanced contact form**:
  - Character counter (0/500)
  - Animated progress bar
  - Form validation
  - Success message with animation
- **Social profiles**: LinkedIn, GitHub with follower counts
- **Trust signals**: Quick Response & Privacy Protection cards
- **Bigger send button** with shine animation effect

#### 🎵 Music Page
- Custom music player with controls
- Multi-color circular progress indicator
- Animated emoji visualizer
- Song list with "New" tags
- Volume control
- Shuffle and repeat functionality
- Copyright protection notice

### 🎨 Design Features

- **Responsive Design**: Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered transitions
- **Loading States**: Professional 1-second loading animations
- **Glass Morphism**: Modern glass effects throughout
- **Gradient Accents**: Multi-color gradients (Cyan, Purple, Pink)
- **Interactive Elements**: Hover effects, scale animations, rotations
- **Accessibility**: ESC key support, click-outside-to-close modals
- **Performance**: Optimized for fast loading and smooth scrolling

### 🔐 Advanced Features

- **Copy to Clipboard**: Quick copy for email and phone
- **Modal Viewers**: Certificate and degree viewing with protection
- **Form Validation**: Real-time validation with character counting
- **Watermark Protection**: Image overlay on certificates
- **Keyboard Navigation**: ESC to close modals
- **Scroll Lock**: Body scroll prevention when modals open
- **Progressive Loading**: Smooth transitions between states

## 🔧 Troubleshooting

### Port Already in Use

If you see a message like "Port 3000 is in use", either:
1. Stop the process using that port
2. Use a different port: `npm run dev -- -p 3001`

### To Kill a Process on a Specific Port

**macOS/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Clear Next.js Cache

If you encounter build issues:
```bash
rm -rf .next
npm run dev
```

## 🆕 Latest Updates

### Version 2.0 - Major Enhancement Release

**Contact Section Upgrade:**
- ✅ Live online status with animated indicator
- ✅ Quick stats dashboard (Response Time, Reply Rate, Timezone)
- ✅ WhatsApp integration added
- ✅ Copy-to-clipboard for Email & Phone
- ✅ Enhanced form with character counter and progress bar
- ✅ Bigger, more prominent Send Message button
- ✅ Success message with green glow animation
- ✅ Trust cards (Quick Response & Privacy Protection)

**Loading Animations:**
- ✅ 1-second loading animation for certificate viewing
- ✅ 1-second loading animation for degree certificate
- ✅ Spinning icons with rotation and scale effects
- ✅ Animated dots with wave effect
- ✅ Progress bars with gradient fills
- ✅ Professional glassmorphism design

**TypeScript Fixes:**
- ✅ All motion component errors resolved
- ✅ Build passes successfully on Vercel
- ✅ Full TypeScript compliance
- ✅ No linting errors

**UI/UX Improvements:**
- ✅ Enhanced animations throughout
- ✅ Better visual hierarchy
- ✅ Improved hover states
- ✅ More interactive elements
- ✅ Professional polish across all sections

## 📦 Dependencies

### Main Dependencies
- **next**: ^15.0.3 - React framework with App Router
- **react**: ^19.0.0 - UI library
- **react-dom**: ^19.0.0 - React DOM renderer
- **framer-motion**: ^11.15.0 - Animation library
- **lucide-react**: ^0.462.0 - Icon library

### Dev Dependencies
- **typescript**: ^5 - Type checking
- **@types/node**: ^20 - Node.js type definitions
- **@types/react**: ^19 - React type definitions
- **@types/react-dom**: ^19 - React DOM type definitions
- **tailwindcss**: ^3.4.1 - Utility-first CSS framework
- **eslint**: ^8 - Code linting
- **eslint-config-next**: 15.0.3 - Next.js ESLint configuration
- **postcss**: ^8 - CSS transformations
- **autoprefixer**: ^10 - CSS vendor prefixing

## 🌐 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch triggers automatic deployment
   - Preview deployments for pull requests
   - Production URL updates automatically

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
```

### Environment Variables

If needed, add environment variables in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy for changes to take effect

## ⚡ Performance

- **Lighthouse Scores**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Optimized Images**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Size**: Optimized with Next.js 15 + Turbopack

## 📝 Git Commands Reference

**Check current version:**
```bash
git log --oneline
```

**View commit history:**
```bash
git log --graph --oneline --all
```

**Restore to previous version:**
```bash
git reset --hard HEAD~1
```

**Restore to specific commit:**
```bash
git reset --hard <commit-hash>
```

**Check current status:**
```bash
git status
```

**Create new branch:**
```bash
git checkout -b feature/your-feature-name
```

**Push changes:**
```bash
git add .
git commit -m "Your message"
git push origin main
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: tejassonkusare5@gmail.com
- **LinkedIn**: [Tejas Sonkusare](https://www.linkedin.com/in/tejas-sonkusare-273581230/)
- **GitHub**: [tejassonkusare](https://github.com/tejassonkusare)
- **Portfolio**: [https://tejas-sonkusare-portfolio.vercel.app/](https://tejas-sonkusare-portfolio.vercel.app/)

## 📄 License

This is a personal portfolio project. All rights reserved © 2024 Tejas Sonkusare

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For the hosting platform
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For the utility-first CSS framework

---

<div align="center">

**Built with ❤️ by Tejas Sonkusare**

⭐ Star this repo if you find it helpful!

</div>

