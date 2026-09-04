import { useState } from 'react';
import { Sparkles, Music, VolumeX, Heart, Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationChime } from '../utils/audio';

export default function Navbar() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const triggerCelebration = () => {
    playCelebrationChime();
    
    // Warm sunset confetti palette (golden yellow, warm orange, amber, coral, marigold)
    const colors = ['#F59E0B', '#EA580C', '#FBBF24', '#F43F5E', '#FEF08A', '#FB923C'];

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.15 },
      colors,
      ticks: 200,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.4 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.4 },
        colors,
      });
    }, 250);
  };

  const toggleSound = () => {
    playCelebrationChime();
    setIsPlayingMusic(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-amber-200/60 transition-all shadow-xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Title */}
        <a href="#hero" onClick={closeMobileMenu} className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white/90" />
          </div>
          <div>
            <span className="font-serif-display font-bold text-base sm:text-xl text-amber-950 tracking-tight block leading-tight">
              Bhavya Ma'am
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-amber-700/80 uppercase tracking-wider block">
              Teachers' Day 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-900/80">
          <a href="#hero" className="hover:text-amber-600 transition-colors">Dedicated To You</a>
          <a href="#memories" className="hover:text-amber-600 transition-colors">Class Memories</a>
          <a href="#classmates" className="hover:text-amber-600 transition-colors">Classmate Words</a>
          <a href="#thank-you" className="hover:text-amber-600 transition-colors">Whole Class Note</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={toggleSound}
            title={isPlayingMusic ? "Chimes playing" : "Play warm celebration chime"}
            className="p-2 sm:p-2 rounded-full text-amber-800 bg-amber-100/60 hover:bg-amber-200/70 transition-colors border border-amber-300/50"
            aria-label="Toggle chime melody"
          >
            {isPlayingMusic ? <Music className="w-4 h-4 text-orange-600 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={triggerCelebration}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Celebrate! 🎉</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-lg text-amber-900 hover:bg-amber-100 transition-colors"
            aria-label="Open mobile navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-amber-200/80 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <a
            href="#hero"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-950 hover:bg-amber-50 active:bg-amber-100"
          >
            <span>✨</span> Dedicated To You
          </a>
          <a
            href="#memories"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-950 hover:bg-amber-50 active:bg-amber-100"
          >
            <span>📸</span> Class Memories & Photos
          </a>
          <a
            href="#classmates"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-950 hover:bg-amber-50 active:bg-amber-100"
          >
            <span>💬</span> Classmate Words & Quotes
          </a>
          <a
            href="#thank-you"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-950 hover:bg-amber-50 active:bg-amber-100"
          >
            <span>💌</span> Whole Class Note & Signatures
          </a>
        </div>
      )}
    </header>
  );
}

