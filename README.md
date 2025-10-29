# Tejas Sonkusare - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS. Features smooth animations using Framer Motion and a clean, professional design.

## 🚀 Technologies Used

- **Framework**: Next.js 15.0.3 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

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

## 🎨 Features

- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Sections**:
  - Hero section with introduction
  - About section with personal information
  - Skills showcase
  - Work experience timeline
  - Education details
  - Projects portfolio
  - Certifications gallery
  - Contact information
- **Downloadable Resume**: Direct PDF download
- **Modern UI/UX**: Clean and professional design

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

## 📦 Dependencies

### Main Dependencies
- next: ^15.0.3
- react: ^19.0.0
- react-dom: ^19.0.0
- framer-motion: ^11.15.0
- lucide-react: ^0.462.0

### Dev Dependencies
- typescript: ^5
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- tailwindcss: ^3.4.1
- eslint: ^8
- eslint-config-next: 15.0.3

## 🌐 Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy with one click

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📝 Git Commands

**Check current version:**
```bash
git log --oneline
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

## 📧 Contact

For any questions or issues, please contact Tejas Sonkusare through the contact section on the portfolio website.

## 📄 License

This is a personal portfolio project.

---

**Built with ❤️ by Tejas Sonkusare**

