import React from "react";
import TinySidebarIcon from "../TinySidebarIcon/component";
import { TINY_SIDEBAR_NAVIGATION_ITEMS } from "./constants";

const TinySidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-10 m-0 flex flex-col bg-zinc-800">
            { TINY_SIDEBAR_NAVIGATION_ITEMS.map((item) => <TinySidebarIcon icon={item.icon} tooltip_label={item.tooltip_label} />) }
        </div>
    )
}

export default TinySidebar;
