import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faLaptopCode, faPuzzlePiece, faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import IconButton from "ui/IconButton";

const Sidebar = () => (
    <div className="w-10 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700">
        <div className="flex-1">
            <NavLink to={'workspace/'}>
                { ({ isActive }: any) => (<IconButton item={<FontAwesomeIcon icon={faCubes} className="w-5 h-5"/>} isActive={isActive} />)}
            </NavLink>
            <NavLink to={'variables/'}>
                { ({ isActive }: any) => (<IconButton item={<FontAwesomeIcon icon={faLaptopCode} className="w-5 h-5" />} isActive={isActive} />)}
            </NavLink>

            <NavLink to={'plugins/'}>
                { ({ isActive }: any) => (<IconButton item={<FontAwesomeIcon icon={faPuzzlePiece} className="w-5 h-5" />} isActive={isActive} />)}
            </NavLink>
        </div>
        <div className="flex-1 flex items-end">
            <NavLink to={'settings/'}>
            { ({ isActive }: any) => (<IconButton item={<FontAwesomeIcon icon={faGear} className="w-5 h-5" />} isActive={isActive} />)}
            </NavLink>
        </div>
    </div>
)

export default Sidebar;
