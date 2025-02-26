import Image from "next/image"
import styles from "./HomeMain.module.scss"
import PClick from "./pClick/PClick"
import micha121 from '../../../image/gif/micha.gif'
import { Rubik_Mono_One } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"
import * as motion from "motion/react-client";

const FontRubik: NextFont = Rubik_Mono_One({
    subsets: ['latin'],
    weight: '400'
})

interface IStyle {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
}

const HomeMain: React.FC = () => {

    const Style: IStyle = {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    }

    return (

        <div style={Style}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                <main className={styles.MainHome} style={Style}>
                    <section className={styles.contant} style={Style} >
                        <section className={`${styles.contantText}  ${FontRubik.className}`}>
                            <h5>
                                ✌🏻 Привет! Я Михаил (Mihuil121)
                            </h5>
                            <h1>
                                Frontend-разработчик. Помогаю создавать современные веб-приложения.
                            </h1>
                            <p>
                                Я разработчик с опытом работы с TypeScript, React, Zustand и Redux.
                                Известен как практичный и эффективный разработчик, стремящийся к
                                созданию качественного кода.
                            </p>
                            <PClick />
                        </section>
                        <section className={styles.contantImg}>
                            <Image
                                src={micha121}
                                alt="фото прогера "
                            />
                        </section>
                    </section>
                </main>
            </motion.div>
        </div>

    )
}

export default HomeMain