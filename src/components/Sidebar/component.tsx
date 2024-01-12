import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faLaptopCode, faPuzzlePiece, faGear } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";

const Sidebar = () => (
    <div className="w-10 h-full flex flex-col bg-zinc-900 border-solid border-r-2 border-zinc-700">
        <div className="flex-1">
            <IconButton item={<FontAwesomeIcon icon={faCubes} />} />
            <IconButton item={<FontAwesomeIcon icon={faLaptopCode} />} />
            <IconButton item={<FontAwesomeIcon icon={faPuzzlePiece} />} />
        </div>
        <div className="flex-1 flex items-end">
            <IconButton item={<FontAwesomeIcon icon={faGear} />} />
        </div>
    </div>
)

export default Sidebar;
