import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";
import { useTabActions } from "stores";

type TabProps = {
    tabId: string,
    label: string,
    isActive?: boolean,
    onClick?: (event: React.MouseEvent) => void
}

const Tab = ({ tabId, label, isActive, onClick }: TabProps) => {
    const tabActions = useTabActions()

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
                onClick={() => tabActions.delete(tabId)}
            />
        </div>
    )
}

export default Tab