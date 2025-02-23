"use client";

import { useState, useEffect } from "react";
import { IoPlay, IoStop } from "react-icons/io5";
import styles from './muse.module.scss';
import { music } from "./musicT";
import { AnimatePresence, motion } from "framer-motion";
import { playStore, playerStore, pointStore } from "@/app/store/storeMane";
import Player from "./player/Player";
import LyricsOverlay from './LyricsOverlay';

const Music = () => {
  const { play, setPlay } = playStore();
  const { playerId } = playerStore();
  const { point, setPoint } = pointStore();

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const player = () => {
    setPlay();
  };

  const onPointMouse = () => {
    setPoint(true);
    return false;
  };

  const offPointMouse = () => {
    setPoint(false);
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
    <div className={styles.container}>
      <motion.div
        className={styles.musicans}
        onClick={player}
        style={{
          backgroundImage: `url(${music[playerId].back.src})`,
          color: 'white',
          cursor: 'pointer'
        }}
        animate={{ rotate: play ? 360 : 0 }}
        transition={{ duration: 2, ease: "linear", repeat: play ? Infinity : 0 }}
        onMouseEnter={onPointMouse}
        onMouseLeave={offPointMouse}
      >
        <div className={styles.icon}>
          {play ? <IoStop /> : <IoPlay />}
        </div>
      </motion.div>

      <div className={styles.contentPlayerSpawn}>
        <AnimatePresence>
          {point && (
            <motion.button
              key="player"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
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
        <LyricsOverlay />
      </div>
    </div>
  );
};

export default Music;
