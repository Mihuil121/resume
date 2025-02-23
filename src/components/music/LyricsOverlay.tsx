import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { playStore, playerStore } from '@/app/store/storeMane';
import { Rubik_Scribble } from 'next/font/google';

const rubikMono = Rubik_Scribble({
  weight: '400',
  subsets: ['latin'],
});

interface Lyric {
  time: number;
  text: string;
}

const shakeVariant: Variants = {
  animate: (custom: number) => ({
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 2, -2, 2, -2, 0],
    rotate: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
      delay: custom * 0.3,
    },
  }),
};

const LyricsOverlay: React.FC = () => {
  const { play } = playStore();
  const { playerId } = playerStore();
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);

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
            backdropFilter: 'blur(6px)',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              padding: '20px',
              boxSizing: 'border-box',
            }}
          >
            <AnimatePresence mode="popLayout">
              {currentLines.map((line, index) => (
                <motion.div
                  key={line + index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 },
                  }}
                  className={`text-center ${rubikMono.className}`}
                  style={{
                    fontSize: '2.8rem',
                    color: '#8b0000',
                    textShadow: '0 0 8px #ff0000, 0 0 16px #ff0000, 0 0 24px #ff0000',
                    textAlign: 'center',
                    width: '100%',
                    margin: '10px 0',
                  }}
                >
                  <motion.div custom={index} variants={shakeVariant} animate="animate">
                    {line}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LyricsOverlay;
