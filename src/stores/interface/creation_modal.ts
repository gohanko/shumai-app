import { StateCreator } from 'zustand'

interface CreationModalSliceType {
    isCreationModalOpen: boolean,
    toggleCreationModal: () => void
    closeCreationModal: () => void
}

const createCreationModalSlice: StateCreator<CreationModalSliceType> = (set: any) => ({
    isCreationModalOpen: false,
    toggleCreationModal: () => set((state: any) => ({ isCreationModalOpen: !state.isCreationModalOpen })),
    closeCreationModal: () => set((state: any) => ({ isCreationModalOpen: false })),
})

export type {
    CreationModalSliceType
}

export {
    createCreationModalSlice
}