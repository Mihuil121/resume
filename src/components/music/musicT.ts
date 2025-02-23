import photo from '../../image/music/photo_2025-01-22_16-36-27.jpg'
import { StaticImageData } from 'next/image'
import audio from '../../audio/king.mp3'
import audio2 from '../../audio/my.mp3'
import photo2 from '../../image/music/photo_2025-02-23_12-41-19.jpg'

export interface Imusic {
    text: string,
    back: StaticImageData,
    audio:string
}

export const music: Imusic[] = [
    {
        text: 'King',
        back: photo,
        audio:audio
    }, {
        text: 'fire',
        back: photo,
        audio:audio
    },{
        text:"Кошмары",
        back:photo2,
        audio:audio2
    },
    
]