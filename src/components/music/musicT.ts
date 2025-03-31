import photo from '../../image/music/photo_2025-01-22_16-36-27.jpg'
import { StaticImageData } from 'next/image'
import audio from '../../audio/king.mp3'
import audio2 from '../../audio/my.mp3'
import photo2 from '../../image/music/photo_2025-02-23_12-41-19.jpg'
import Twenty from '../../audio/Twenty-One-Pilots-Shy-Away-Livestream-Version.mp3'
import photo3 from '../../image/music/twenty.jpg'
import ajr from '../../audio/AJR-Yes-I-m-A-Mess-Official-Visualizer.mp3'
import photo4 from '../../image/music/ajr.jpg'
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
    },{
        text:"Shy-Away",
        back:photo3,
        audio:Twenty
    },{
        text:"Yes I`m A Mess",
        back:photo4,
        audio:ajr
    },
    
]