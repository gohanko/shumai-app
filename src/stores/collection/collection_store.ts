import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { CollectionsSliceType, createCollectionsSlice } from './collections';

const useCollectionStore = create<CollectionsSliceType>()(
    devtools(
        immer(
            persist(
                (...set) => ({
                    ...createCollectionsSlice(...set),
                }),
                {
                    name: 'collection-storage'
                }
            )
        )
    )
)

export default useCollectionStore;
