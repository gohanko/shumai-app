import React from "react";
import TinySidebarIcon from "../TinySidebarIcon/component";
import { TINY_SIDEBAR_NAVIGATION_ITEMS } from "./constants";

const TinySidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-10 m-0">
            <div className={'h-10 bg-zinc-700'}>
            </div>
            <div className={'h-full bg-zinc-800 border-r border-solid border-zinc-700'}>
                { TINY_SIDEBAR_NAVIGATION_ITEMS.map((item) => <TinySidebarIcon icon={item.icon} tooltip_label={item.tooltip_label} />) }
            </div>
        </div>
    )
}

export default TinySidebar;
