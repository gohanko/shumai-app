import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CreationModalSliceType {
    isCreationModalOpen: boolean
    toggleCreationModal: () => void
    closeCreationModal: () => void
}

const creatCreationModalSlice: StateCreator<CreationModalSliceType> = (set: any) => ({
    isCreationModalOpen: false,
    toggleCreationModal: () => set((state: any) => ({ isCreationModalOpen: !state.isCreationModalOpen })),
    closeCreationModal: () => set((state: any) => ({ isCreationModalOpen: false })),
})

const useInterfaceStore = create<CreationModalSliceType>()(
    devtools(
        persist(
            (...a) => ({
                ...creatCreationModalSlice(...a),
            }),
            {
                name: 'interface-storage'
            }
        )
    )
)

export default useInterfaceStore;