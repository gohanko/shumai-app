import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface CollectionItemType {
    id: string,
    name: string,
    input: string,
    category: number,
    collection_list_id: string,
}

interface CollectionItemsSliceType {
    collection_items: CollectionItemType[],
    createCollectionItem: any,
}

const createCollectionItemsSlice: StateCreator<CollectionItemsSliceType> = (set: any) => ({
    collection_items: [],
    createCollectionItem: (input: string, category: number) => set(
        produce((draft: any) => {
            draft.collection_items.push({
                id: uuidv4(),
                name: input,
                input: input,
                category: category,
            })
        })
    ),
    updateCollectionItem: (new_collection_item: CollectionItemType) => set(
        produce((draft: any) => {
            const collection_item = draft.collection_items.find((collection_item: CollectionItemType) => collection_item.id === new_collection_item.id);
            if (!collection_item) {
                throw new Error('Collection Item does not exist.');
            }

            collection_item.name = new_collection_item.name;
            collection_item.input = new_collection_item.input;
            collection_item.category = new_collection_item.category;
        })
    ),
    deleteCollection: (id: string) => set(
        produce((draft: any) => {
            draft.collection_items = draft.collection_items.filter((collection_item: CollectionItemType) => collection_item.id !== id)
        })
    )
})

const getCollectionItem = (collection_items: Array<CollectionItemType>, collection_list_id: string) => {
    return collection_items.filter((collection_item) => collection_item.collection_list_id === collection_list_id)
}

export type {
    CollectionItemsSliceType
}

export {
    createCollectionItemsSlice,
    getCollectionItem
}