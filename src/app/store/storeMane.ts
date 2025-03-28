import { create } from 'zustand'
import { music } from '@/components/music/musicT'
import { contact, IContact } from '@/components/Homes/botton/bottonT'

interface IPlayerStore {
    playerId: number,
    setPlayerId: (id: number) => void
    setPlayerPlas: () => void;
    setPlayerMines: () => void;
}

interface IPointStore {
    point: boolean,
    setPoint: (point: boolean) => void
}

interface IPlayStore {
    play: boolean,
    setPlay: () => void
}

interface IGit {
    git: 'https://github.com/Mihuil121',
    setWindow: () => void
}

interface IHrefLink {
    setLink:(index:number)=>void,
    contact:IContact[];
}


export const playerStore = create<IPlayerStore>((set) => ({
    playerId: 0,
    setPlayerId: (id: number) => set({ playerId: id }),
    setPlayerPlas: () => set((state) => ({ playerId: Math.min(state.playerId + 1, music.length - 1) })),
    setPlayerMines: () => set((state) => ({ playerId: Math.max(state.playerId - 1, 0) })),
}))


export const pointStore = create<IPointStore>((set) => ({
    point: false,
    setPoint: (point: boolean) => set({ point: point }),
}))

export const playStore = create<IPlayStore>((set) => ({
    play: false,
    setPlay: () => set((state) => ({ play: !state.play }))
}))

export const githubClik = create<IGit>((set, get) => ({
    git: 'https://github.com/Mihuil121',
    setWindow: () => window.open(get().git)
}))

export const hrefLink = create<IHrefLink>((set, get) => ({
    setLink: (index) => {
        const url:string|undefined = get().contact[index]?.url;
        if (url) {
            window.open(url)
        } else {
            console.error("ошибка ")
        }
    },
    contact
}))



interface CardImage {
    setFlag: (index: number) => void
  }
  
  export const CardImage = create<CardImage>(() => ({
    setFlag: (index: number) => {
      // Логика может быть добавлена при необходимости
      console.log(`Position set for index: ${index}`)
    }
  }))