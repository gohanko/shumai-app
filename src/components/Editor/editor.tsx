import React from "react";
import { useCollection, getCollectionFromId, useTab, useTabActions } from "stores";
import { TabList, Tab, TabContent } from "ui/Tabbing";

const Editor = () => {
    const collections = useCollection()
    const { tabList, activeTabID } = useTab()
    const tabActions = useTabActions();

    const generateTabListElements = () => {
        const tabListElements = tabList.map((tab) => {
            const collection = getCollectionFromId(collections, tab.collectionId)
            if (!collection) {
                return <></>
            }

            const tabElement = (
                <Tab
                    key={tab.id}
                    label={collection.name}
                    isActive={tab.id === activeTabID}
                    onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                
                        if (event.target === event.currentTarget) {
                            tabActions.select(tab.id);
                        }
                    }}
                    onClickX={() => tabActions.delete(tab.id)}
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