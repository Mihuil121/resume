"use client";

import { useState, useEffect } from "react";
import { IoPlay, IoStop } from "react-icons/io5";
import styles from './muse.module.scss';
import { music } from "./musicT";
import { AnimatePresence, motion } from "framer-motion";
import { playStore, playerStore, pointStore } from "@/app/store/storeMane";
import Player from "./player/Player";
import LyricsOverlay from './LyricsOverlay';
import { Montserrat, Bebas_Neue } from 'next/font/google';

// Монтсеррат для основного текста - современный и четкий шрифт
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Bebas Neue для заголовков - стильный и выразительный
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const Music = () => {
  const { play, setPlay } = playStore();
  const { playerId } = playerStore();
  const { point, setPoint } = pointStore();

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [hover, setHover] = useState(false);

  const player = () => {
    setPlay();
  };

  const onPointMouse = () => {
    setPoint(true);
    setHover(true);
    return false;
  };

  const offPointMouse = () => {
    setPoint(false);
    setHover(false);
    return false;
  };

  // Создаем экземпляр Audio при монтировании компонента
  useEffect(() => {
    const newAudio = new Audio(music[playerId].audio);
    setAudio(newAudio);

    // Очистка при размонтировании компонента
    return () => {
      newAudio.pause();
      newAudio.src = '';
    };
  }, [playerId]);

  // Управляем воспроизведением аудио при изменении play
  useEffect(() => {
    if (audio) {
      if (play) {
        audio.currentTime = currentTime;
        audio.play();
      } else {
        audio.pause();
        setCurrentTime(audio.currentTime);
      }
    }
  }, [play, audio, currentTime]);

  // При смене playerId обновляем источник аудио
  useEffect(() => {
    if (audio) {
      audio.pause();
      audio.src = music[playerId].audio;
      audio.currentTime = 0;
      if (play) {
        audio.play();
      }
    }
  }, [playerId, play, audio]);

  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <motion.div
        className={styles.musicans}
        onClick={player}
        style={{
          backgroundImage: `url(${music[playerId].back.src})`,
          color: 'white',
          cursor: 'pointer',
          boxShadow: hover ? '0 0 20px rgba(255, 255, 255, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.2)',
          transition: 'box-shadow 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        animate={{ 
          rotate: play ? 360 : 0,
          scale: hover ? 1.05 : 1
        }}
        transition={{ 
          rotate: { duration: 2, ease: "linear", repeat: play ? Infinity : 0 },
          scale: { duration: 0.3, ease: "easeOut" }
        }}
        onMouseEnter={onPointMouse}
        onMouseLeave={offPointMouse}
      >
        <motion.div 
          className={styles.icon}
          initial={{ opacity: 0.7, scale: 0.9 }}
          animate={{ 
            opacity: hover ? 1 : 0.7, 
            scale: hover ? 1.1 : 0.9,
            backgroundColor: hover ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'
          }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            padding: '10px'
          }}
        >
          {play ? <IoStop size={24} /> : <IoPlay size={24} />}
        </motion.div>
      </motion.div>

      <div className={styles.contentPlayerSpawn}>
        <AnimatePresence>
          {point && (
            <motion.button
              key="player"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              style={{
                border: "0px solid #ffffff00",
                background: "#ffffff00"
              }}
            >
              <Player />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.container}>
        <AnimatePresence>
          <LyricsOverlay />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Music;