import React from "react";
import { appWindow } from '@tauri-apps/api/window'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft, faArrowRight, faMagnifyingGlass, faBell, faXmark, faExpand, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import IconButton from "ui/IconButton";

const ToolbarNavigation = () => (
    <div data-tauri-drag-region className="flex-2 flex h-10">
        <IconButton icon={<FontAwesomeIcon icon={faBars} className="w-5 h-5" />} />
        <IconButton icon={<FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5"/>} />
        <IconButton icon={<FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/>} />
    </div>
);

const ToolbarSearch = () => (
    <div data-tauri-drag-region className="flex-1 h-10 flex items-center justify-center">
        <div className="w-52 h-6 px-8 bg-zinc-800 border-solid border border-zinc-700 rounded-md flex items-center justify-center cursor-pointer">
            <div className="w-5 h-6 flex items-center justify-center">
                <FontAwesomeIcon
                    width={12}
                    height={12}
                    className="text-zinc-500" 
                    icon={faMagnifyingGlass}
                />
            </div>

            <div className="h-6 flex items-center justify-center">
                <p className="text-zinc-500 text-xs font-['Inter']">Search Shumai</p>
            </div>
        </div>
    </div>
)

const ToolbarNotificationAndAccount = () => (
    <div data-tauri-drag-region className="flex-2 flex h-10">
        <IconButton icon={<FontAwesomeIcon icon={faBell} className="w-5 h-5"/>} />
        <IconButton icon={<div className="w-6 h-6 bg-white rounded-full"></div>} />
    </div>
);

const ToolbarWindowOptions = () => (
    <div data-tauri-drag-region className="flex-2 flex h-10">
        <IconButton
            icon={<FontAwesomeIcon icon={faWindowMinimize} />}
            onClick={() => appWindow.minimize()}
        />
        <IconButton
            icon={<FontAwesomeIcon icon={faExpand} />}
            onClick={() => appWindow.toggleMaximize()}
        />
        <IconButton
            icon={<FontAwesomeIcon icon={faXmark} />}
            onClick={() => appWindow.close()}    
        />
    </div>
)

const Toolbar = () => (
    <div data-tauri-drag-region className="flex h-10 bg-zinc-900">
        <ToolbarNavigation />
        <ToolbarSearch />
        <ToolbarNotificationAndAccount />

        { window.__TAURI__ &&
            <ToolbarWindowOptions />
        }
    </div>
)

export default Toolbar;