import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="relative py-6 sm:py-8 md:py-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-100/20 via-orange-100/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-gradient-to-tl from-amber-100/25 via-yellow-50/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-950 mb-1">
            Moments in Motion
          </h2>
          <p className="text-sm sm:text-base text-amber-800/75 font-medium">
            A glimpse into our celebration
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative group"
        >
          {/* Video Wrapper with rounded corners and shadow */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-black">
            {/* Decorative border glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-orange-400/10 pointer-events-none rounded-lg" />

            {/* Video Element */}
            <video
              className="absolute inset-0 w-full h-full object-contain"
              controls
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23000' width='1200' height='675'/%3E%3C/svg%3E"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/assets/class-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
          </div>

          {/* Info text below video */}
          <div className="mt-3 text-center">
            <p className="text-xs sm:text-sm text-amber-900/70 font-medium">
              🎬 Celebration moments
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
