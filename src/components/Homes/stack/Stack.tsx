'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './StackStyle.module.scss';
import { stackName, IstackName } from './stackT';
import { FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiBearSmileFill } from 'react-icons/ri';
import { BsFiletypeScss } from 'react-icons/bs';
import { Rubik_Mono_One } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { PiLinuxLogoFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

interface IconType {
  icon: any;
}

const iconS: IconType[] = [
  { icon: <FaReact /> },
  { icon: <TbBrandNextjs /> },
  { icon: <BiLogoTypescript /> },
  { icon: <FaJsSquare /> },
  { icon: <FaGitAlt /> },
  { icon: <TbBrandRedux /> },
  { icon: <RiBearSmileFill /> },
  { icon: <BsFiletypeScss /> },
  { icon: <PiLinuxLogoFill /> },
];

const Rubik: NextFont = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
});

export const Stack: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [stackRef, stackInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.Stack}>
      <div ref={titleRef}>
        <motion.div
          className={styles.title}
          initial={{ opacity: 0, rotate: 180 }}
          animate={titleInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: 180 }}
          transition={{ duration: 1 }}
        >
          <h2 className={Rubik.className}>Stack</h2>
        </motion.div>
      </div>

      <section className={styles.cardStack} ref={stackRef}>
        {stackName.map((stack: IstackName, index: number) => (
          <motion.div
            key={index} 
            className={styles.cardS}
            style={{ color: 'white' }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={stackInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.5, delay: stackInView ? index * 0.1 : 0 }}
          >
            {iconS[index]?.icon}
            <p className={Rubik.className}>{stack.name}</p>
          </motion.div>
        ))}
      </section>
    </section>
  );
};