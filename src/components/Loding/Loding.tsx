import React from 'react';
import { motion } from 'framer-motion';
import styles from './loding.module.scss';
import Image from 'next/image';
import mishaGif from '../../image/gif/micha.gif'

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.content}>
        <motion.div 
          className={styles.spinner}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className={styles.imageWrapper}
          animate={{ 
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Image
            src={mishaGif}
            alt="Walking person"
            priority
          />
        </motion.div>
        
        <motion.p
          className={styles.loadingText}
          animate={{ 
            opacity: [0.6, 1, 0.6] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;