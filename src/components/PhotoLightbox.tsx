import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { MemoryPhoto } from '../types';
import SmartImage from './SmartImage';

interface PhotoLightboxProps {
  currentIndex: number;
  memories: MemoryPhoto[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onLike: (id: string) => void;
}

export default function PhotoLightbox({
  currentIndex,
  memories,
  onClose,
  onNavigate,
  onLike,
}: PhotoLightboxProps) {
  if (currentIndex < 0 || currentIndex >= memories.length) return null;

  const current = memories[currentIndex];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + memories.length) % memories.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % memories.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-amber-950/40 backdrop-blur-md p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200/90"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 border-b border-amber-200/70 bg-[#FFFDF9] shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-900 border border-orange-200">
              {current.dateTag}
            </span>
            <span className="text-xs text-amber-800 font-medium">
              Photo {currentIndex + 1} of {memories.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-amber-900 hover:bg-amber-100 transition-colors"
            title="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with navigation arrows */}
        <div className="relative bg-amber-50/50 flex-grow min-h-[220px] max-h-[48vh] sm:max-h-[58vh] flex items-center justify-center overflow-hidden p-2">
          <SmartImage
            src={current.imageUrl}
            alt={current.title}
            className="max-h-full w-auto max-w-full object-contain mx-auto rounded-md shadow-xs"
          />

          {/* Nav arrows */}
          {memories.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/95 hover:bg-white text-amber-950 shadow-md transition-all active:scale-95 hover:scale-105 border border-amber-200/80"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/95 hover:bg-white text-amber-950 shadow-md transition-all active:scale-95 hover:scale-105 border border-amber-200/80"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Footer info - scrollable if needed on very small devices */}
        <div className="p-3.5 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-amber-100 shrink-0 overflow-y-auto max-h-[28vh]">
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="font-serif-display font-bold text-base sm:text-xl text-amber-950">
              {current.title}
            </h3>
            <p className="font-handwriting text-base sm:text-xl text-amber-900 leading-snug">
              "{current.caption}"
            </p>
          </div>

          <button
            onClick={() => onLike(current.id)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 font-semibold text-xs shrink-0 self-start sm:self-auto transition-colors active:scale-95"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>{current.likes} Loves</span>
          </button>
        </div>
      </div>
    </div>
  );
}

