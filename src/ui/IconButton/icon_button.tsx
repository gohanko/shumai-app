import React from "react";

type IconButtonProps = {
    icon: JSX.Element,
    isActive?: boolean,
    onClick?: () => void,
};

const IconButton = ({ icon, isActive, onClick }: IconButtonProps) => (
    <div className={"w-10 h-10 flex items-center justify-center " + (isActive ? "border-l-2 border-l-green-500": "")}>
        <div
            className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700 text-zinc-500 rounded-lg cursor-pointer"
            onClick={onClick}
        >
            {icon}
        </div>
    </div>
);

export default IconButton