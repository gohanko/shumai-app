import { StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

interface TabType {
    id: string,
    collection_id: string
}

interface TabsSliceType {
    open_tabs: Array<TabType>,
    selected_tab_id: string,
    createTab: any,
    selectTab: any,
    deleteTab: any,
}

const createOpenTabsSlice: StateCreator<TabsSliceType> = (set: any) => ({
    open_tabs: [],
    selected_tab_id: '',
    createTab: (collection_id: string) => set(
        produce((draft: any) => {
            draft.open_tabs.push({
                id: uuidv4(),
                collection_id: collection_id
            })
        })
    ),
    selectTab: (id: string) => set(
        produce((draft: any) => {
            draft.selected_tab_id = id
        })
    ),
    deleteTab: (id: string) => set(
        produce((draft: any) => {
            const to_delete_index = draft.open_tabs.findIndex((open_tab: TabType) => open_tab.id === id)

            if (to_delete_index < -1) {
                return
            }

            draft.open_tabs.splice(to_delete_index, 1)
        })
    )
})

export type {
    TabsSliceType
}

export {
    createOpenTabsSlice
}