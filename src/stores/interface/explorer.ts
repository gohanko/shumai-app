import { StateCreator } from 'zustand'

type ExplorerSliceType = {
    isAddNewCollection: boolean
    setIsAddNewCollection: (value: boolean) => void,
}

const createExplorerSlice: StateCreator<ExplorerSliceType> = (set) => ({
    isAddNewCollection: false,
    setIsAddNewCollection: (value: boolean) => set(() => ({ isAddNewCollection: value })),
})

export type {
    ExplorerSliceType
}

export {
    createExplorerSlice
}
