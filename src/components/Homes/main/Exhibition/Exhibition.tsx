"use client"
import Image from "next/image"
import styles from './exhib.module.scss'
import stalker from '../../../../image/stalker.png'
import Link from "next/link"
import { Rubik_Mono_One, Oswald, Play } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"
import * as motion from "motion/react-client";
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

// Основной шрифт заголовков - более стильный вид
const rubik: NextFont = Rubik_Mono_One({
    subsets: ['latin', 'cyrillic'],
    weight: '400',
    variable: '--font-rubik',
    display: 'swap'
})

// Дополнительный шрифт для текста - более читабельный
const oswald = Oswald({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
    variable: '--font-oswald',
    display: 'swap'
})

// Альтернативный шрифт для кнопок
const play = Play({
    subsets: ['latin', 'cyrillic'],
    weight: '400',
    variable: '--font-play',
    display: 'swap'
})

const Exhibition: React.FC = () => {
    const [titleRef, titleInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const [stackRef, stackInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className={styles.Exh} ref={titleRef}>
                <motion.article
                    className={`${styles.titleExh} ${rubik.className}`}
                    initial={{ opacity: 0, y: -100 }}
                    animate={titleInView ? 
                        { opacity: 1, y: 0, scale: 1 } : 
                        { opacity: 0, y: 100, scale: 0.8 }}
                    transition={{ 
                        duration: 0.8, 
                        type: "spring", 
                        bounce: 0.4
                    }}
                >
                    <h3 style={{ 
                        textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                        letterSpacing: '1px'
                    }}>
                        Выставочный зал
                    </h3>
                </motion.article>
                <main
                    className={styles.ExhibitionMain}
                >
                    <div className={styles.Exhibition} ref={stackRef}>
                        <motion.article
                            className={styles.comtentExh}
                            initial={{ opacity: 0, x: -300 }}
                            animate={stackInView ? 
                                { opacity: 1, x: 0, rotateY: 0 } : 
                                { opacity: 0, x: -100, rotateY: -10 }}
                            transition={{ 
                                duration: 0.8, 
                                type: "spring", 
                                damping: 20, 
                                stiffness: 100 
                            }}
                        >
                            <motion.section 
                                className={styles.ExhImg}
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: 2,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Image
                                    src={stalker}
                                    alt="stalker"
                                    style={{ 
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                                    }}
                                />
                            </motion.section>
                            <section className={styles.ExhText}>
                                <motion.h2 
                                    className={`${styles.stalkerH} ${rubik.className}`}
                                    animate={{ 
                                        textShadow: stackInView ? 
                                            '0 0 10px rgba(255,165,0,0.7), 0 0 20px rgba(255,165,0,0.5)' : 
                                            'none'
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity, 
                                        repeatType: 'reverse' 
                                    }}
                                    style={{ letterSpacing: '2px' }}
                                >
                                    Stalker
                                </motion.h2>
                                <p className={oswald.className} style={{ 
                                    lineHeight: '1.6',
                                    fontSize: '1.05rem',
                                    fontWeight: '400',
                                    textAlign: 'justify',
                                    maxWidth: '90%',
                                    margin: '20px auto'
                                }}>
                                    Веб-сайт, вдохновленный игрой Stalker 2, созданный для воссоздания её атмосферы и совершенствования навыков в TypeScript, React и Zustand.
                                    Использует библиотеки Swiper для слайдеров.
                                    Распространяется под лицензией MIT. Проект открыт для вклада других разработчиков.
                                </p>
                                <motion.button 
                                    className={play.className}
                                    whileHover={{ 
                                        scale: 1.1, 
                                        backgroundColor: '#ffa500',
                                        color: '#000'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    style={{ 
                                        padding: '10px 25px',
                                        borderRadius: '5px',
                                        border: '2px solid #ffa500',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        background: isHovered ? '#ffa500' : 'transparent',
                                        color: isHovered ? 'black' : '#ffa500',
                                        transition: 'background 0.3s, color 0.3s'
                                    }}
                                >
                                    <Link href={'/'} style={{ textDecoration: "none", color: 'inherit' }}>
                                        перейти
                                    </Link>
                                </motion.button>
                            </section>
                        </motion.article>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Exhibition