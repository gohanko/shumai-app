import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface CollectionType {
    id: string,
    name: string,
}

interface CollectionsSliceType {
    collections: CollectionType[],
    initializeCollection: any,
    createCollection: any,
    deleteCollection: any,
}

const createCollectionsSlice: StateCreator<CollectionsSliceType> = (set: any) => ({
    collections: [],
    initializeCollection: () => set(
        produce((draft: any) => {
            if (!draft.collections.length) {
                draft.collections.push({
                    id: 'default-collection',
                    name: 'Default Collection',
                })
            }
        })
    ),
    createCollection: (name: string) => set(
        produce((draft: any) => {
            draft.collections.push({
                id: uuidv4(),
                name: name,
            })
        })
    ),
    updateCollection: (new_collection: CollectionType) => set(
        produce((draft: any) => {
            const collection = draft.collections.find((collection: CollectionType) => collection.id === new_collection.id);
            if (!collection) {
                throw new Error('Collection does not exist.')
            }

            collection.name = new_collection.name
        })
    ),
    deleteCollection: (id: string) => set(
        produce((draft: any) => {
            draft.collections = draft.collections.filter((collection: CollectionType) => collection.id !== id)
        })
    )
})

export type {
    CollectionsSliceType
}

export {
    createCollectionsSlice,
}