'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonText from '@/components/NeonText';
import MemoryGallery from '@/components/MemoryGallery';
import AudioPlayer from '@/components/AudioPlayer';
import Fireworks from '@/components/Fireworks';
import { Heart, Sparkles, Camera, MessageCircle, Cake } from 'lucide-react';

// All 40 WhatsApp images for our best memories
const memories = [
  {
    id: 1,
    src: '/WhatsApp Image 2025-10-20 at 00.22.18 (1).jpeg',
    alt: 'Beautiful memory 1',
    caption: 'That day was magical ✨'
  },
  {
    id: 2,
    src: '/WhatsApp Image 2025-10-20 at 00.22.18.jpeg',
    alt: 'Beautiful memory 2',
    caption: 'Our first adventure together 💕'
  },
  {
    id: 3,
    src: '/WhatsApp Image 2025-10-20 at 00.22.26 (1).jpeg',
    alt: 'Beautiful memory 3',
    caption: 'Celebrating our love 🎉'
  },
  {
    id: 4,
    src: '/WhatsApp Image 2025-10-20 at 00.22.26 (2).jpeg',
    alt: 'Beautiful memory 4',
    caption: 'Every moment with you is precious 💖'
  },
  {
    id: 5,
    src: '/WhatsApp Image 2025-10-20 at 00.22.26 (3).jpeg',
    alt: 'Beautiful memory 5',
    caption: 'You make everything beautiful 🌟'
  },
  {
    id: 6,
    src: '/WhatsApp Image 2025-10-20 at 00.22.26 (4).jpeg',
    alt: 'Beautiful memory 6',
    caption: 'My heart belongs to you 💕'
  },
  {
    id: 7,
    src: '/WhatsApp Image 2025-10-20 at 00.22.26.jpeg',
    alt: 'Beautiful memory 7',
    caption: 'Perfect moments together ✨'
  },
  {
    id: 8,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (1).jpeg',
    alt: 'Beautiful memory 8',
    caption: 'You are my sunshine ☀️'
  },
  {
    id: 9,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (2).jpeg',
    alt: 'Beautiful memory 9',
    caption: 'Forever and always 💖'
  },
  {
    id: 10,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (3).jpeg',
    alt: 'Beautiful memory 10',
    caption: 'You light up my world 🌟'
  },
  {
    id: 11,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (4).jpeg',
    alt: 'Beautiful memory 11',
    caption: 'My beautiful angel 👼'
  },
  {
    id: 12,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (5).jpeg',
    alt: 'Beautiful memory 12',
    caption: 'You are my everything 💕'
  },
  {
    id: 13,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (6).jpeg',
    alt: 'Beautiful memory 13',
    caption: 'Sweet memories together 🍯'
  },
  {
    id: 14,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (7).jpeg',
    alt: 'Beautiful memory 14',
    caption: 'My precious love 💖'
  },
  {
    id: 15,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27 (8).jpeg',
    alt: 'Beautiful memory 15',
    caption: 'You are perfect in every way ✨'
  },
  {
    id: 16,
    src: '/WhatsApp Image 2025-10-20 at 00.22.27.jpeg',
    alt: 'Beautiful memory 16',
    caption: 'My heart skips a beat for you 💓'
  },
  {
    id: 17,
    src: '/WhatsApp Image 2025-10-20 at 00.22.28 (1).jpeg',
    alt: 'Beautiful memory 17',
    caption: 'You are my dream come true 🌈'
  },
  {
    id: 18,
    src: '/WhatsApp Image 2025-10-20 at 00.22.28 (2).jpeg',
    alt: 'Beautiful memory 18',
    caption: 'My beautiful queen 👑'
  },
  {
    id: 19,
    src: '/WhatsApp Image 2025-10-20 at 00.22.28 (3).jpeg',
    alt: 'Beautiful memory 19',
    caption: 'You make me the happiest 💕'
  },
  {
    id: 20,
    src: '/WhatsApp Image 2025-10-20 at 00.22.28 (4).jpeg',
    alt: 'Beautiful memory 20',
    caption: 'My sweetest treasure 💎'
  },
  {
    id: 21,
    src: '/WhatsApp Image 2025-10-20 at 00.22.28.jpeg',
    alt: 'Beautiful memory 21',
    caption: 'You are my world 🌍'
  },
  {
    id: 22,
    src: '/WhatsApp Image 2025-10-20 at 00.22.29 (1).jpeg',
    alt: 'Beautiful memory 22',
    caption: 'My beautiful star ⭐'
  },
  {
    id: 23,
    src: '/WhatsApp Image 2025-10-20 at 00.22.29 (2).jpeg',
    alt: 'Beautiful memory 23',
    caption: 'You are my happiness 😊'
  },
  {
    id: 24,
    src: '/WhatsApp Image 2025-10-20 at 00.22.29 (3).jpeg',
    alt: 'Beautiful memory 24',
    caption: 'My lovely princess 👸'
  },
  {
    id: 25,
    src: '/WhatsApp Image 2025-10-20 at 00.22.29.jpeg',
    alt: 'Beautiful memory 25',
    caption: 'You are my miracle ✨'
  },
  {
    id: 26,
    src: '/WhatsApp Image 2025-10-20 at 00.22.30 (1).jpeg',
    alt: 'Beautiful memory 26',
    caption: 'My beautiful flower 🌸'
  },
  {
    id: 27,
    src: '/WhatsApp Image 2025-10-20 at 00.22.30 (2).jpeg',
    alt: 'Beautiful memory 27',
    caption: 'You are my sunshine ☀️'
  },
  {
    id: 28,
    src: '/WhatsApp Image 2025-10-20 at 00.22.30 (3).jpeg',
    alt: 'Beautiful memory 28',
    caption: 'My precious gem 💎'
  },
  {
    id: 29,
    src: '/WhatsApp Image 2025-10-20 at 00.22.30 (4).jpeg',
    alt: 'Beautiful memory 29',
    caption: 'You are my heart 💖'
  },
  {
    id: 30,
    src: '/WhatsApp Image 2025-10-20 at 00.22.30.jpeg',
    alt: 'Beautiful memory 30',
    caption: 'My beautiful angel 👼'
  },
  {
    id: 31,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (1).jpeg',
    alt: 'Beautiful memory 31',
    caption: 'You are my everything 💕'
  },
  {
    id: 32,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (2).jpeg',
    alt: 'Beautiful memory 32',
    caption: 'My sweetest love 💖'
  },
  {
    id: 33,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (3).jpeg',
    alt: 'Beautiful memory 33',
    caption: 'You are perfect ✨'
  },
  {
    id: 34,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (4).jpeg',
    alt: 'Beautiful memory 34',
    caption: 'My beautiful queen 👑'
  },
  {
    id: 35,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (5).jpeg',
    alt: 'Beautiful memory 35',
    caption: 'You are my dream 🌈'
  },
  {
    id: 36,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (6).jpeg',
    alt: 'Beautiful memory 36',
    caption: 'My precious treasure 💎'
  },
  {
    id: 37,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31 (7).jpeg',
    alt: 'Beautiful memory 37',
    caption: 'You are my world 🌍'
  },
  {
    id: 38,
    src: '/WhatsApp Image 2025-10-20 at 00.22.31.jpeg',
    alt: 'Beautiful memory 38',
    caption: 'My beautiful star ⭐'
  },
  {
    id: 39,
    src: '/WhatsApp Image 2025-10-20 at 00.22.32 (1).jpeg',
    alt: 'Beautiful memory 39',
    caption: 'You are my happiness 😊'
  },
  {
    id: 40,
    src: '/WhatsApp Image 2025-10-20 at 00.22.32.jpeg',
    alt: 'Beautiful memory 40',
    caption: 'My lovely princess 👸'
  }
];


