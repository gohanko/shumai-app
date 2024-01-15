import React from "react"

interface ListItemType {
    item_1: any,
    item_2: any,
    item_3: any,
    item_4?: any,
    onClick?: any,
}

const ListItem = ({ item_1, item_2, item_3, item_4, onClick }: ListItemType) => (
    <div className="w-full h-9 px-4 gap-2.5 flex hover:bg-zinc-700 cursor-pointer" onClick={onClick}>
        <div className="w-5 flex-2 flex items-center text-zinc-500">
            {item_1}
        </div>

        <div className="flex-2 flex w-5 items-center text-zinc-500">
            {item_2}
        </div>

        <div className="flex-1 flex text-sm items-center text-white select-none">
            {item_3}
        </div>

        <div className="flex-2 flex items-center text-zinc-500">
            {item_4}
        </div>
    </div>
)


export default ListItem;