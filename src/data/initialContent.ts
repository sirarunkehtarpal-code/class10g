import { TeacherInfo, MemoryPhoto, ClassmateQuote, ThankYouData } from '../types';

import bhavyaMamImg from '../../bhavya_mam.webp';
import potluckImg from '../../potluck.jpg';
import saraswatiImg from '../../saraswati_pooja.jpeg';
import feteCampImg from '../../fete_camp.jpg';
import classroomImg from '../../classroom.jpeg';
import rishabhImg from '../../rishabh.jpg';

export const initialTeacherInfo: TeacherInfo = {
  name: "Bhavya Ma'am",
  honorific: "Our Dear",
  subtitle: "Our Coolest Guide, Mentor & Geography Teacher",
  photoUrl: bhavyaMamImg,
  dedicationText: [
    "To the teacher who always saw our potential before we even noticed it ourselves. Your warmth transforms every geography lecture into a conversation and every lesson into a cherished memory.",
    "Thank you for your infinite patience, your radiant encouragement, and the unwavering belief you invest in each and every student in our class. Today is all about celebrating you!"
  ],
  badges: [
    "🌸 Most Patient Mentor",
    "✨ Coolest & Calmest",
    "📚 Master of Geography",
    "💛 Heart of our Class"
  ]
};

export const initialMemories: MemoryPhoto[] = [
  {
    id: "mem-potluck",
    title: "The Great Class Potluck",
    category: "potluck",
    caption: "Captured on the day of Potluck! Every desk turned into a grand buffet with shared tiffins, endless laughter, and Bhavya Ma'am tasting everyone's dishes with the sweetest smile.",
    dateTag: "Class Potluck Day",
    imageUrl: potluckImg,
    rotation: -2,
    likes: 42
  },
  {
    id: "mem-saraswati",
    title: "Saraswati Pooja Blessings",
    category: "saraswati_pooja",
    caption: "Saraswati Pooja morning in school. Clad in bright festive yellow, seeking blessings with marigolds and lit diyas, united in gratitude with Bhavya Ma'am leading our prayers.",
    dateTag: "Saraswati Pooja Day",
    imageUrl: saraswatiImg,
    rotation: 2.5,
    likes: 49
  },
  {
    id: "mem-fete-camp",
    title: "School Fete & Game Camp",
    category: "fete_camp",
    caption: "The annual fete game camp! Our class game stall was buzzing with carnival excitement, prizes, cheers, and Bhavya Ma'am cheering the loudest for all of us.",
    dateTag: "Annual Fete & Camp",
    imageUrl: feteCampImg,
    rotation: -1.5,
    likes: 46
  },
  {
    id: "mem-rishabh-bhavya",
    title: "Rishabh with Bhavya Ma'am",
    category: "special_moments",
    caption: "A cherished memory of Rishabh standing with Bhavya Ma'am! Grateful for your constant guidance, gentle smiles, and encouragement in every situation.",
    dateTag: "Special Memory",
    imageUrl: rishabhImg,
    rotation: 2.0,
    likes: 56
  },
  {
    id: "mem-classroom",
    title: "Geography Chapters & Map Studies",
    category: "classroom",
    caption: "Braving natural disasters and storms together! From exploring the world's climates to tracing contour lines, Bhavya Ma'am turns every geographical chapter into an unforgettable adventure.",
    dateTag: "Classroom Days",
    imageUrl: classroomImg,
    rotation: 1.8,
    likes: 53
  },
];