export default function StoryPage() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showVoiceMessage, setShowVoiceMessage] = useState(false);
  const [backgroundMusicVolume, setBackgroundMusicVolume] = useState(0.3);
  const [heroVoiceStarted, setHeroVoiceStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const handleBirthdayClick = () => {
    setShowFireworks(true);
    // Stop background music
    const backgroundMusic = document.getElementById('background-music') as HTMLAudioElement;
    if (backgroundMusic) {
      backgroundMusic.pause();
    }
    
    // Play birthday voice
    const birthdayVoice = document.getElementById('birthday-audio') as HTMLAudioElement;
    if (birthdayVoice) {
      birthdayVoice.volume = 1.0;
      birthdayVoice.play().catch(console.error);
    }
  };

  const handleGiftClick = () => {
    setShowGift(true);
  };

  const handleVoiceMessageStart = () => {
    // Lower background music to 20% when voice starts
    setBackgroundMusicVolume(0.2);
  };

  const handleVoiceMessageEnd = () => {
    setShowVoiceMessage(false);
    // Return background music to normal volume
    setBackgroundMusicVolume(0.3);
  };

  const handleBirthdayVoiceEnd = () => {
    // Resume background music when birthday voice ends
    const backgroundMusic = document.getElementById('background-music') as HTMLAudioElement;
    if (backgroundMusic) {
      backgroundMusic.volume = 0.3;
      backgroundMusic.play().catch(console.error);
    }
  };

  const handleVoiceMessageClick = () => {
    setShowVoiceMessage(true);
    // Lower background music to 50% when voice starts
    setBackgroundMusicVolume(0.15);
  };


  // Effect to control background music volume
  useEffect(() => {
    const backgroundMusic = document.getElementById('background-music') as HTMLAudioElement;
    if (backgroundMusic) {
      backgroundMusic.volume = backgroundMusicVolume;
    }
  }, [backgroundMusicVolume]);

  // Effect to start background music after user interaction
  useEffect(() => {
    const startBackgroundMusic = () => {
      const backgroundMusic = document.getElementById('background-music') as HTMLAudioElement;
      if (backgroundMusic) {
        backgroundMusic.volume = 0.3; // 30% volume
        backgroundMusic.play().catch(console.error);
      }
      // Remove event listeners after first interaction
      document.removeEventListener('click', startBackgroundMusic);
      document.removeEventListener('touchstart', startBackgroundMusic);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', startBackgroundMusic);
    document.addEventListener('touchstart', startBackgroundMusic);

    return () => {
      document.removeEventListener('click', startBackgroundMusic);
      document.removeEventListener('touchstart', startBackgroundMusic);
    };
  }, []);

  // Effect to ensure video keeps playing
  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      // Force play immediately
      const playVideo = async () => {
        try {
          video.currentTime = 0;
          await video.play();
        } catch (error) {
          console.log('Video play failed, retrying...', error);
          setTimeout(playVideo, 1000);
        }
      };

      // Start playing
      playVideo();

      // Set up event listeners
      const handleVideoEnd = () => {
        video.currentTime = 0;
        video.play().catch(console.error);
      };

      const handleVideoPause = () => {
        video.play().catch(console.error);
      };

      const handleVideoError = () => {
        console.log('Video error, restarting...');
        setTimeout(() => {
          video.load();
          video.play().catch(console.error);
        }, 1000);
      };

      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('pause', handleVideoPause);
      video.addEventListener('error', handleVideoError);

      // Periodic check to ensure it's playing
      const checkInterval = setInterval(() => {
        if (video.paused || video.ended) {
          video.play().catch(console.error);
        }
      }, 3000);

      return () => {
        clearInterval(checkInterval);
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('pause', handleVideoPause);
        video.removeEventListener('error', handleVideoError);
      };
    }
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            id="hero-video"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
            preload="auto"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-pink-200/40" />
        </div>
        
        {/* Hidden voice message that plays automatically */}
        <div style={{ display: 'none' }}>
          <audio id="hero-voice" loop>
            <source src="/WhatsApp Ptt 2025-10-20 at 01.16.56.ogg" type="audio/ogg" />
          </audio>
        </div>
        
        <div className="text-center z-10 relative px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white drop-shadow-2xl mb-4 px-4">
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4",
                    "0 0 30px #ff1493, 0 0 60px #ff1493, 0 0 90px #ff1493",
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="block leading-tight"
              >
                Happy Birthday,
              </motion.span>
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4",
                    "0 0 30px #ff1493, 0 0 60px #ff1493, 0 0 90px #ff1493",
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="block text-white leading-tight"
              >
                Smahanuna 💖
              </motion.span>
            </div>
          </motion.div>
          
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('how-we-met')?.scrollIntoView({ behavior: 'smooth' });
              // This click will also trigger the background music
            }}
          >
            🎵 Scroll to begin our story ❤️
          </motion.button>
          
          <motion.p
            className="text-sm text-white/80 mt-4 px-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💕 Click anywhere to start the romantic music 💕
          </motion.p>
          
        </div>

        {/* Background Music - Auto play without controls */}
        <div style={{ display: 'none' }}>
          <audio 
            id="background-music"
            autoPlay 
            loop 
            volume={backgroundMusicVolume}
          >
            <source src="/Lord Huron - The Night We Met (Official Audio).mp3" type="audio/mpeg" />
          </audio>
        </div>
      </section>

      {/* How We Met Section */}
      <section id="how-we-met" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              How We Met ❤️
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It was a beautiful Summer day at August when our paths first crossed. Seftnaalk Follow Yalala ou Tjebdti 3linaa , ou dernaalk story reply o zedti tjebdti elinaaaaaa , BUT ZNASNI NEVER GIVE UP HEHEHEHE, I knew there was something special about you. That's why i tested with ' Test Test Allah Allah ' And It worked !! NIAHAHAHAHA 🌝🌝.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Walakin Semhiliaa Rah nti li demandeti WhatsApp Ppppp .. Iwa ou tze3eeti Bayna knti Tay7aa iwa w 3tinaak nemraa w ta l9it rassi tay7 ela rasssssiii. Ou kanet A7sseen Ti7aaaaaa 🥰🥰 Iwa w lbaaa9i li Tariikh, Thank You for being Always with me! I love youuuuuuuuuu and i will be elways here for youu! i wish you a happy 23 birthdaaay with all the best and joy and all the success honey. 🥳🎉
                </p>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img 
                    src="/image12.jpeg" 
                    alt="First meeting" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 text-4xl"
                >
                  ✨
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Best Memories Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Best Memories 📸
            </h2>
            <p className="text-xl text-gray-600">
              Every moment with you is a treasure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MemoryGallery memories={memories} autoSlideInterval={2000} />
          </motion.div>
        </div>
      </section>


      {/* Little Baby Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-8">
              My Little Baby 👶💕
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {/* 4 Grid Baby Photos */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src="/baby1.jpeg" 
                      alt="Baby photo 1" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 right-2 text-lg"
                    >
                      👶
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src="/baby2.jpeg" 
                      alt="Baby photo 2" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-2 right-2 text-lg"
                    >
                      💕
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src="/baby3.jpeg" 
                      alt="Baby photo 3" 
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                      className="absolute top-2 right-2 text-lg"
                    >
                      ✨
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src="/baby4.jpeg" 
                      alt="Baby photo 4" 
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <motion.div
                      animate={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
                      className="absolute top-2 right-2 text-lg"
                    >
                      🌟
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    👶💖
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6">
                    You will always be my little baby
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    No matter how old you get, you'll always be my little baby. 
                    I'll always be here to protect you, love you, and take care of you. 
                    You're my precious little one, and that will never change.
                  </p>
                  
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl font-semibold text-pink-600"
                  >
                    Forever and always 💕
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-100 to-purple-100" data-voice-section>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl mb-8">
              <motion.div
                animate={{ 
                  textShadow: [
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4",
                    "0 0 30px #ff1493, 0 0 60px #ff1493, 0 0 90px #ff1493",
                    "0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 60px #ff69b4"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
              >
                Smahanuna, you are my everything ❤️
              </motion.div>
            </div>
            
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl mb-8"
            >
              ✨
            </motion.div>
            
            <motion.button
              onClick={handleVoiceMessageClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎤 Click to hear my voice message 🎤
            </motion.button>
            
            {showVoiceMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <AudioPlayer 
                  src="/WhatsApp Ptt 2025-10-20 at 01.16.56.ogg" 
                  volume={1.0}
                  autoplay={true}
                  showControls={true}
                  className="justify-center"
                  onEnded={handleVoiceMessageEnd}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Happy Birthday Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
              Happy Birthday 🎂
            </h2>
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-9xl mb-8 drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 105, 180, 0.5))'
              }}
            >
              🎂
            </motion.div>
            
            <motion.button
              onClick={handleBirthdayClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎉 Click for Surprise! 🎉
            </motion.button>
            
            {/* Hidden audio element for birthday voice */}
            <audio id="birthday-audio" style={{ display: 'none' }} onEnded={handleBirthdayVoiceEnd}>
              <source src="/signing.ogg" type="audio/ogg" />
            </audio>
            
          </motion.div>
        </div>
        
        <Fireworks isActive={showFireworks} onComplete={() => setShowFireworks(false)} />
      </section>

      {/* Gift Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-100 to-pink-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent mb-8">
              🎁 A Special Gift for You! 🎁
            </h2>
            
            <motion.button
              onClick={handleGiftClick}
              className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click Me! 🎁
            </motion.button>
            
            {showGift && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🎁
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Your Gift Card Details! 💳
                </h3>
                
                <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-6 mb-6">
                  <img 
                    src="/unnamed.jpg" 
                    alt="Gift Card" 
                    className="w-full max-w-md mx-auto rounded-xl shadow-lg mb-6"
                  />
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <p className="text-sm text-gray-600 mb-2">Card Number:</p>
                      <p className="text-2xl font-mono font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg">
                        1117917609106004507
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <p className="text-sm text-gray-600 mb-2">PIN:</p>
                      <p className="text-2xl font-mono font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg">
                        2488
                      </p>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl font-bold text-pink-600 mb-4"
                >
                  💖 Happy Birthday! 💖
                </motion.div>
                
                <p className="text-lg text-gray-600">
                  Sorry Ghir Shi Haja Sghiwraaa But I Promise One Day I Will Give You The World ! Happy Birthday My Lovely Girl . Daddy Loves Youuuu 🫠❤️
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer / Surprise End */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-200 to-purple-200 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
              Thank you for being you ❤️
            </h2>
            
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-8"
            >
              💖
            </motion.div>
            
            <p className="text-xl text-gray-600 mb-8">
              You make every day brighter just by being in it.
            </p>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}

