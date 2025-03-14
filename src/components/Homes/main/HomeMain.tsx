"use client"
import Image from "next/image"
import styles from "./HomeMain.module.scss"
import PClick from "./pClick/PClick"
import micha121 from '../../../image/gif/micha.gif'
import { Rubik_Mono_One, Montserrat, Anton } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"
import * as motion from "motion/react-client";
import { useEffect, useState } from "react"

const FontRubik: NextFont = Rubik_Mono_One({
    subsets: ['latin'],
    weight: '400'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

const anton = Anton({
    subsets: ['latin'],
    weight: '400'
})

interface IStyle {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
}

const HomeMain: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const Style: IStyle = {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    }

    return (
        <div style={Style}>
            <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ 
                    scale: isVisible ? 1 : 0, 
                    opacity: isVisible ? 1 : 0 
                }} 
                transition={{ 
                    duration: 0.8, 
                    ease: [0.34, 1.56, 0.64, 1]
                }}
            >
                <main className={styles.MainHome} style={Style}>
                    <section className={styles.contant} style={Style} >
                        <section className={styles.contantText}>
                            <h5 className={montserrat.className} style={{
                                letterSpacing: '0.05em',
                                fontWeight: 700,
                                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.6s ease, opacity 0.6s ease',
                                marginBottom: '1rem',
                                zIndex: 2,
                            }}>
                                ✌🏻 Привет! Я Михаил (Mihuil121)
                            </h5>
                            <h1 className={anton.className} style={{
                                letterSpacing: '0.02em',
                                lineHeight: 1.2,
                                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.6s ease 0.2s, opacity 0.6s ease 0.2s',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                                marginBottom: '1.5rem'
                            }}>
                                Frontend-разработчик. Помогаю создавать современные веб-приложения.
                            </h1>
                            <p className={montserrat.className} style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.6s ease 0.4s, opacity 0.6s ease 0.4s',
                                marginBottom: '2rem'
                            }}>
                                Я разработчик с опытом работы с TypeScript, React, Zustand и Redux.
                                Известен как практичный и эффективный разработчик, стремящийся к
                                созданию качественного кода.
                            </p>
                            <div style={{
                                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.6s ease 0.6s, opacity 0.6s ease 0.6s'
                            }}>
                                <PClick />
                            </div>
                        </section>
                        <section className={styles.contantImg}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ 
                                    scale: isVisible ? 1 : 0.9, 
                                    opacity: isVisible ? 1 : 0 
                                }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: 0.3,
                                    ease: [0.34, 1.56, 0.64, 1] 
                                }}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                    position: 'relative',
                                    zIndex: 1, // Changed to lower z-index to prevent overlap with player
                                }}
                            >
                                <Image
                                    src={micha121}
                                    alt="фото прогера"
                                    style={{
                                        transition: 'transform 0.5s ease',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                            </motion.div>
                        </section>
                    </section>
                </main>
            </motion.div>
        </div>
    )
}

export default HomeMain