import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { CollectionType, CollectionsSliceType, createCollectionsSlice } from './collections';

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
    CollectionType,
    CollectionStoreType
}

export default useCollectionStore;
