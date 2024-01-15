import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CreationModalSliceType, createCreationModalSlice } from "./creation_modal";
import { ExplorerSliceType, createExplorerSlice } from "./explorer";
import { TabsSliceType, createOpenTabsSlice } from './open_tabs';

const useInterfaceStore = create<CreationModalSliceType & ExplorerSliceType & TabsSliceType>()(
    devtools(
        persist(
            (...set) => ({
                ...createCreationModalSlice(...set),
                ...createExplorerSlice(...set),
                ...createOpenTabsSlice(...set),
            }),
            {
                name: 'interface-storage'
            }
        )
    )
)

export default useInterfaceStore;