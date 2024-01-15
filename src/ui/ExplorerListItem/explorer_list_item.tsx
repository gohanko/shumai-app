import React from "react"


interface ExplorerListItemType {
    item_1: any,
    item_2: any,
    item_3: any,
    item_4?: any,
    onClick?: any,
}

const ExplorerListItem = ({ item_1, item_2, item_3, item_4, onClick }: ExplorerListItemType) => (
    <div className="w-80 h-9 pl-4 flex hover:bg-zinc-800 cursor-pointer">
        <div className="flex-1 h-9 gap-2.5 flex" onClick={onClick}>
            <div className="w-5 flex-2 flex items-center text-zinc-500">
                {item_1}
            </div>

            <div className="flex-initial flex w-5 items-center text-zinc-500">
                {item_2}
            </div>

            <div className="flex-1 flex w-16 text-sm items-center text-white select-none">
                <p className="truncate">{item_3}</p>
            </div>

        </div>

        { item_4 &&
            <div className="flex-initial flex items-center text-zinc-500">
                {item_4}
            </div>
        }
    </div>
)


export default ExplorerListItem;