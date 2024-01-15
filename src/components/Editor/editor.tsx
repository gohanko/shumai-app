import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";
import { useInterfaceStore } from "stores";

interface TabProp {
    tab_id: string,
    label: string,
    isActive?: boolean,
}

const Tab = ({ tab_id, label, isActive }: TabProp) => {
    const deleteTab = useInterfaceStore(store => store.deleteTab)

    return (
        <div className={"w-40 h-10 pl-2 flex-none flex bg-zinc-900 items-center border-solid border-r border-r-zinc-700 " + (isActive ? "border-t-2 border-t-green-500": "")}>
            <p className="flex-1 text-xs text-white truncate font-['inter']">{ label }</p>
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
    children: any
}

const TabPanel = ({ children }: TabPanelProps) => (<div />)

const Editor = () => {
    const open_tabs = useInterfaceStore((state) => state.open_tabs);
    const selected_tab = useInterfaceStore((state) => state.selected_tab);
    
    return (
        <div className='w-full flex-1 flex flex-col bg-zinc-900 border-solid border-t border-zinc-700'>
            <TabList>
                { open_tabs.map((open_tab) => (
                    <Tab
                        tab_id={open_tab.id}
                        label="New Tab"
                        isActive={open_tab.id === selected_tab}
                    />
                ))}
            </TabList>

            <div className="w-full h-full border-solid border-t border-zinc-700">
                
            </div>
        </div>
    )
}

export default Editor