import { useState } from 'react';
import { Heart, Sparkles, BookOpen, Quote, Award } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { TeacherInfo } from '../types';
import { playCelebrationChime } from '../utils/audio';
import SmartImage from './SmartImage';

interface HeroProps {
  teacher: TeacherInfo;
}

export default function HeroTeacherSection({ teacher }: HeroProps) {
  const [likesCount, setLikesCount] = useState(108);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
      playCelebrationChime();
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#EA580C', '#FEF08A', '#F43F5E']
      });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-8 sm:pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient sunset glow blobs */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-yellow-100/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-2 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-yellow-200/30 via-amber-100/20 to-rose-100/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Celebration Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300/80 text-amber-900 shadow-xs text-[11px] sm:text-sm font-semibold tracking-wide text-center">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 animate-pulse shrink-0" />
            <span>5th Sept • National Teachers' Day Special</span>
            <span className="hidden sm:inline text-amber-500">•</span>
            <span className="hidden sm:inline text-amber-800">From Your Class With Love</span>
          </div>
        </motion.div>

        {/* Main Two-Column Layout: Text & Words on one side, Her Photo on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Words Column */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="space-y-2.5 sm:space-y-3">
              <span className="font-handwriting text-xl sm:text-3xl text-orange-600 font-bold tracking-wide block">
                To Our Dearest Guide & Mentor ✨
              </span>
              <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-amber-950 tracking-tight leading-[1.15]">
                Happy Teachers' Day,{' '}
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent underline decoration-orange-300/60 decoration-wavy decoration-2">
                  Bhavya Ma'am!
                </span>
              </h1>
              <p className="text-xs sm:text-base font-medium text-amber-800/80 italic">
                “A great teacher takes a hand, opens a mind, and touches a heart forever.”
              </p>
            </div>

            {/* Dedication Card with Warm Words */}
            <div className="relative p-5 sm:p-7 rounded-2xl bg-white/95 border border-amber-200/90 shadow-lg shadow-amber-900/5 backdrop-blur-xs">
              <Quote className="absolute top-4 right-4 w-8 sm:w-10 h-8 sm:h-10 text-amber-300/50 -scale-x-100 pointer-events-none" />
              
              <div className="space-y-3.5 sm:space-y-4 text-amber-950 text-sm sm:text-lg leading-relaxed relative z-10">
                {teacher.dedicationText.map((paragraph, index) => (
                  <p key={index} className="text-amber-900/90 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Class Badges / Superpowers */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-amber-200/60">
                <p className="text-xs font-semibold text-amber-800/75 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-orange-600" />
                  What Makes You So Special To Us:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {teacher.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs hover:bg-amber-100 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Actions - Mobile Friendly full width / flex */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={handleLike}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-sm active:scale-95 ${
                  hasLiked 
                    ? 'bg-rose-500 text-white shadow-rose-500/25 scale-102' 
                    : 'bg-white text-amber-900 hover:bg-rose-50 hover:text-rose-800 border border-amber-300/80'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white text-white' : 'text-rose-600'}`} />
                <span>{hasLiked ? 'Love Sent to Ma\'am!' : 'Send Love to Bhavya Ma\'am'}</span>
                <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-black/5">
                  {likesCount}
                </span>
              </button>

              <a
                href="#memories"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/25 transition-all hover:scale-102 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Class Memories 📸</span>
              </a>
            </div>
          </motion.div>

          {/* Right / Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center mt-4 lg:mt-0"
          >
            <div className="relative group w-full max-w-xs sm:max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/60 via-orange-400/50 to-yellow-300/60 rounded-3xl blur-md opacity-40 group-hover:opacity-65 transition-opacity" />

              {/* Main Photo Card Container with Polaroid / Portrait styling */}
              <div className="relative bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-amber-900/10 border-2 border-amber-200/80">
                
                {/* Washi Tape Accent at Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-200/80 border border-amber-300/70 shadow-xs rotate-[-1.5deg] rounded-xs backdrop-blur-xs flex items-center justify-center pointer-events-none z-10">
                  <span className="text-[10px] font-handwriting text-amber-900 font-bold tracking-widest uppercase">
                    Our Star Teacher ⭐
                  </span>
                </div>

                {/* Portrait Image */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-amber-50">
                  <SmartImage
                    src={teacher.photoUrl}
                    alt="Bhavya Ma'am"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gentle warm gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/75 via-transparent to-transparent opacity-85" />

                  {/* Name badge overlaid at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="px-2.5 py-0.5 rounded-md bg-orange-600/90 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase backdrop-blur-xs mb-1 inline-block">
                      {teacher.subtitle}
                    </span>
                    <h3 className="font-serif-display text-lg sm:text-2xl font-bold drop-shadow-md">
                      {teacher.name}
                    </h3>
                  </div>
                </div>

                {/* Caption / Note Under Her Photo */}
                <div className="pt-3 px-2 text-center">
                  <p className="font-handwriting text-lg sm:text-2xl text-amber-900 font-semibold leading-snug">
                    "Thank you for lighting up our world, Bhavya Ma'am!" 🌻
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-700/80 mt-1 font-medium">
                    With eternal admiration and gratitude from all of us ✨
                  </p>
                </div>
              </div>

              {/* Floating decorative sticker */}
              <div className="absolute -bottom-3 left-2 sm:-left-4 bg-gradient-to-br from-amber-100 to-orange-200 border border-amber-300 px-3 py-1.5 rounded-full shadow-md rotate-[-5deg] flex items-center gap-1.5 z-10 pointer-events-none">
                <span className="text-sm sm:text-base">🌼</span>
                <span className="text-[11px] sm:text-xs font-bold text-amber-950">Happy Teachers' Day!</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
