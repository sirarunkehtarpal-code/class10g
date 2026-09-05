import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroTeacherSection from './components/HeroTeacherSection';
import VideoSection from './components/VideoSection';
import MemoriesCollage from './components/MemoriesCollage';
import ClassmateQuotes from './components/ClassmateQuotes';
import ThankYouLetter from './components/ThankYouLetter';
import PhotoLightbox from './components/PhotoLightbox';

import { 
  initialTeacherInfo, 
  initialMemories, 
  initialClassmateQuotes, 
  initialThankYouData 
} from './data/initialContent';
import { MemoryPhoto, ClassmateQuote } from './types';

export default function App() {
  // Always use the latest content from initialContent so student names & photos update instantly
  const teacher = initialTeacherInfo;
  const [memories, setMemories] = useState<MemoryPhoto[]>(initialMemories);
  const [quotes, setQuotes] = useState<ClassmateQuote[]>(initialClassmateQuotes);

  // Lightbox state for full-screen photo viewing
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleLikeMemory = (id: string) => {
    setMemories(prev =>
      prev.map(m => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  const handleLikeQuote = (id: string) => {
    setQuotes(prev =>
      prev.map(q => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#2E2015] flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans">
      
      {/* Sunset golden atmosphere background lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Soft golden glow top right */}
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/50 via-orange-100/35 to-transparent rounded-full blur-3xl opacity-70" />
        {/* Soft warm glow center left */}
        <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-100/40 via-amber-100/30 to-transparent rounded-full blur-3xl opacity-60" />
        {/* Warm peach glow at bottom */}
        <div className="absolute -bottom-32 right-1/4 w-[700px] h-[700px] bg-gradient-to-t from-orange-100/40 via-yellow-50/30 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Single-Page Experience */}
      <main className="flex-grow">
        {/* 1. Hero: Happy Teachers' Day Bhavya Ma'am + Her Photo + Warm Words */}
        <HeroTeacherSection 
          teacher={teacher}
        />

        {/* 2. Memories Collage: Potluck, Saraswati Pooja, Fete Game Camp photos & captions */}
        <MemoriesCollage 
          memories={memories}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
          onLikeMemory={handleLikeMemory}
        />

        {/* 3. Video Section: Celebration moments video */}
        <VideoSection />

        {/* 4. Two lines said by classmates */}
        <ClassmateQuotes 
          quotes={quotes}
          onLikeQuote={handleLikeQuote}
        />

        {/* 5. Thank you note from the whole class */}
        <ThankYouLetter 
          data={initialThankYouData}
        />
      </main>

      {/* Lightbox for viewing photos full-size */}
      <PhotoLightbox 
        currentIndex={lightboxIndex !== null ? lightboxIndex : -1}
        memories={memories}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        onLike={handleLikeMemory}
      />
    </div>
  );
}
