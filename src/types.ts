export interface TeacherInfo {
  name: string;
  honorific: string;
  subtitle: string;
  photoUrl: string;
  dedicationText: string[];
  badges: string[];
}

export interface MemoryPhoto {
  id: string;
  title: string;
  category: 'potluck' | 'saraswati_pooja' | 'fete_camp' | 'classroom' | 'celebration' | string;
  caption: string;
  dateTag: string;
  imageUrl: string;
  imageFit?: 'cover' | 'contain';
  rotation: number;
  likes: number;
}

export interface ClassmateQuote {
  id: string;
  author: string;
  quoteLines?: string[];
  message?: string;
  roleOrNickname?: string;
  avatarColor: string;
  likes: number;
  tags?: string;
}

export interface ThankYouData {
  title: string;
  lead: string;
  paragraphs: string[];
  signOff: string;
  classBatch: string;
  studentsList: string[];
}
