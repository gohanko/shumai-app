import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CreationModalSliceType, createCreationModalSlice } from "./creation_modal";
import { ExplorerSliceType, createExplorerSlice } from "./explorer";
import { TabsSliceType, createTabsSlice } from './tabs';

const useInterfaceStore = create<CreationModalSliceType & ExplorerSliceType & TabsSliceType>()(
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

export default useInterfaceStore;