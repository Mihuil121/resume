import { create } from 'zustand'
import { music } from '@/components/music/musicT'

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
    play:false,
    setPlay:()=>set((state)=>({play: !state.play}))
}))