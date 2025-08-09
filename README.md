# BioOptimize Splash Page

A modern, responsive splash page for BioOptimize - a research peptide ecommerce company. Built with Next.js 14, TypeScript, and Tailwind CSS featuring a professional blue color scheme.

## Features

- 🎨 Modern gradient design with blue color scheme
- 📱 Fully responsive layout
- ⚡ Fast loading with Next.js 14
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 🚀 Vercel deployment ready
- ♿ Accessible design
- 🎯 Professional branding for research peptides

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Icons:** Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd biooptimize-splash
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your project on [Vercel](https://vercel.com):
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Deploy:
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. The static files will be generated in the \`out\` directory and can be deployed to any static hosting service.

## Project Structure

\`\`\`
BioOptimize/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main splash page component
├── public/                  # Static assets (add favicon, images here)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Dependencies and scripts
\`\`\`

## Customization

### Colors
The blue color scheme can be customized in \`tailwind.config.js\` and \`app/globals.css\`.

### Content
Update the content in \`app/page.tsx\` to modify:
- Company messaging
- Feature descriptions
- Contact information
- Call-to-action buttons

### Styling
- Global styles: \`app/globals.css\`
- Component styles: Tailwind classes in \`app/page.tsx\`
- Animations: CSS animations in \`app/globals.css\`

## Performance

- Optimized for Core Web Vitals
- Static generation for fast loading
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Responsive images ready

## SEO

- Optimized meta tags
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading speeds
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary to BioOptimize. All rights reserved.

## Support

For technical support or questions about deployment, please contact the development team.

---

**Note:** This is a research peptide company website. All products are for research use only.
