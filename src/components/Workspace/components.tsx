import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";

interface TabHeaderProp {
    label: string,
    isActive?: boolean,
}

const TabHeader = ({ label, isActive }: TabHeaderProp) => (
    <div className={"w-40 h-10 pl-2 flex bg-zinc-900 items-center border-solid border-r border-r-zinc-700 " + (isActive ? "border-t-2 border-t-green-500": "")}>
        <p className="flex-1 text-xs text-white font-['inter']">{ label }</p>
        <IconButton item={<FontAwesomeIcon icon={faXmark} />} />
    </div>
)

const Workspace = () => (
    <div className='w-full flex-2 flex flex-col bg-zinc-900 border-solid border-t border-zinc-700'>
        <div className="w-full h-10 flex">
            <TabHeader label="New Tab"/>
            <TabHeader label="New Tab" isActive={true} />
        </div>

        <div className="w-full h-full border-solid border-t border-zinc-700">

        </div>
    </div>
)

export default Workspace