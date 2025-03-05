"use client"
import Image from "next/image"
import styles from './exhib.module.scss'
import stalker from '../../../../image/stalker.png'
import Link from "next/link"
import { Rubik_Mono_One } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"
import * as motion from "motion/react-client";
import { useInView } from 'react-intersection-observer';

const Rubik: NextFont = Rubik_Mono_One({
    subsets: ['latin'],
    weight: '400'
})

const Exhibition: React.FC = () => {
    const [titleRef, titleInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const [stackRef,stackInView] = useInView({
        threshold:0.2,
        triggerOnce:true,
    })
    return (
        <>
            <div className={styles.Exh} ref={titleRef}>
                <motion.article
                    className={`${styles.titleExh} ${Rubik.className}`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 1000 } }
                    transition={{ duration: 0.5 }}
                >
                    <h3>
                        Выставочный зал
                    </h3>
                </motion.article>
                <main
                    className={styles.ExhibitionMain}
                >
                    <div className={styles.Exhibition} ref={stackRef}>
                        <motion.article
                            className={styles.comtentExh}
                            initial={{ opacity: 0, x: -200 }}
                            animate={stackInView ? { opacity: 1, x: 0 }:{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <section className={styles.ExhImg}>
                                <Image
                                    src={stalker}
                                    alt="stalker" />
                            </section>
                            <section className={styles.ExhText}>
                                <h2 className={`${styles.stalkerH}  ${Rubik.className}`}>
                                    Stalker
                                </h2>
                                <p className={Rubik.className}>
                                    Веб-сайт, вдохновленный игрой Stalker 2, созданный для воссоздания её атмосферы и совершенствования навыков в TypeScript, React и Zustand.
                                    Использует библиотеки Swiper для слайдеров.
                                    Распространяется под лицензией MIT. Проект открыт для вклада других разработчиков.
                                </p>
                                <button className={Rubik.className}>
                                    <Link href={'/'} style={{ textDecoration: "none", color: 'black' }}>
                                        перрейти
                                    </Link>
                                </button>
                            </section>
                        </motion.article>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Exhibition