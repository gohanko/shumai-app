import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { CollectionListSliceType, createCollectionListSlice } from './collection_list';
import { CollectionItemListSliceType, createCollectionItemListSlice } from './collection_item_list';

const useCollectionStore = create<CollectionListSliceType & CollectionItemListSliceType>()(
    devtools(
        immer(
            persist(
                (...set) => ({
                    ...createCollectionListSlice(...set),
                    ...createCollectionItemListSlice(...set),
                }),
                {
                    name: 'collection-storage'
                }
            )
        )
    )
)

export default useCollectionStore;
