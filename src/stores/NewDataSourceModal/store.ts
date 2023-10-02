import { create } from 'zustand'

export type NewDataSourceModalnState = {
    isModalOpen: boolean,
    toggleIsModalOpen: () => void
}

const useNewDataSourceModalStore = create((set) => ({
    isModalOpen: false,
    toggleIsModalOpen: () => set((state: any) => ({ isModalOpen: !state.isModalOpen })),
}))

export default useNewDataSourceModalStore