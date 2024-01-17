import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

type CollectionType = {
    id: string,
    name: string,
    input?: string,
    category?: number,
    children: Array<CollectionType>
}

type CollectionStoreType = {
    collections: Array<CollectionType>,
    actions: {
        create: (name: string, input?: string, category?: number, parent?: CollectionType) => void,
        update: (new_collection: CollectionType) => void,
        delete: (id: string) => void,
    }
}

const useCollectionStore = create<CollectionStoreType>()(
    devtools(
        immer(
            persist(
                (set) => ({
                    collections: [{
                        id: 'default-collection',
                        name: 'Default Collection',
                        children: []
                    }],
                    actions: {
                        create: (name: string, input?: string, category?: number, parent?: CollectionType) => set(
                            produce((draft: CollectionStoreType) => {
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
                        update: (newCollection: CollectionType) => set(
                            produce((draft: CollectionStoreType) => {
                                const collection = draft.collections.find((collection: CollectionType) => collection.id === newCollection.id);
                                if (!collection) {
                                    throw new Error('Collection does not exist.')
                                }
                    
                                collection.name = newCollection.name
                                collection.input = newCollection.input
                                collection.category = newCollection.category
                                collection.children = newCollection.children
                            })
                        ),
                        delete: (id: string) => set(
                            produce((draft: CollectionStoreType) => {
                                draft.collections = draft.collections.filter((collection: CollectionType) => collection.id !== id)
                            })
                        )
                    }
                }),
                {
                    name: 'collection-storage',
                    getStorage: () => sessionStorage,
                    partialize: ({ actions, ...rest }: any) => rest
                }
            )
        )
    )
)

export const getCollectionFromId = (
    collections: Array<CollectionType>,
    id: string
) => collections.find((collection) => collection.id === id)

export const useCollection = () => useCollectionStore((state: CollectionStoreType) => state.collections)

export const useCollectionAction = () => useCollectionStore((state: CollectionStoreType) => state.actions)