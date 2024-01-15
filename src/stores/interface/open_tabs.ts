import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface TabType {
    id: string,
}

interface TabsSliceType {
    open_tabs: Array<TabType>,
    selected_tab: string,
    createTab: any,
    deleteTab: any,
}

const createOpenTabsSlice: StateCreator<TabsSliceType> = (set: any) => ({
    open_tabs: [],
    selected_tab: '',
    createTab: () => set(
        produce((draft: any) => {
            draft.open_tabs.push({
                id: uuidv4(),
            })
        })
    ),
    selectTab: (id: string) => set(
        produce((draft: any) => {
            draft.selected_tab = id
        })
    ),
    deleteTab: (id: string) => set(
        produce((draft: any) => {
            draft.open_tabs = draft.open_tabs.filter((open_tab: TabType) => open_tab.id !== id)
        })
    )
})

export type {
    TabsSliceType
}

export {
    createOpenTabsSlice
}