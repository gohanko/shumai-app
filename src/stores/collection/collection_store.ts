import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { CollectionsSliceType, createCollectionsSlice } from './collections';

type CollectionStoreType = CollectionsSliceType;

const useCollectionStore = create<CollectionStoreType>()(
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

export type {
    CollectionStoreType
}

export default useCollectionStore;
