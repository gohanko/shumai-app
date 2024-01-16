import { StateCreator } from 'zustand'

type CreationModalSliceType = {
    isCreationModalOpen: boolean,
    toggleCreationModal: () => void
    closeCreationModal: () => void
}

const createCreationModalSlice: StateCreator<CreationModalSliceType> = (set) => ({
    isCreationModalOpen: false,
    toggleCreationModal: () => set((state: CreationModalSliceType) => ({ isCreationModalOpen: !state.isCreationModalOpen })),
    closeCreationModal: () => set(() => ({ isCreationModalOpen: false })),
})

export type {
    CreationModalSliceType
}

export {
    createCreationModalSlice
}