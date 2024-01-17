import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type CollectionBrowserStoreType = {
    isOpenNewInput: boolean,
    actions: {
        setIsOpenNewInput: (value: boolean) => void,
    }
}

const useCollectionBrowserStore = create<CollectionBrowserStoreType>()(
    devtools(
        (set) => (({
            isOpenNewInput: false,
            actions: {
                setIsOpenNewInput: (value: boolean) => set(() => ({ isOpenNewInput: value })),
            }
        })),
    )
)

export const useCollectionBrowser = () => useCollectionBrowserStore(state => state.isOpenNewInput);

export const useCollectionBrowserActions = () => useCollectionBrowserStore(state => state.actions)
