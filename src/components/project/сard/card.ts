import photo1 from '../../../image/stalker/1.png'
import photo2 from '../../../image/stalker/2.png'
import photo3 from '../../../image/stalker/3.png'
import photo4 from '../../../image/stalker/4.png'
import photo5 from '../../../image/stalker/5.png'
import { StaticImageData } from 'next/image'
import icon1 from '../../../image/icon/stalker1.png'

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
        text: 'Stalker',
        mainPhoto: photo1,
        photo: [photo2, photo3, photo4, photo5],
        description: `
        Веб-сайт, вдохновленный Stalker 2, создан для улучшения навыков в TypeScript и React с использованием Zustand.
         Технологии: TypeScript, React, Swiper, Zustand. Запустите проект и исследуйте интерфейс. Приветствуются pull-запросы и комментарии. 
        Лицензия MIT — свободное использование и модификация.
        `,
        icon: icon1,

    }

]