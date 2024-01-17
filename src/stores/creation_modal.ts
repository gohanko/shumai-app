import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type CreationModalStore = {
    isOpen: boolean,
    actions: {
        toggle: () => void
        close: () => void
    }
}

const useCreationModalStore = create<CreationModalStore>()(
    devtools(
        (set) => ({
            isOpen: false,
            actions: {
                toggle: () => set((state: CreationModalStore) => ({ isOpen: !state.isOpen })),
                close: () => set(() => ({ isOpen: false })),
            }
        })
    )
)

export const useCreationModal = () => useCreationModalStore(state => state.isOpen)
export const useCreationModalActions = () => useCreationModalStore(state => state.actions);