import { BiLogoGmail } from "react-icons/bi";
import { FaSquareGithub } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

export interface IContact {
    type: string,
    id: number,
    icon: React.ElementType,
    color: string,
    url?: string
}

export const contact: IContact[] = [
    {
        type: 'gmail',
        id: 0,
        icon: BiLogoGmail,
        color: '#ff8f8f',
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=bezugliymicha@gmail.com&su=Привет&body=Как%20дела%3F"


    }, {
        type: 'github',
        id: 1,
        icon: FaSquareGithub,
        color: '#333',
        url: 'https://github.com/Mihuil121'
    }, {
        type: 'discord',
        id: 2,
        icon: BsDiscord,
        color: '#7289da'
    },
]