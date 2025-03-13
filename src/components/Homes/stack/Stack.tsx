'use client';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './StackStyle.module.scss';
import { stackName, IstackName } from './stackT';
import { FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiBearSmileFill } from 'react-icons/ri';
import { BsFiletypeScss } from 'react-icons/bs';
import { PiLinuxLogoFill } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';
import { Rubik_Mono_One, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

interface IconType {
  icon: React.ReactNode;
  color: string;
}

// Основной шрифт для заголовков - выразительный и заметный
const rubik: NextFont = Rubik_Mono_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-rubik',
  display: 'swap'
});

// Современный шрифт для технических названий стека
const jetbrains: NextFont = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  display: 'swap'
});

// Дополнительный современный шрифт для улучшенной читаемости
const spaceGrotesk: NextFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space',
  display: 'swap'
});

// Обновленный массив иконок с уникальными цветами для каждой технологии
const iconS: IconType[] = [
  { icon: <FaReact />, color: '#61DAFB' }, // React - голубой
  { icon: <TbBrandNextjs />, color: '#ffffff' }, // Next.js - белый
  { icon: <BiLogoTypescript />, color: '#3178C6' }, // TypeScript - синий
  { icon: <FaJsSquare />, color: '#F7DF1E' }, // JavaScript - желтый
  { icon: <FaGitAlt />, color: '#F05032' }, // Git - оранжевый
  { icon: <TbBrandRedux />, color: '#764ABC' }, // Redux - фиолетовый
  { icon: <RiBearSmileFill />, color: '#CD6799' }, // Медведь - розовый (как Zustand)
  { icon: <BsFiletypeScss />, color: '#CC6699' }, // SCSS - розовый
  { icon: <PiLinuxLogoFill />, color: '#FCC624' }, // Linux - желтый
];

export const Stack: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [stackRef, stackInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Вариант анимации для заголовка
  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Вариант анимации для карточек технологий
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 50,
      x: index % 3 === 0 ? -50 : index % 3 === 2 ? 50 : 0,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className={styles.Stack}>
      <div ref={titleRef}>
        <motion.div
          className={styles.title}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2
            className={rubik.className}
          >
            Stack
          </h2>
          <motion.div
            initial={{ width: '0%', opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      </div>

      <section
        className={styles.cardStack}
        ref={stackRef}
        style={{
          display: 'grid',
          gap: '16px',
          perspective: '1000px'
        }}
      >
        <AnimatePresence>
          {stackName.map((stack: IstackName, index: number) => (
            <motion.div
              key={index}
              className={styles.cardS}
              style={{
                color: hoveredIndex === index ? iconS[index]?.color : 'white',
                background: hoveredIndex === index
                  ? `rgba(30, 30, 30, 0.8)`
                  : 'rgba(20, 20, 20, 0.5)',
                borderRadius: '12px',
                boxShadow: hoveredIndex === index
                  ? `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${iconS[index]?.color}40`
                  : '0 5px 15px rgba(0,0,0,0.2)',
                border: hoveredIndex === index
                  ? `1px solid ${iconS[index]?.color}80`
                  : '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.3s, border 0.3s, box-shadow 0.3s, color 0.3s',
                overflow: 'hidden',
                position: 'relative'
              }}
              initial="hidden"
              animate={stackInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              custom={index}
              transition={{ delay: stackInView ? index * 0.1 : 0 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${iconS[index]?.color}20 0%, transparent 70%)`,
                    zIndex: 0
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <motion.div
                style={{
                  fontSize: '2rem',
                  marginBottom: '10px',
                  position: 'relative',
                  zIndex: 1
                }}
                animate={{
                  rotate: hoveredIndex === index ? [0, -10, 10, -5, 5, 0] : 0,
                  scale: hoveredIndex === index ? [1, 1.2, 1.1] : 1,
                  color: iconS[index]?.color
                }}
                transition={{
                  duration: hoveredIndex === index ? 0.5 : 0.3,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: "easeInOut"
                }}
              >
                {iconS[index]?.icon}
              </motion.div>

              <motion.p
                className={jetbrains.className}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  margin: 0,
                  fontWeight: hoveredIndex === index ? 700 : 400,
                  letterSpacing: '0.5px'
                }}
                animate={{
                  y: hoveredIndex === index ? [0, -2, 2, 0] : 0
                }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.3, 0.6, 1]
                }}
              >
                {stack.name}
              </motion.p>

              {hoveredIndex === index && (
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `${iconS[index]?.color}30`,
                    zIndex: 0
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <motion.div
        style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '30px'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={stackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: stackName.length * 0.1 + 0.3, duration: 0.5 }}
      >
        <p className={spaceGrotesk.className} style={{
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 500,
          letterSpacing: '0.5px'
        }}>
          Постоянно совершенствую свои навыки в этих технологиях
        </p>
      </motion.div>
    </section>
  );
};