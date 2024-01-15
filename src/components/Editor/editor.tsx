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
            className={"w-40 h-10 pl-2 flex-none flex bg-zinc-900 items-center border-solid border-r border-r-zinc-700 " + (isActive ? "border-t-2 border-t-green-500": "")}
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
    const open_tabs = useInterfaceStore((state) => state.open_tabs);
    const selected_tab_id = useInterfaceStore((state) => state.selected_tab_id);
    const selectTab = useInterfaceStore((state) => state.selectTab);

    const selected_tab = open_tabs.find((open_tab) => open_tab.id === selected_tab_id)
    let selected_collection
    if (selected_tab) {
        selected_collection = getCollectionFromId(collections, selected_tab.collection_id)
    }

    return (
        <div className='w-full flex-1 flex flex-col bg-zinc-900 border-solid border-t border-zinc-700'>
            <TabList>
                { open_tabs.map((open_tab) => {
                    const collection = getCollectionFromId(collections, open_tab.collection_id)

                    return (
                        <Tab
                            tab_id={open_tab.id}
                            label={collection.name}
                            isActive={open_tab.id === selected_tab_id}
                            onClick={ (event: any) => {
                                event.preventDefault();
                        
                                if (event.target === event.currentTarget) {
                                    selectTab(open_tab.id);
                                }
                            }}
                        />
                    )
                }
                )}
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