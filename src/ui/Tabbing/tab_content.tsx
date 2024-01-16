import React from "react"

type TabPanelProps = {
    children?: React.ReactNode
}

const TabContent = ({ children }: TabPanelProps) => (
    <div className="w-full h-full border-solid border-t border-zinc-700">
        { children }
    </div>
)

export default TabContent;