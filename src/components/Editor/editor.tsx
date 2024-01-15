import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";
import { useCollectionStore, useInterfaceStore } from "stores";
import { getCollectionFromId } from "stores/collection/collections";

interface TabProp {
    tab_id: string,
    label: string,
    isActive?: boolean,
    onClick?: any
}

const Tab = ({ tab_id, label, isActive, onClick }: TabProp) => {
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
                item={<FontAwesomeIcon icon={faXmark} />}
                onClick={() => deleteTab(tab_id)}
            />
        </div>
    )
}

interface TabListProp {
    children: any
}

const TabList = ({ children }: TabListProp) => (
    <div className="flex-none grow min-w-0 h-10">
        <div className="grow w-0 min-w-full overflow-x-scroll flex">
            { children }
        </div>
    </div>
)

interface TabPanelProps {
    children?: any
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

    const selectedTab = tabList.find((tab) => tab.id === activeTabID)
    let selected_collection
    if (selectedTab) {
        selected_collection = getCollectionFromId(collections, selectedTab.collectionId)
    }

    return (
        <div className='w-full flex-1 flex flex-col bg-zinc-900 border-solid border-t border-zinc-700'>
            <TabList>
                { tabList.map((tab) => {
                    const collection = getCollectionFromId(collections, tab.collectionId)
                    if (!collection) {
                        return;
                    }

                    return (
                        <Tab
                            key={tab.id}
                            tab_id={tab.id}
                            label={collection.name}
                            isActive={tab.id === activeTabID}
                            onClick={ (event: any) => {
                                event.preventDefault();
                        
                                if (event.target === event.currentTarget) {
                                    selectTab(tab.id);
                                }
                            }}
                        />
                    )
                })}
            </TabList>

            <div className="w-full h-full border-solid border-t border-zinc-700">
                <TabPanel>
                    {selected_collection && selected_collection.name}
                </TabPanel>
            </div>
        </div>
    )
}

export default Editor