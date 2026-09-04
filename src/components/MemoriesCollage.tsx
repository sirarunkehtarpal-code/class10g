import { useState, useEffect, type MouseEvent } from 'react';
import { Maximize2, Heart, Sparkles, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';
import { MemoryPhoto } from '../types';
import { playSoftTink } from '../utils/audio';
import SmartImage from './SmartImage';

interface MemoriesCollageProps {
  memories: MemoryPhoto[];
  onOpenLightbox: (index: number) => void;
  onLikeMemory: (id: string) => void;
}

export default function MemoriesCollage({
  memories,
  onOpenLightbox,
  onLikeMemory,
}: MemoriesCollageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const filteredMemories = activeFilter === 'all'
    ? memories
    : memories.filter(m => m.category === activeFilter);

  const handleLike = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    playSoftTink();
    onLikeMemory(id);
  };

  return (
    <section id="memories" className="py-14 sm:py-16 md:py-24 bg-gradient-to-b from-white via-[#FCFAF7] to-white relative overflow-hidden border-t border-amber-200/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Class Scrapbook & Memories</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight">
            Golden Memories We Shared
          </h2>
          <p className="mt-3 text-amber-900/80 text-sm sm:text-lg px-2">
            From classroom laughter to festive celebrations, each moment with you, Bhavya Ma'am, holds a special place in our hearts.
          </p>

          {/* Filter Pills: swipeable on mobile, wrapped and centered on desktop */}
          <div className="mt-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-4 sm:mx-0 sm:flex-wrap">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              All Memories ({memories.length})
            </button>
            <button
              onClick={() => setActiveFilter('potluck')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'potluck'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              🍲 Potluck Day
            </button>
            <button
              onClick={() => setActiveFilter('saraswati_pooja')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'saraswati_pooja'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              🪔 Saraswati Pooja
            </button>
            <button
              onClick={() => setActiveFilter('fete_camp')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'fete_camp'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              🎪 Fete Game Camp
            </button>
            <button
              onClick={() => setActiveFilter('special_moments')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'special_moments'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              ⭐ Rishabh & Ma'am
            </button>
            <button
              onClick={() => setActiveFilter('classroom')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeFilter === 'classroom'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              🗺️ Geography Lessons
            </button>
          </div>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-2 sm:pt-4">
          {filteredMemories.map((memory, index) => {
            // On mobile phones, use straight orientation to prevent horizontal scroll clipping
            const rotStyle = {
              transform: isMobile ? 'none' : `rotate(${memory.rotation}deg)`,
            };

            // Find original index in unfiltered memories for lightbox
            const originalIndex = memories.findIndex(m => m.id === memory.id);

            return (
              <motion.div
                key={memory.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={rotStyle}
                className="group relative transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.03] hover:rotate-0 hover:z-20"
              >
                {/* Washi tape on top edge */}
                <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-amber-200/80 border border-amber-300/60 shadow-2xs rotate-[-1deg] rounded-xs backdrop-blur-xs z-10 pointer-events-none" />

                {/* Polaroid Frame */}
                <div 
                  className="bg-white p-3 sm:p-3.5 pb-4 sm:pb-5 rounded-lg shadow-md hover:shadow-xl shadow-amber-900/10 border border-amber-200/70 transition-shadow cursor-pointer"
                  onClick={() => onOpenLightbox(originalIndex >= 0 ? originalIndex : index)}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-amber-50">
                    <SmartImage
                      src={memory.imageUrl}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Desktop Hover Overlay */}
                    <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
                      <div className="p-2.5 rounded-full bg-white/95 text-amber-900 shadow-md flex items-center gap-1.5 text-xs font-semibold">
                        <Maximize2 className="w-4 h-4" />
                        <span>View Photo</span>
                      </div>
                    </div>

                    {/* Mobile Tap Cue */}
                    <div className="sm:hidden absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/50 text-white text-[10px] font-medium backdrop-blur-xs flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" />
                      <span>Tap to zoom</span>
                    </div>

                    {/* Occasion Badge */}
                    <span className="absolute top-2 sm:top-2.5 left-2 sm:left-2.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/95 text-amber-950 shadow-xs backdrop-blur-xs border border-amber-200/80">
                      {memory.dateTag}
                    </span>
                  </div>

                  {/* Caption Area (Handwritten & Warm) */}
                  <div className="pt-3 sm:pt-4 px-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-display font-bold text-base sm:text-lg text-amber-950 leading-snug">
                        {memory.title}
                      </h3>
                      <button
                        onClick={(e) => handleLike(e, memory.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors border border-rose-200/60 shrink-0"
                        title="Like this memory"
                      >
                        <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                        <span>{memory.likes}</span>
                      </button>
                    </div>

                    <p className="font-handwriting text-lg sm:text-xl text-amber-900 leading-snug">
                      "{memory.caption}"
                    </p>

                    <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-[11px] sm:text-xs text-amber-700/80">
                      <span className="font-medium">Class Special Moment</span>
                      <span className="text-amber-600/80 font-medium">Bhavya Ma'am's Class</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

