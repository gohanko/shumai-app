import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

type TabType = {
    id: string,
    collectionId: string
}

type TabsSliceType = {
    tabList: Array<TabType>,
    tabHistory: Array<string>,
    activeTabID: string,
    createTab: (collectionId: string) => void,
    selectTab: (tabId: string) => void,
    deleteTab: (tabId: string) => void,
}

const createTabsSlice: StateCreator<TabsSliceType> = (set) => ({
    tabList: [],
    tabHistory: [],
    activeTabID: '',
    createTab: (collectionId: string) => set(
        produce((draft: TabsSliceType) => {
            const newTab = {
                id: uuidv4(),
                collectionId: collectionId
            }

            draft.tabList.unshift(newTab)
            draft.activeTabID = newTab.id
            draft.tabHistory.push(newTab.id)
        })
    ),
    selectTab: (tabId: string) => set(
        produce((draft: TabsSliceType) => {
            draft.activeTabID = tabId
            draft.tabHistory.push(tabId)
        })
    ),
    deleteTab: (tabId: string) => set(
        produce((draft: TabsSliceType) => {
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
})

export type {
    TabsSliceType
}

export {
    createTabsSlice
}