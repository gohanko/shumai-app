import React from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type TabListProps = {
    children: React.ReactNode
}

const TabList = ({ children }: TabListProps) => (
    <div className="flex-none grow min-w-0 h-10 scrollbar-thumb-zinc-700 scrollbar-thin">
        <OverlayScrollbarsComponent
            element="span"
            options={{
                scrollbars: {
                    theme: 'scrollbar-custom-theme',
                    autoHide: 'leave',
                    autoHideDelay: 1300,
                    autoHideSuspend: false,
                    dragScroll: true,
                    clickScroll: false,
                } 
            }}
            defer
        >
                <div className="flex-none grow h-10 w-0 min-w-full flex">
                    { children }
                </div>
        </OverlayScrollbarsComponent>
    </div>
)

export default TabList;