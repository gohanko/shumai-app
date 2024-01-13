import { StateCreator } from 'zustand'

interface ExplorerSliceType {
    isAddNewCollection: boolean
    setIsAddNewCollection: any,
}

const createExplorerSlice: StateCreator<ExplorerSliceType> = (set: any) => ({
    isAddNewCollection: false,
    setIsAddNewCollection: (value: boolean) => set((state: any) => ({ isAddNewCollection: value })),
})

export type {
    ExplorerSliceType
}

export {
    createExplorerSlice
}
