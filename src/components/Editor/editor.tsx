import React from "react";
import { useCollectionStore, useInterfaceStore } from "stores";
import { getCollectionFromId } from "stores/collection/collections";
import { TabList, Tab, TabContent } from "ui/Tabbing";

const Editor = () => {
    const collections = useCollectionStore((state) => state.collections);
    const tabList = useInterfaceStore((state) => state.tabList);
    const activeTabID = useInterfaceStore((state) => state.activeTabID);
    const selectTab = useInterfaceStore((state) => state.selectTab);

    const generateTabListElements = () => {
        const tabListElements = tabList.map((tab) => {
            const collection = getCollectionFromId(collections, tab.collectionId)
            if (!collection) {
                return <></>
            }

            const tabElement = (
                <Tab
                    key={tab.id}
                    tabId={tab.id}
                    label={collection.name}
                    isActive={tab.id === activeTabID}
                    onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                
                        if (event.target === event.currentTarget) {
                            selectTab(tab.id);
                        }
                    }}
                />
            )
            
            return tabElement
        })

        return tabListElements;
    }

    const getActiveTabContent = () => {
        const selectedTab = tabList.find((tab) => tab.id === activeTabID)
        if (!selectedTab) return null

        return getCollectionFromId(collections, selectedTab.collectionId)
    }

    const tabListElements = generateTabListElements();
    const activeTabContent = getActiveTabContent()

    return (
        <div className='w-full flex-1 flex flex-col bg-zinc-900 border-solid border-t border-zinc-700'>
            <TabList>
                { tabListElements }
            </TabList>

            <TabContent>
                { activeTabContent && activeTabContent.name }
            </TabContent>
        </div>
    )
}

export default Editor