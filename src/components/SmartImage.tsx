import { useState, type ImgHTMLAttributes } from 'react';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrcs?: string[];
  className?: string;
}

export default function SmartImage({
  src,
  alt,
  fallbackSrcs = [],
  className = '',
  ...props
}: SmartImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  // Generate sensible fallbacks based on the src name
  const candidateList = [src];
  
  if (src.includes('saraswati_pooja')) {
    candidateList.push('/saraswati_pooja.jpeg', '/saraswati_pooja.jpg', '/images/saraswati_pooja.jpeg', '/images/saraswati_pooja.jpg');
  } else if (src.includes('classroom')) {
    candidateList.push('/classroom.jpeg', '/classroom.jpg', '/images/classroom.jpeg', '/images/classroom.jpg');
  } else if (src.includes('rishabh')) {
    candidateList.push('/rishabh.jpg', '/rishabh_bhavya_mam.jpg', '/rishabh.webp', '/images/rishabh.jpg');
  } else if (src.includes('bhavya_mam')) {
    candidateList.push('/bhavya_mam.webp', '/bhavya_mam.jpg', '/images/bhavya_mam.webp', '/images/bhavya_mam.jpg');
  } else if (src.includes('potluck')) {
    candidateList.push('/potluck.jpg', '/potluck.webp', '/images/potluck.jpg');
  } else if (src.includes('fete_camp')) {
    candidateList.push('/fete_camp.jpg', '/fete_camp.webp', '/images/fete_camp.jpg');
  }

  // Merge with custom fallbacks, removing duplicates
  const allCandidates = Array.from(new Set([...candidateList, ...fallbackSrcs]));

  const currentSrc = allCandidates[currentSrcIndex] || src;

  const handleError = () => {
    if (currentSrcIndex < allCandidates.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
