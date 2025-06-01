import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

type TabType = {
    id: string,
    collectionId: string
}

type TabStoreType = {
    tabList: Array<TabType>,
    tabHistory: Array<string>,
    activeTabID: string,
    actions: {
        create: (collectionId: string) => void,
        select: (tabId: string) => void,
        delete: (tabId: string) => void,
    }
}

const useTabStore = create<TabStoreType>()(
    devtools(
        persist(
            (set) => ({
                tabList: [],
                tabHistory: [],
                activeTabID: '',
                actions: {
                    create: (collectionId: string) => set(
                        produce((draft: TabStoreType) => {
                            const newTab = {
                                id: uuidv4(),
                                collectionId: collectionId
                            }
                
                            draft.tabList.unshift(newTab)
                            draft.activeTabID = newTab.id
                            draft.tabHistory.push(newTab.id)
                        })
                    ),
                    select: (tabId: string) => set(
                        produce((draft: TabStoreType) => {
                            draft.activeTabID = tabId
                            draft.tabHistory.push(tabId)
                        })
                    ),
                    delete: (tabId: string) => set(
                        produce((draft: TabStoreType) => {
                            const tabToDelete = draft.tabList.find((open_tab: TabType) => open_tab.id === tabId)
                            if (!tabToDelete) {
                                throw new Error('Tab to delete not found.')
                            }
                
                            draft.tabHistory = draft.tabHistory.filter((tabId: string) => tabId !== tabToDelete.id)
                            const newActiveTabID = draft.tabHistory.length
                                ? draft.tabHistory.at(-1)
                                : draft.tabList.at(0)?.id
                
                            draft.activeTabID = newActiveTabID || ''
                            draft.tabList = draft.tabList.filter((tab: TabType) => tab.id !== tabToDelete.id);
                        })
                    )
                }
            }),
            {
                name: 'tab-storage',
                getStorage: () => sessionStorage,
                partialize: ({ actions, ...rest }: any) => rest
            }
        )
    )
)

export const useTab = () => useTabStore((state: TabStoreType) => ({
    tabList: state.tabList,
    tabHistory: state.tabHistory,
    activeTabID: state.activeTabID,
}))

export const useTabActions = () => useTabStore((state: TabStoreType) => state.actions)