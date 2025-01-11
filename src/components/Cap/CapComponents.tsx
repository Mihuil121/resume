'use client'
import styles from './capStyle.module.scss';
import Image from 'next/image';
import logo from '../../image/logo.png';
import { useState } from 'react';
import CapTwo from '../Cap2/CapTwo';
import { RxCross2 } from "react-icons/rx";

interface ImathBorderDiv {
    (counts: number): void
}
interface IMouse {
    (): boolean
}
interface IhandleClick {
    (): void
}

const CapComponents: React.FC = () => {
    const count: number = 3;
    const mathBorder: any[] = [];
    const [useBoolean, setBoolean] = useState<boolean>(false);
    const [useCapT, setCapT] = useState<boolean>(false)
    const iconComponents = <>
        <div className={styles.iconComponents}>
            <RxCross2 />
        </div>
    </>

    const mathBorderDiv: ImathBorderDiv = (counts) => {
        for (let index: number = 0; index < counts; index++) {
            mathBorder.push(
                <div className={styles[`Border${index}`]} key={index} style={
                    useBoolean ?
                        {
                            background: '#FF4100',
                            borderRadius: '1rem',
                            width: `${4 - index}rem`,
                            margin: '0.3rem',
                            transition: '0.5s',
                        }
                        : {
                            background: '#FF6347',
                            borderRadius: '3rem',
                            width: `${4 - index}rem`,
                            transition: '0.2s',
                            margin: '0.2rem'
                        }
                } />
            );
        }
    };

    mathBorderDiv(count);

    const MouseOn: IMouse = () => {
        setBoolean(true)
        return true
    }

    const MouseOff: IMouse = () => {
        setBoolean(false)
        return false
    }

    const handleClick: IhandleClick = () => {
        setCapT(prevItem => !prevItem)
    }

    return (
        <div>
            <main className={styles.mainCap}>
                <article className={styles.content}>
                    <div className={styles.contentImage}>
                        <Image
                            src={logo}
                            alt="icon"
                        />
                    </div>
                    <div className={`${styles.contentBorder} ${useCapT ? styles.cross : ''}`} onMouseEnter={MouseOn} onMouseLeave={MouseOff} onClick={handleClick}>
                        {useCapT ? iconComponents : mathBorder}
                    </div>
                </article>
            </main>
            {useCapT ? <CapTwo /> : null}
        </div>
    );
}

export default CapComponents;
