'use client'
import styles from './Player.module.scss'
import Image from 'next/image'
import { playerStore } from '@/app/store/storeMane'
import { music } from '../musicT'
import { motion } from "framer-motion";
import { pointStore } from '@/app/store/storeMane'
import { playStore } from '@/app/store/storeMane'
import { HiMiniChevronLeft } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";

interface IPoint {
    (): boolean
}
const Player = () => {
    const { playerId, setPlayerPlas, setPlayerMines } = playerStore()
    const { point, setPoint } = pointStore()
    const { play, setPlay } = playStore()

    const onPointMouse: IPoint = () => {
        setPoint(true)
        return false
    }

    const offPointMouse: IPoint = () => {
        setPoint(false)
        return false
    }
    return (
        <div onMouseEnter={onPointMouse} onMouseLeave={offPointMouse}>
            <main className={styles.contentPlay}>
                <div className={styles.contentPlayImg}>
                    <motion.div
                        className={styles.musicans}
                        animate={{ rotate: play ? 360 : 0 }}
                        transition={{ duration: 2, ease: "linear", repeat: play ? Infinity : 0 }}
                    >
                        <Image
                            src={music[playerId].back}
                            alt={`${music[playerId].text}`}
                            width={80}
                            height={80}
                            style={{
                                borderRadius: '50%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                    </motion.div>
                </div>
                <div className={styles.contentText}>
                    <h1>{music[playerId].text}</h1>
                </div>
                <div className={styles.contentButton}>
                    <button onClick={setPlayerMines}>
                        <HiMiniChevronLeft />
                    </button>
                    <button onClick={setPlayerPlas}>
                        <HiMiniChevronRight />
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Player