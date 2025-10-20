# Happy Birthday Website - Customization Guide

## 🎉 Welcome to Your Romantic Birthday Website!

This is a fully responsive, interactive birthday website built with Next.js, Tailwind CSS, and Framer Motion. Follow this guide to customize it with your personal content.

## 📝 Quick Customization Checklist

### 1. Personal Information
- [ ] Replace `[Her Name]` with the actual name in all files
- [ ] Update quiz questions and answers in `/src/app/page.tsx`
- [ ] Customize the "How We Met" story in `/src/app/story/page.tsx`

### 2. Photos & Media
- [ ] Add your photos to `/public/images/` directory
- [ ] Replace placeholder image paths in the story page
- [ ] Add background music to `/public/audio/background-music.mp3`
- [ ] Record and add voice messages to audio files

### 3. Personal Content
- [ ] Update love reasons in the floating hearts section
- [ ] Customize memory captions
- [ ] Write your personal message
- [ ] Update the timeline story

## 🎨 Customization Details

### Quiz Questions (src/app/page.tsx)
Update the `questions` array with your personal questions:
```typescript
const questions: Question[] = [
  {
    id: 1,
    question: "What exact words did I whisper to you the first time I hugged you?",
    answer: "Your actual answer here",
    hint: "Your hint here"
  },
  // Add more questions...
];
```

### Photos (src/app/story/page.tsx)
Update the `memories` array with your photos:
```typescript
const memories = [
  {
    id: 1,
    src: '/images/your-photo-1.jpg',
    alt: 'First meeting',
    caption: 'Your caption here'
  },
  // Add more memories...
];
```

### Love Reasons (src/app/story/page.tsx)
Update the `loveReasons` array:
```typescript
const loveReasons = [
  { reason: 'Your beautiful smile 😍', emoji: '😍', position: { x: 20, y: 30 } },
  // Add more reasons...
];
```

### Audio Files
Replace these placeholder files with your actual audio:
- `/public/audio/background-music.mp3` - Soft romantic music (30% volume)
- `/public/audio/voice-snippet.mp3` - Short voice message (100% volume)
- `/public/audio/full-voice-message.mp3` - Complete voice message (100% volume)

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📱 Features Included

✅ **Quiz Gate** - Personal questions to unlock the story  
✅ **Hero Section** - Neon glowing text with floating hearts  
✅ **Timeline** - "How We Met" story with photos  
✅ **Memory Gallery** - Auto-sliding photo carousel  
✅ **Interactive Hearts** - Clickable hearts with love reasons  
✅ **Personal Message** - Neon text with audio snippet  
✅ **Birthday Celebration** - Fireworks and confetti  
✅ **Voice Message** - Full audio message at the end  
✅ **Responsive Design** - Works on all devices  
✅ **Smooth Animations** - Framer Motion throughout  

## 🎨 Color Palette
- Primary: Pink (#ff69b4)
- Secondary: Purple (#ff1493)
- Accent: Light Pink (#ffc0cb)
- Background: Soft gradients

## 📁 File Structure
```
src/
├── app/
│   ├── page.tsx          # Quiz gate
│   ├── story/
│   │   └── page.tsx      # Main story page
│   └── globals.css       # Global styles
├── components/
│   ├── AudioPlayer.tsx   # Audio controls
│   ├── Fireworks.tsx     # Confetti animation
│   ├── FloatingHearts.tsx # Background hearts
│   ├── HeartReveal.tsx   # Interactive hearts
│   ├── MemoryGallery.tsx # Photo carousel
│   └── NeonText.tsx      # Glowing text
public/
├── audio/               # Audio files
└── images/              # Photo files
```

## 💡 Tips for Best Results

1. **Photos**: Use high-quality images (400x500px or similar)
2. **Audio**: Keep background music soft and romantic
3. **Questions**: Make quiz questions personal but not too difficult
4. **Content**: Write from the heart - authenticity is key
5. **Testing**: Test on both mobile and desktop devices

## 🎁 Surprise Elements

- Floating hearts animation throughout
- Smooth scroll animations
- Interactive elements that respond to clicks
- Fireworks on birthday section
- Audio controls for background music
- Responsive design for all screen sizes

## 🔧 Technical Notes

- Built with Next.js 14 and App Router
- Styled with Tailwind CSS
- Animations with Framer Motion
- Audio handling with HTML5 Audio API
- Confetti effects with react-confetti
- Fully responsive and mobile-optimized

## 💖 Final Touch

Don't forget to:
- Test all interactive elements
- Check audio playback on different devices
- Verify all photos load correctly
- Test the quiz functionality
- Ensure smooth scrolling on mobile

**Happy customizing! This will be a beautiful surprise for your special someone! 💕**

