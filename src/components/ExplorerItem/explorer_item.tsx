import React from "react"

interface ExplorerItemType {
    first_item: any,
    second_item: any,
    third_item: any
}

const ExplorerItem = ({ first_item, second_item, third_item }: ExplorerItemType) => (
    <div className="w-full h-9 px-4 gap-2.5 flex">
        <div className="w-5 flex-2 flex items-center text-zinc-500">
            {first_item}
        </div>

        <div className="flex-2 flex w-5 items-center text-zinc-500">
            {second_item}
        </div>

        <div className="flex-1 flex text-sm items-center text-white">
            {third_item}
        </div>
    </div>
)

export default ExplorerItem;