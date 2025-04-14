'use client'
import Image from "next/image"
import hi from '../../image/icon/hi.png'
import styles from './ResumeStyle.module.scss'
import { Rubik_Mono_One } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font"
import file from '../../pdf/mihuil121.pdf'
import { motion } from "motion/react"

interface IHendel {
    (): void
}

const font: NextFont = Rubik_Mono_One({
    subsets: ['latin'],
    weight: '400'
})

const Resume: React.FC = () => {

    const filePDF = (url: string, fileName: string) => {
        const a: HTMLAnchorElement = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    const hendelClick: IHendel = () => {
        filePDF(file, 'resume.pdf')
    }

    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} >
            <main style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
                <section className={styles.contentR}>
                    <div className={styles.contentText}>
                        <p className={font.className}>
                            Привет! Если ты здесь, значит, я тебя заинтересовал.
                        </p>
                    </div>
                    <div className={styles.contentImage}>
                        <Image
                            src={hi}
                            alt="hi"
                        />
                    </div>
                </section>
            </main>
            <div className={styles.buttonR} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <button onClick={hendelClick}>Скачать резюме</button>
            </div>
        </motion.div>
    )
}

export default Resume
