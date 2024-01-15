import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";
import { useInterfaceStore } from "stores";

interface TabProp {
    label: string,
    isActive?: boolean,
}

const Tab = ({ label, isActive }: TabProp) => (
    <div className={"w-40 h-10 pl-2 flex bg-zinc-900 items-center border-solid border-r border-r-zinc-700 " + (isActive ? "border-t-2 border-t-green-500": "")}>
        <p className="flex-1 text-xs text-white font-['inter']">{ label }</p>
        <IconButton item={<FontAwesomeIcon icon={faXmark} />} />
    </div>
)

interface TabListProp {
    children: any
}

const TabList = ({ children }: TabListProp) => (
    <div className="w-full h-10 flex">
        { children }
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
                    <Tab label="New Tab" isActive={open_tab.id === selected_tab}/>
                ))}
            </TabList>

            <div className="w-full h-full border-solid border-t border-zinc-700">
                
            </div>
        </div>
    )
}

export default Editor