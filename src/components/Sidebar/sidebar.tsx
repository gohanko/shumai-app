import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faLaptopCode, faPuzzlePiece, faGear } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";

const Sidebar = () => (
    <div className="w-10 h-full flex-3 flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700">
        <div className="flex-1">
            <IconButton item={<FontAwesomeIcon icon={faCubes} className="w-5 h-5"/>} isActive={true} />
            <IconButton item={<FontAwesomeIcon icon={faLaptopCode} className="w-5 h-5" />} />
            <IconButton item={<FontAwesomeIcon icon={faPuzzlePiece} className="w-5 h-5" />} />
        </div>
        <div className="flex-1 flex items-end">
            <IconButton item={<FontAwesomeIcon icon={faGear} className="w-5 h-5" />} />
        </div>
    </div>
)

export default Sidebar;