export const initialClassmateQuotes: ClassmateQuote[] = [
  {
    id: "quote-amritansh",
    author: "Amritansh Pandey",
    roleOrNickname: "Classmate",
    avatarColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    likes: 52,
    tags: "Music & Art Limitless Gratitude",
    message: `Ma'am
Words cannot express gratitude. I need Music and art to express that limit, U DA Best!

- Amritansh`,
    quoteLines: [
      "Ma'am, words cannot express gratitude.",
      "I need Music and art to express that limit, U DA Best - Amritansh"
    ]
  },
  {
    id: "quote-prisha",
    author: "Prisha Pandey",
    roleOrNickname: "Birthday Twin & Classmate",
    avatarColor: "bg-rose-100 text-rose-900 border-rose-300",
    likes: 58,
    tags: "Birthday Twin & Supporter",
    message: `Bhavya ma'am you have not just been a teacher but also our supporter our friend and our elder sister. You stand by our side in times of troubles and guide us with your patience and warmth in your heart. Extremely sorry for the troubles we have caused you but you have never left us in any situation. You have always been there for us. We are really obliged to have you as our class teacher. By the way you are the first teacher who is my birthday twin.
Thank you ma'am for being our class teacher. Love you so much. ♥️

Happy Teacher's day Bhavya ma'am (◍•ᴗ•◍)❤️
 
~Prisha`,
    quoteLines: [
      "Bhavya ma'am you have not just been a teacher but also our supporter our friend and our elder sister. You stand by our side in times of troubles and guide us with your patience and warmth in your heart.",
      "Extremely sorry for the troubles we have caused you but you have never left us in any situation. By the way you are the first teacher who is my birthday twin. Thank you ma'am for being our class teacher. Love you so much. ♥️ Happy Teacher's day Bhavya ma'am (◍•ᴗ•◍)❤️ ~Prisha"
    ]
  },
  {
    id: "quote-samar",
    author: "Samar Veer Singh",
    roleOrNickname: "Classmate",
    avatarColor: "bg-amber-100 text-amber-900 border-amber-300",
    likes: 38,
    tags: "Chillest Teacher",
    message: "Happies teacher's day ma'am ! You're the chillest , coolest and calmest teacher we've ever gotten and we'll always be grateful for it! and mam please ask kashvi to go from my seat :( ~ SAMAR",
    quoteLines: [
      "Happies teacher's day ma'am! You're the chillest, coolest and calmest teacher we've ever gotten and we'll always be grateful for it!",
      "And ma'am, please ask Kashvi to go from my seat :( ~ SAMAR"
    ]
  },
  {
    id: "quote-aditya-tomar",
    author: "Aditya Tomar",
    roleOrNickname: "Classmate",
    avatarColor: "bg-orange-100 text-orange-900 border-orange-300",
    likes: 34,
    tags: "Gratitude & Care",
    message: "Dear Bhavya Ma’am, thank you for always guiding us with patience, kindness, and a heart full of care. You’ve made learning feel special, and we’ll always be grateful for the memories and lessons you’ve given us. Happy Teacher’s Day!",
    quoteLines: [
      "Dear Bhavya Ma’am, thank you for always guiding us with patience, kindness, and a heart full of care.",
      "You’ve made learning feel special, and we’ll always be grateful for the memories and lessons you’ve given us. Happy Teacher’s Day!"
    ]
  },
  {
    id: "quote-amogh",
    author: "Amogh Agarwal",
    roleOrNickname: "Classmate & Poet",
    avatarColor: "bg-rose-100 text-rose-900 border-rose-300",
    likes: 47,
    tags: "Poem for Ma'am",
    message: `Dear Bhavya ma'am, you are our guiding light,
Shining brightly day and night,
Braving storms and natural disasters,
Coming to teach us everything about geographical chapters.

The duality of moods is present in thee,
A caring mother, or full of fury and heat!

In your presence, learning is enjoyable and fun,
Everything is clear and easy to learn!

Happy Teacher's Day ma'am!!! 
-AMOGH`,
    quoteLines: [
      "Dear Bhavya ma'am, you are our guiding light, shining brightly day and night, braving storms and natural disasters, coming to teach us everything about geographical chapters.",
      "The duality of moods is present in thee: a caring mother, or full of fury and heat! In your presence learning is fun, everything is clear and easy to learn. Happy Teacher's Day ma'am! -AMOGH"
    ]
  },
  {
    id: "quote-shaurya-gupta",
    author: "Shaurya Gupta",
    roleOrNickname: "Classmate",
    avatarColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
    likes: 41,
    tags: "Coolest & Modest",
    message: `There is no one way to say this but if there would be a ranking of people who made an impact on my life ... whether as a person, friend or just someone ik, you would definitely fill the spots for being the coolest , modest , most fashionable and honestly just too relatable ...You have a greeting smile on your face when i meet you everyday... so Wishing you a very Happy Teacher's Day ma'am... I hope you stay happy , healthy and smiling always ... 

( A genuine question - Is it me or do u have an infinite watch collection?)`,
    quoteLines: [
      "If there was a ranking of people who made an impact on my life, you would definitely fill the spot for being the coolest, modest, most fashionable and honestly just too relatable.",
      "Wishing you a very Happy Teacher's Day ma'am! (A genuine question - Is it me or do you have an infinite watch collection?)"
    ]
  },
  {
    id: "quote-kashvi",
    author: "Kashvi Srivastava",
    roleOrNickname: "Classmate",
    avatarColor: "bg-amber-100 text-amber-900 border-amber-300",
    likes: 36,
    tags: "Love & Classroom Banter",
    message: "Ma'am, please tell Samar that I'm not leaving his seat! 😉 In all seriousness, thank you for being our favorite teacher, constantly supporting us and bringing pure sunshine to our class every single day!",
    quoteLines: [
      "Ma'am, please tell Samar that I'm definitely not vacating his seat! 😉",
      "Thank you for being our favorite teacher, filling our classroom with laughter, support, and sunshine every single day!"
    ]
  },
  {
    id: "quote-raghav",
    author: "Raghav Agarwal",
    roleOrNickname: "Classmate",
    avatarColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    likes: 39,
    tags: "Most Fun & Real Teacher",
    message: "Dear ma'am, you are the most fun teacher we have everr studied from. You have always given me support and inspiration. I have had a wonderful time with you. We all really appreciate your efforts to go over the usual student teacher formal relation. We love the way you are real with us, like we actually relate to our friends. You are really a blessing. I am very grateful to have such a cool teacher to study from. I hope we may maintain this bond ever after and wish you well for your future. WISHING YOU A VERY VERY HAPPY TEACHER'S DAY!",
    quoteLines: [
      "Dear ma'am, you are the most fun teacher we have ever studied from! You have always given me support and inspiration.",
      "We all really appreciate your efforts to go beyond the usual student-teacher formal relation. We love the way you are real with us! WISHING YOU A VERY VERY HAPPY TEACHER'S DAY! ~Raghav"
    ]
  },
  {
    id: "quote-rishabh",
    author: "Rishabh Mishra",
    roleOrNickname: "Classmate",
    avatarColor: "bg-sky-100 text-sky-900 border-sky-300",
    likes: 44,
    tags: "GOAT Geography Teacher",
    message: `Happy Teachers’ Day to the GOAT Geography teacher! ❤️
Honestly, you’re not even just our teacher at this point… you’re basically our unofficial friend 😂. Thank you for making Geography actually interesting and for somehow surviving our nonsense every single day 💀.
We love how you’re always so chill, understanding, and friendly—and the fact that you barely scold us is definitely one of your biggest W’s 🤌
Thank you for being the kind of teacher we can actually talk to, laugh with, and learn from. Please never become the “strict teacher arc” version of yourself. 🙏
Stay iconic, Ma’am. Happy Teachers’ Day! ❤️
Btw Ma’am, the Triple Chocomelt Waffle was as sweet as you 🧇❤️ and I’d definitely suggest you try the Naked Nutella someday 😋😂.

~Rishabh`,
    quoteLines: [
      "Happy Teachers’ Day to the GOAT Geography teacher! Thank you for making Geography actually interesting and for being our unofficial friend.",
      "Stay iconic, Ma’am. The Triple Chocomelt Waffle was as sweet as you, and you should definitely try the Naked Nutella someday! ~Rishabh"
    ]
  },
  {
    id: "quote-arnav-kumar",
    author: "Arnav Kumar",
    roleOrNickname: "Classmate",
    avatarColor: "bg-teal-100 text-teal-900 border-teal-300",
    likes: 42,
    tags: "Supportive & Inspiring",
    message: `Ma’am, you’ve always been super supportive—helping us complete our pending work rather than prioritizing the syllabus pace. It really feels like you understand our daily school struggles firsthand!

I still remember that early Winds & Pressure Belts class going straight over my head like a bouncer! But thanks to your guidance, I mastered the concepts and scored really well. Your patience and encouragement make every class memorable. You are truly INSPIRING, APPROACHABLE, and COMPASSIONATE. Happy Teacher's Day!
-Arnav Kumar`,
    quoteLines: [
      "Ma’am, you’ve always been super supportive—helping us complete our pending work rather than prioritizing the syllabus pace. It really feels like you understand our daily school struggles firsthand!",
      "Your guidance helped me master Winds & Pressure Belts and score really well. Your patience and encouragement make every class memorable. You are truly INSPIRING, APPROACHABLE, and COMPASSIONATE. Happy Teacher's Day! ~Arnav Kumar"
    ]
  }
];

