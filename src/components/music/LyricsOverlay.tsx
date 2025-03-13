import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { playStore, playerStore } from '@/app/store/storeMane';
import { Rubik_Scribble, Creepster, Nosifer } from 'next/font/google';

// More interesting horror fonts
const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});

const nosifer = Nosifer({
  weight: '400',
  subsets: ['latin'],
});

const rubikScribble = Rubik_Scribble({
  weight: '400',
  subsets: ['latin'],
});

interface Lyric {
  time: number;
  text: string;
}

// More dynamic shake animation
const shakeVariant: Variants = {
  animate: (custom: number) => ({
    x: [0, -3, 3, -3, 3, 0],
    y: [0, 2, -2, 2, -2, 0],
    rotate: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay: custom * 0.3,
    },
  }),
};

// More interesting entrance and exit animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.1 
    } 
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.6,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    } 
  }
};

const LyricsOverlay: React.FC = () => {
  const { play } = playStore();
  const { playerId } = playerStore();
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [activeFontIndex, setActiveFontIndex] = useState(0);

  // Alternate between fonts for variety
  const fonts = [creepster, nosifer, rubikScribble];

  // Randomly change font for variety
  useEffect(() => {
    if (play && playerId === 2) {
      const fontInterval = setInterval(() => {
        setActiveFontIndex(prev => (prev + 1) % fonts.length);
      }, 10000); // Change font every 10 seconds
      
      return () => clearInterval(fontInterval);
    }
  }, [play, playerId]);

  const lyrics: Lyric[] = [
    { time: 21, text: "Проснувшись в холодном поту" },
    { time: 23, text: "Красные глаза и с привкусом крови во рту" },
    { time: 26, text: "Всякий раз признаться себе же сам не могу" },
    { time: 29, text: "Что всё равно бы предпочёл кошмары миру наяву" },
    { time: 31, text: "Там что ни день, всё время зрелище — печалька" },
    { time: 35, text: "Проснуться и уснуть, перегенерация чанков" },
    { time: 36, text: "И каждый раз бывать нам в массовке на подтанцовке" },
    { time: 37, text: "Нет, я не сплю, просто на ноль выкрутил дальность прорисовки" },
    { time: 39, text: "И далее, запитаясь мыслями за день" },
    { time: 41, text: "Мозг запирает меня в выдуманном мире, где" },
    { time: 43, text: "Он, сам едва сознавая абсурдность идей" },
    { time: 46, text: "Чтобы создать пространство страхов наших здесь" },
    { time: 48, text: "Монстров в каждом углу он щедро посадил" },
    { time: 50, text: "А я страшилок не боюсь, только в игре кооперативной" },
    { time: 53, text: "И где-то напорюсь, и поборюсь, сколь хватит сил, но" },
    { time: 55, text: "Зачем убивать того, кого можно бы приютить?" },
    { time: 58, text: "Иди ко мне на ручки" },
    { time: 61, text: "Вот и подружились, согласись, так стало лучше" },
    { time: 64, text: "Вместе будем жить и чтобы никогда не скучно" },
    { time: 68, text: "Было, темнота будет дарить свои игрушки" },
    { time: 80, text: "Раз, два, три" },
    { time: 82, text: "Посмотри" },
    { time: 84, text: "В темноту" },
    { time: 86, text: "Мы внутри" },
    { time: 88, text: "Раз, два, три" },
    { time: 90, text: "Приходи" },
    { time: 92, text: "В темноту" },
    { time: 94, text: "Мы внутри" },
    { time: 96, text: "И я засыпаю" },
    { time: 100, text: "В этом сне бесконечного времени хватит сполна" },
    { time: 104, text: "И я засыпаю" },
    { time: 108, text: "В этой вечности все мои демоны стали друзья" },
  ];

  useEffect(() => {
    let animationFrame: number;
    if (play && playerId === 2) {
      setStartTime(Date.now());
      const animate = () => {
        if (!startTime) return;
        const currentTime = (Date.now() - startTime) / 1000;
        const currentLyrics = lyrics
          .filter(lyric => lyric.time <= currentTime)
          .map(lyric => lyric.text)
          .slice(-4);
        setCurrentLines(currentLyrics);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    } else {
      setStartTime(null);
      setCurrentLines([]);
    }
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [play, playerId, startTime]);

  if (playerId !== 2) return null;

  const activeFont = fonts[activeFontIndex];

  return (
    <AnimatePresence>
      {play && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            backdropFilter: 'blur(8px)',
            overflow: 'auto',
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              padding: '20px',
              boxSizing: 'border-box',
              background: 'radial-gradient(circle, rgba(20,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%)',
            }}
          >
            <AnimatePresence mode="popLayout">
              {currentLines.map((line, index) => (
                <motion.div
                  key={line + index}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    filter: 'blur(10px)'
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    filter: 'blur(0px)' 
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -50,
                    filter: 'blur(10px)' 
                  }}
                  transition={{
                    opacity: { duration: 0.6 },
                    y: { duration: 0.5, type: "spring", stiffness: 100 },
                    filter: { duration: 0.4 }
                  }}
                  className={`text-center ${activeFont.className}`}
                  style={{
                    fontSize: index === currentLines.length - 1 ? '3rem' : '2.6rem',
                    color: index === currentLines.length - 1 ? '#ff0000' : '#8b0000',
                    textShadow: `0 0 8px #ff0000, 0 0 16px #ff0000, 0 0 ${index === currentLines.length - 1 ? '32px' : '24px'} #ff0000`,
                    textAlign: 'center',
                    width: '100%',
                    margin: '10px 0',
                    letterSpacing: '0.05em',
                    fontWeight: 'bold',
                  }}
                >
                  <motion.div 
                    custom={index} 
                    variants={shakeVariant} 
                    animate="animate"
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      padding: '0 15px'
                    }}
                  >
                    {line}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LyricsOverlay;