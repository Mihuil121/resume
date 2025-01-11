import styles from './CapTwo.module.scss'
import { Rubik_Mono_One } from 'next/font/google'
import { ICapLi, capLi } from './capTwo'
import { NextFont } from 'next/dist/compiled/@next/font'
import { RiHome2Line } from "react-icons/ri";
import { BsCodeSquare } from "react-icons/bs";
import { RiFilePdf2Line } from "react-icons/ri";
import Link from 'next/link';

const icons = [
    <RiHome2Line />, <BsCodeSquare />, <RiFilePdf2Line />
]

const Rubik: NextFont = Rubik_Mono_One({
    subsets: ['latin'],
    weight: '400'
})

const CapTwo: React.FC = () => {
    return (
        <div>
            <main className={styles.CapTwo}>
                <article className={styles.contentCapTwo}>
                    <div className={styles.Rubik}>
                        <p className={Rubik.className}>
                            Меню
                        </p>
                    </div>
                    <div className={styles.content_text_cap}>
                        {capLi.map((item: ICapLi, index: number) => (
                            <div className={styles.CapTwoMenu} key={index}>
                                <Link href={item.url} style={{textDecoration:'none'}}>
                                    <p className={Rubik.className}>
                                        {icons[index]}  {item.text}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    )
}

export default CapTwo