import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { CollectionsSliceType, createCollectionsSlice } from './collections';
import { CollectionItemsSliceType, createCollectionItemsSlice } from './collection_items';

const useCollectionStore = create<CollectionsSliceType & CollectionItemsSliceType>()(
    devtools(
        immer(
            persist(
                (...set) => ({
                    ...createCollectionsSlice(...set),
                    ...createCollectionItemsSlice(...set),
                }),
                {
                    name: 'collection-storage'
                }
            )
        )
    )
)

export default useCollectionStore;