export const initialThankYouData: ThankYouData = {
  title: "A Heartfelt Thank You, Bhavya Ma'am",
  lead: "From every student whose path you illuminated with kindness, patience, and wisdom.",
  paragraphs: [
    "Dear Bhavya Ma'am, teaching is not just what you do—it is who you are. Throughout this school year, you have been our mentor, our constant cheerleader, and our greatest source of inspiration.",
    "From sharing laughs during our potluck, to celebrating our heritage on Saraswati Pooja, to cheering side-by-side at the fete games camp, you have turned our school days into golden memories that we will cherish forever.",
    "Thank you for your infinite patience on tough days, your infectious enthusiasm for learning, and your genuine belief in every single one of us. We promise to make you proud in everything we do."
  ],
  signOff: "With immense love, gratitude & deepest respect,",
  classBatch: "The Entire Class of 2026",
  studentsList: [
    "Aarush Singh",
    "Aarush Singh",
    "Abhivyakti Shukla",
    "Aditya Jaiswal",
    "Aditya Tomar",
    "Advika Ojha",
    "Akshita Srivastava",
    "Amogh Agarwal",
    "Amritansh Pandey",
    "Anjika Singh",
    "Arjun Awasthi",
    "Arnav Dixit",
    "Arnav Kumar",
    "Arpan Agrawal",
    "Arya Vardhan Singh",
    "Arvay Tiwari",
    "Astik Shukla",
    "Astitva Singh",
    "Atharv Chaudhary",
    "Devansh Pathak",
    "Hanshika Haswani",
    "Harshita Haswani",
    "Kartikeya Kohli",
    "Kashvi Srivastava",
    "Lincoln Verma",
    "Mimit Singh",
    "Mohammad Abdullah Azam",
    "Mohammad Talha",
    "Nimisha Singh",
    "Parth Shivhare",
    "Prisha Pandey",
    "Raghav Agarwal",
    "Rishabh Mishra",
    "Saanvi Verma",
    "Samar Veer Singh",
    "Shaurya Gupta",
    "Shaurya Shahi",
    "Soham Vishnoi Verma",
    "Srishti Singh",
    "Swastic",
    "Tarun Tej Kumar",
    "Vishvendrea Pratap Kalchuri"
  ]
};
