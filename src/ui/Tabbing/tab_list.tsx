import React from "react"

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

export default TabList;