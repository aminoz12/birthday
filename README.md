# 💖 Happy Birthday [Her Name] 💖

A romantic, interactive birthday website built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🔐 Quiz Gate**: Personal questions to unlock the story
- **💫 Hero Section**: Neon glowing text with floating hearts
- **📖 Timeline**: "How We Met" story with smooth animations
- **📸 Memory Gallery**: Auto-sliding photo carousel
- **💕 Interactive Hearts**: Clickable hearts revealing love reasons
- **💌 Personal Message**: Neon text with audio snippet
- **🎂 Birthday Celebration**: Fireworks and confetti animations
- **🎤 Voice Message**: Full audio message at the end
- **📱 Responsive Design**: Works perfectly on all devices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 🎨 Customization

1. **Replace `[Her Name]`** with the actual name throughout the code
2. **Update quiz questions** in `src/app/page.tsx`
3. **Add your photos** to `public/images/`
4. **Record voice messages** and add to `public/audio/`
5. **Customize the story** in `src/app/story/page.tsx`

See `CUSTOMIZATION.md` for detailed instructions.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Quiz gate
│   ├── story/page.tsx        # Main story page
│   ├── api/placeholder/      # Placeholder image API
│   └── globals.css           # Global styles
├── components/
│   ├── AudioPlayer.tsx       # Audio controls
│   ├── Fireworks.tsx         # Confetti animation
│   ├── FloatingHearts.tsx    # Background hearts
│   ├── HeartReveal.tsx       # Interactive hearts
│   ├── MemoryGallery.tsx     # Photo carousel
│   └── NeonText.tsx          # Glowing text
public/
├── audio/                    # Audio files
└── images/                   # Photo files
```

## 🎯 Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety
- **Lucide React** - Icons
- **React Confetti** - Confetti effects

## 💝 Special Features

- Smooth scroll animations
- Floating hearts throughout
- Interactive elements
- Audio controls
- Responsive design
- Custom neon text effects
- Fireworks animations
- Memory gallery with auto-slide

## 🎁 Ready to Deploy

This website is ready to deploy to Vercel, Netlify, or any other hosting platform. Just push your code and deploy!

**Perfect for creating a magical birthday surprise! 💖**