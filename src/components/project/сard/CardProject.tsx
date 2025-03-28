"use client"
import { cardData, ICardData } from './card'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CardImage } from '@/app/store/storeMane'
import styles from './cardStyle.module.scss'
import { Oswald } from 'next/font/google'
import { motion } from 'framer-motion'

const Oswalds = Oswald({
  subsets: ['latin'],
  weight: '500'
})

const CardProject: React.FC = () => {
  const { setFlag } = CardImage()
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(cardData.length).fill(false))

  useEffect(() => {
    cardData.forEach((_, index) => {
      setFlag(index)
    })
  }, [setFlag])

  useEffect(() => {
    const timeouts = cardData.map((_, index) => 
      setTimeout(() => {
        setIsVisible(prev => prev.map((v, i) => i <= index ? true : v))
      }, index * 300)
    )

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <article className={styles.cardBlok}>
      <section>
        {cardData.map((data: ICardData, index: number) => {
          const isEven = index % 2 === 0
          return (
            <motion.section
              className={styles.dataI}
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isVisible[index] ? 1 : 0,
                opacity: isVisible[index] ? 1 : 0
              }}
            >
              {isEven && (
                <article className={`${styles.imageCard} ${styles.imgLeft}`}>
                  <Image
                    src={data.mainPhoto}
                    alt={data.text}
                    width={500}
                    height={300}
                  />
                </article>
              )}
              <article className={styles.textP}>
                <section className="text-title">
                  <Image
                    src={data.icon}
                    alt={data.text}
                    className={styles.iconCard}
                    width={40}
                    height={40}
                  />
                  <p className={Oswalds.className}>{data.text}</p>
                </section>
                <section className="text-button">
                  <button>перейти</button>
                </section>
              </article>
              {!isEven && (
                <article className={`${styles.imageCard} ${styles.imgRight}`}>
                  <Image
                    src={data.mainPhoto}
                    alt={data.text}
                    width={500}
                    height={300}
                    
                  />
                </article>
              )}
            </motion.section>
          )
        })}
      </section>
    </article>
  )
}

export default CardProject