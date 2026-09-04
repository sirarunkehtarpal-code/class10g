import { useState } from 'react';
import { Heart, Sparkles, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ThankYouData } from '../types';
import { playCelebrationChime } from '../utils/audio';

interface ThankYouLetterProps {
  data: ThankYouData;
}

export default function ThankYouLetter({ data }: ThankYouLetterProps) {
  const [hasCheered, setHasCheered] = useState(false);
  const [cheerCount, setCheerCount] = useState(142);

  const handleClassCheer = () => {
    setCheerCount(prev => prev + 1);
    setHasCheered(true);
    playCelebrationChime();

    const sunsetColors = ['#F59E0B', '#EA580C', '#FEF08A', '#FB923C', '#F43F5E', '#D97706'];

    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.7 },
      colors: sunsetColors
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 70,
        origin: { x: 0.1, y: 0.8 },
        colors: sunsetColors
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 70,
        origin: { x: 0.9, y: 0.8 },
        colors: sunsetColors
      });
    }, 200);
  };

  return (
    <section id="thank-you" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#FCFAF7] to-white relative overflow-hidden border-t border-amber-200/50">
      {/* Warm sunset ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-amber-200/20 via-orange-200/20 to-yellow-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Parchment Letter Card */}
        <div className="relative p-5 sm:p-10 md:p-14 rounded-3xl bg-white border-2 border-amber-200/90 shadow-xl shadow-amber-950/5">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-amber-400/80 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-amber-400/80 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-amber-400/80 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-amber-400/80 rounded-br-lg pointer-events-none" />

          {/* Letter Seal / Stamp Top Center */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 border-4 border-amber-100 shadow-md flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2 mb-6 sm:mb-8">
            <span className="font-handwriting text-xl sm:text-3xl text-orange-600 font-bold block">
              From the Bottom of Our Hearts
            </span>
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight">
              {data.title}
            </h2>
            <p className="text-xs sm:text-base font-medium text-amber-800/80 italic max-w-xl mx-auto px-2">
              {data.lead}
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 sm:mb-8" />

          {/* Letter Body Text */}
          <div className="space-y-4 sm:space-y-5 text-amber-950 text-sm sm:text-lg leading-relaxed font-normal">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-amber-900/95 first-letter:text-xl sm:first-letter:text-2xl first-letter:font-serif-display first-letter:font-bold first-letter:text-orange-700">
                {p}
              </p>
            ))}
          </div>

          {/* Signoff Section */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-amber-200/80">
            <p className="font-handwriting text-xl sm:text-3xl text-amber-900 font-bold mb-1 sm:mb-2">
              {data.signOff}
            </p>
            <p className="font-serif-display text-lg sm:text-2xl font-extrabold text-orange-600">
              {data.classBatch}
            </p>

            {/* Classmates Signature Chips */}
            <div className="mt-5 sm:mt-6">
              <p className="text-[11px] sm:text-xs font-bold text-amber-900 uppercase tracking-wider mb-2.5 sm:mb-3 flex items-center gap-2">
                <span>Signed with love by all {data.studentsList.length} students of our class:</span>
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {data.studentsList.map((name, idx) => (
                  <span
                    key={idx}
                    className="font-handwriting text-sm sm:text-lg px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-950 shadow-2xs hover:bg-amber-100 hover:border-amber-300 transition-all inline-block"
                  >
                    ✍️ {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cheering CTA */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs sm:text-sm font-semibold text-amber-950 block">
                Give Bhavya Ma'am a Standing Ovation! 👏
              </span>
              <span className="text-xs text-amber-700/80">
                {cheerCount} applause and flowers showered so far
              </span>
            </div>

            <button
              onClick={handleClassCheer}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-base text-white shadow-lg transition-all active:scale-95 ${
                hasCheered 
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 scale-102 shadow-orange-500/30' 
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-orange-500/25'
              }`}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
              <span>{hasCheered ? 'Cheered with Flowers! 🌸' : 'Send Standing Ovation & Flowers! 💐'}</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-amber-800/70 space-y-1">
          <p className="font-handwriting text-xl text-amber-900 font-semibold">
            "Once a teacher, forever a guiding star." ✨
          </p>
          <p>Created with boundless gratitude for Bhavya Ma'am on Teachers' Day 2026</p>
        </div>

      </div>
    </section>
  );
}
