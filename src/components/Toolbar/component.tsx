import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft, faArrowRight, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faArrowLeft, faArrowRight)

const ToolbarNavigation = () => (
    <div className="flex-2 flex h-10">
        <ToolbarItem item={<FontAwesomeIcon className="text-zinc-500" icon={faBars} />} />
        <ToolbarItem item={<FontAwesomeIcon className="text-zinc-500" icon={faArrowLeft} />} />
        <ToolbarItem item={<FontAwesomeIcon className="text-zinc-500" icon={faArrowRight} />} />
    </div>
);

const ToolbarSearch = () => (
    <div className="flex-1 h-10 flex items-center justify-center">
        <div className="w-52 h-6 px-8 bg-zinc-800 border-solid border-2 border-zinc-700 rounded-md flex items-center justify-center cursor-pointer">
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
    <div className="flex-2 flex h-10">
        <ToolbarItem item={<FontAwesomeIcon className="text-zinc-500" icon={faBell} />} />
        <ToolbarItem item={<div className="w-5 h-5 bg-white rounded-full"></div>} />
    </div>
);

interface ToolbarItemProps {
    item: any,
};

const ToolbarItem = ({ item }: ToolbarItemProps) => (
    <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-lg cursor-pointer">
            {item}
        </div>
    </div>
);

const Toolbar = () => (
    <div className="flex h-10 bg-zinc-900 border-solid border-b-2 border-zinc-700">
        <ToolbarNavigation />
        <ToolbarSearch />
        <ToolbarNotificationAndAccount />
    </div>
)

export default Toolbar;