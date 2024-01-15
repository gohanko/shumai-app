import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface TabType {
    id: string,
    collectionId: string
}

interface TabsSliceType {
    tabList: Array<TabType>,
    tabHistory: Array<string>,
    activeTabID: string,
    createTab: any,
    selectTab: any,
    deleteTab: any,
}

const createTabsSlice: StateCreator<TabsSliceType> = (set: any) => ({
    tabList: [],
    tabHistory: [],
    activeTabID: '',
    createTab: (collectionId: string) => set(
        produce((draft: any) => {
            draft.tabList.push({
                id: uuidv4(),
                collectionId: collectionId
            })
        })
    ),
    selectTab: (tabId: string) => set(
        produce((draft: any) => {
            draft.activeTabID = tabId
            draft.tabHistory.push(tabId)
        })
    ),
    deleteTab: (tabId: string) => set(
        produce((draft: any) => {
            const tabToDelete = draft.tabList.find((open_tab: TabType) => open_tab.id === tabId)
            if (!tabToDelete) {
                throw new Error('Tab to delete not found.')
            }

            draft.tabHistory = draft.tabHistory.filter((tabId: string) => tabId !== tabToDelete.id)
            draft.activeTabID = draft.tabHistory.length
                ? draft.tabHistory.at(-1)
                : draft.tabList.at(0).id
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