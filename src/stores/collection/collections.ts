import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface CollectionType {
    id: string,
    name: string,
    input?: string,
    category?: number,
    children: Array<CollectionType>
}

interface CollectionsSliceType {
    collections: CollectionType[],
    initializeCollection: any,
    createCollection: any,
    deleteCollection: any,
}

const default_collection_id = 'default-collection'

const createCollectionsSlice: StateCreator<CollectionsSliceType> = (set: any) => ({
    collections: [],
    initializeCollection: () => set(
        produce((draft: any) => {
            if (!draft.collections.length) {
                draft.collections.push({
                    id: default_collection_id,
                    name: 'Default Collection',
                    children: [],
                })
            }
        })
    ),
    createCollection: (name: string, input: string, category: number, parent: CollectionType) => set(
        produce((draft: any) => {
            const newCollection = {
                id: uuidv4(),
                name: name,
                input: input,
                category: category,
                children: []
            }
            
            parent
                ? parent.children.push(newCollection)
                : draft.collections.push(newCollection)
        })
    ),
    updateCollection: (new_collection: CollectionType) => set(
        produce((draft: any) => {
            const collection = draft.collections.find((collection: CollectionType) => collection.id === new_collection.id);
            if (!collection) {
                throw new Error('Collection does not exist.')
            }

            collection.name = new_collection.name
            collection.input = new_collection.input
            collection.category = new_collection.category
            collection.children = new_collection.children
        })
    ),
    deleteCollection: (id: string) => set(
        produce((draft: any) => {
            draft.collections = draft.collections.filter((collection: CollectionType) => collection.id !== id)
        })
    )
})

const getCollectionFromId = (collections: Array<CollectionType>, id: string) => {
    return collections.find((collection) => collection.id === id)
}

export type {
    CollectionType,
    CollectionsSliceType
}

export {
    createCollectionsSlice,
    getCollectionFromId,
}