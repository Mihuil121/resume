import photo1 from '../../../image/stalker/1.png'
import photo2 from '../../../image/stalker/2.png'
import photo3 from '../../../image/stalker/3.png'
import photo4 from '../../../image/stalker/4.png'
import photo5 from '../../../image/stalker/5.png'
import { StaticImageData } from 'next/image'
import icon1 from '../../../image/icon/stalker1.png'
import p1 from '../../../image/next-ruscut/1.png'
import p2 from '../../../image/next-ruscut/2.png'
import p3 from '../../../image/next-ruscut/3.png'
import icon2 from '../../../image/icon/rascut.png'
import m1 from '../../../image/mincraft/1.png'
import m2 from '../../../image/mincraft/2.png'
import m3 from '../../../image/mincraft/3.png'
import m4 from '../../../image/mincraft/4.png'
import m5 from '../../../image/mincraft/5.png'
import m6 from '../../../image/mincraft/6.png'
import m7 from '../../../image/mincraft/7.png'
import icon3 from '../../../image/icon/minecraft-gamenrg.png'
import n1 from '../../../image/next/1.png'
import n2 from '../../../image/next/2.png'
import n4 from '../../../image/next/4.png'
import n3 from '../../../image/next/3.png'
import n5 from '../../../image/next/5.png'
import n6 from '../../../image/next/6.png'
import icon4 from '../../../image/icon/pank.png'

export interface ICardData {
    text: string,
    mainPhoto: StaticImageData,
    photo: StaticImageData[],
    description: string,
    icon: StaticImageData
}

export const cardData: ICardData[] = [
    {
        text: 'Stalker',
        mainPhoto: photo1,
        photo: [photo2, photo3, photo4, photo5],
        description: `
        Веб-сайт, вдохновленный Stalker 2, создан для улучшения навыков в TypeScript и React с использованием Zustand.
         Технологии: TypeScript, React, Swiper, Zustand. Запустите проект и исследуйте интерфейс. Приветствуются pull-запросы и комментарии. 
        Лицензия MIT — свободное использование и модификация.
        `,
        icon: icon1,

    },
    {
        text: 'next-rascut',
        mainPhoto: p1,
        photo: [p2, p3],
        description: `
        Next-rascut — веб-приложение с AR-технологиями для предоставления информации о исторических объектах, разработанное за 3 дня для IT-Fest. 
        Использует Next.js и TypeScript, включает админ панель Ruscut и Telegram бот. Проект нацелен на привлечение внимания к историческому наследию. 
        Авторы: Эмиль Юсупов, Максим Романченко, Михаил Безуглый, Хадис Ибатуллин, Тимофей Кальченко.
        `,
        icon: icon2,

    },
    {
        text: 'minecraft-gamenrg',
        mainPhoto: m1,
        photo: [m2, m3, m4, m5, m6, m7],
        description: `
        Проект Minecraft GameNRG — это платформа,
         объединяющая Next.js и Zustand с использованием SCSS для стильного дизайна. Она позволяет игрокам погрузиться в мир Minecraft, предлагая серверный рендеринг и эффективное управление состоянием. Ознакомьтесь с проектом на minecraft-gamenrg.vercel.app. 
        Спасибо за внимание!
        `,
        icon: icon3,

    },
    {
        text: 'next-project',
        mainPhoto: n1,
        photo: [n2, n3, n4, n5, n6],
        description: `
        🌟 Проект Next — это учебный веб-сайт для поиска вымышленных работников. 
        Он включает функции поиска, просмотра профилей и изучения аспектов профиля. Используемые технологии: Next.js, TypeScript и CSS. 
        Проект предназначен только для обучения и не для коммерческого использования.
        `,
        icon: icon4,

    },
]