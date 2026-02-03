# 🎬 ClipMaker - Free Video Clip Maker

A free, open-source web application similar to klap.app for creating short-form clips from long-form videos. Completely free, no authentication required, and ready to deploy on Netlify.

## ✨ Features

- **Video Upload & YouTube Support** - Upload local videos or paste YouTube URLs
- **Auto Clip Detection** - AI-powered detection of engaging clip segments
- **Manual Editing** - Interactive timeline for precise clip trimming
- **Multi-format Export** - Export as MP4, WebM, MOV, or MKV
- **Quality Options** - Choose from 360p to 1080p resolution
- **Dark/Light Theme** - Full theme support with persistent storage
- **Completely Free** - No paywalls, no limitations, no authentication
- **Offline Support** - Works offline with client-side processing

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Build Tool**: Vite (lightning-fast development)
- **Video Processing**: FFmpeg.js (browser-based)
- **Backend**: Netlify Functions (serverless)
- **Deployment**: Netlify (free tier compatible)

## 📋 Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Git account (for GitHub deployment)

## 🚀 Getting Started

### 1. Clone or Create Project

\`\`\`bash
git clone <your-repo-url>
cd clipmaker-app
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment (Optional)

\`\`\`bash
cp .env.example .env
# Add your YouTube API key if needed
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

The app will be available at \`http://localhost:3000\`

### 5. Build for Production

\`\`\`bash
npm run build
\`\`\`

## 🌐 Deploy to Netlify

### Option A: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings should auto-detect:
   - **Build command**: \`npm run build\`
   - **Publish directory**: \`dist\`
6. Click "Deploy site"

### Option B: Netlify CLI

\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod
\`\`\`

### Option C: Manual Upload

\`\`\`bash
npm run build
# Drag and drop the 'dist' folder to Netlify
\`\`\`

## 📁 Project Structure

\`\`\`
clipmaker-app/
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   ├── main.tsx            # Entry point
│   ├── App.tsx             # Root component
│   └── index.css           # Global styles
├── public/                 # Static assets
├── netlify/
│   └── functions/          # Serverless functions
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config
├── netlify.toml            # Netlify configuration
├── package.json            # Dependencies
└── README.md               # This file
\`\`\`

## 🎯 How to Use

1. **Upload** - Upload a video file or paste a YouTube URL
2. **Detect** - AI automatically detects engaging clip segments
3. **Edit** - Fine-tune clips with manual timeline editor
4. **Export** - Choose format and quality, then download

## 🔧 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build locally
- \`npm run functions\` - Build Netlify functions

## 📦 Supported Formats

**Upload**: MP4, WebM, MOV, MKV, AVI  
**Export**: MP4, WebM, MOV, MKV

**Quality Options**: 360p, 720p, 1080p

## 🎨 Customization

### Change App Name
Edit \`.env\`:
\`\`\`
VITE_APP_NAME=YourAppName
\`\`\`

### Modify Colors
Edit \`tailwind.config.js\`:
\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
\`\`\`

## 🐛 Troubleshooting

**Build fails on Netlify**
- Clear build cache in Netlify settings
- Ensure Node.js version is 16+

**Video won't upload**
- Check file size (max 500MB by default)
- Verify format is supported
- Check browser console for errors

**FFmpeg errors**
- Browser may be blocking WebWorkers
- Try a different browser
- Check if video codec is supported

## 📄 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 License

MIT License - Feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📞 Support

For issues and questions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include browser console logs

---

**Made with ❤️ for creators**
