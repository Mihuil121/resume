'use client'
import Link from "next/link"
import styles from './bottomStyle.module.scss'
import { useState } from "react";
import { IContact, contact } from "./bottonT";
import { hrefLink } from "@/app/store/storeMane";
import { NextFont } from "next/dist/compiled/@next/font";
import { Rubik_Mono_One } from "next/font/google";

interface IMouse {
  (index: number): void;
}

const rubik: NextFont = Rubik_Mono_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-rubik',
  display: 'swap'
});

const Botton: React.FC = () => {
  const [point, Setpoint] = useState<boolean[]>(Array(contact.length).fill(false))
  const { setLink } = hrefLink()

  const onMouse: IMouse = (index) => {
    Setpoint(prev => {
      const newPoin = [...prev]
      newPoin[index] = true
      return newPoin
    })
  }

  const offMouse: IMouse = (index) => {
    Setpoint(prev => {
      const newPoin = [...prev]
      newPoin[index] = false
      return newPoin
    })
  }

  return (
    <>
      <section className={styles.bottom}>
        {contact.map((sect: IContact, index: number) => {

          const IconReact = sect.icon as React.ComponentType<any>;
          
          return (
            <section
              className={`${styles[sect.type]} ${styles.iconB}`}
              key={index}
              onMouseEnter={() => onMouse(index)}
              onMouseLeave={() => offMouse(index)}
              onClick={() => setLink(index)}
              style={{
                background: point[index] ? "black" : sect.color,
                cursor: 'pointer',
                transition: '0.5s'
              }}
            >
              <p className={rubik.className}>
                {sect.type}
              </p>
              <IconReact />
            </section>
          )
        })}
      </section>
    </>
  )
}

export default Botton
