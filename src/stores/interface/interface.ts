import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CreationModalSliceType, createCreationModalSlice } from "./creation_modal";
import { ExplorerSliceType, createExplorerSlice } from "./explorer";
import { TabsSliceType, createTabsSlice } from './tabs';

type InterfaceStoreType = CreationModalSliceType & ExplorerSliceType & TabsSliceType

const useInterfaceStore = create<InterfaceStoreType>()(
    devtools(
        persist(
            (...set) => ({
                ...createCreationModalSlice(...set),
                ...createExplorerSlice(...set),
                ...createTabsSlice(...set),
            }),
            {
                name: 'interface-storage'
            }
        )
    )
)

export type {
    InterfaceStoreType
}

export default useInterfaceStore;