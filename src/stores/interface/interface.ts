import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CreationModalSliceType, createCreationModalSlice } from "./creation_modal";
import { ExplorerSliceType, createExplorerSlice } from "./explorer";

const useInterfaceStore = create<CreationModalSliceType & ExplorerSliceType>()(
    devtools(
        persist(
            (...set) => ({
                ...createCreationModalSlice(...set),
                ...createExplorerSlice(...set),
            }),
            {
                name: 'interface-storage'
            }
        )
    )
)

export default useInterfaceStore;