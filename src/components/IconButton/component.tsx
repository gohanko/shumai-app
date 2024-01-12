import React from "react";

interface IconButtonProps {
    item: any,
};

const IconButton = ({ item }: IconButtonProps) => (
    <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-lg cursor-pointer">
            {item}
        </div>
    </div>
);

export default IconButton