import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";
import { useCollectionStore, useInterfaceStore } from "stores";
import { getCollectionFromId } from "stores/collection/collections";

type TabProps = {
    tabId: string,
    label: string,
    isActive?: boolean,
    onClick?: (event: React.MouseEvent) => void
}

const Tab = ({ tabId, label, isActive, onClick }: TabProps) => {
    const deleteTab = useInterfaceStore(store => store.deleteTab)

    return (
        <div
            className={"w-40 h-10 pl-2 flex-none flex bg-zinc-900 items-center border-solid border-r border-r-zinc-700 cursor-pointer " + (isActive ? "border-t-2 border-t-green-500": "")}
            onClick={onClick}
        >
            <p 
                className="flex-1 text-xs text-white truncate font-['inter']"
                onClick={onClick}
            >
                { label }
            </p>
            <IconButton
                icon={<FontAwesomeIcon icon={faXmark} />}
                onClick={() => deleteTab(tabId)}
            />
        </div>
    )
}

type TabListProps = {
    children: React.ReactNode
}

const TabList = ({ children }: TabListProps) => (
    <div className="flex-none grow min-w-0 h-10">
        <div className="grow w-0 min-w-full overflow-x-scroll flex">
            { children }
        </div>
    </div>
)

type TabPanelProps = {
    children?: React.ReactNode
}

const TabPanel = ({ children }: TabPanelProps) => (
    <div>
        { children }
    </div>
)

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
                    onClick={ (event: React.MouseEvent) => {
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

            <div className="w-full h-full border-solid border-t border-zinc-700">
                <TabPanel>
                    { activeTabContent && activeTabContent.name }
                </TabPanel>
            </div>
        </div>
    )
}

export default Editor