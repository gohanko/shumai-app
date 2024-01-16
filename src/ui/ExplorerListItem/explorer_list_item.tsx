import React from "react"

interface ExplorerListItemNavigationIconType {
    icon: any,
    onClick?: any
}

const ExplorerListItemNavigationIcon = ({ icon, onClick }: ExplorerListItemNavigationIconType) => (
    <div
        className="w-5 flex-2 flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
);

interface ExplorerListItemLabelType {
    item_1: any,
    item_2: any,
    onClick?: any
}

const ExplorerListItemLabel = ({ item_1, item_2, onClick }: ExplorerListItemLabelType) => (
    <div
        className="flex-1 h-9 gap-2.5 flex"
        onClick={onClick}
    >
        <div className="flex-initial flex w-5 items-center text-zinc-500">
            {item_1}
        </div>

        <div className="flex-1 flex w-16 text-sm items-center text-white select-none">
            <p className="truncate">{item_2}</p>
        </div>
    </div>
)

interface ExplorerListItemOptionType {
    icon: any,
    onClick?: any
}

const ExplorerListItemOption = ({ icon, onClick }: ExplorerListItemOptionType) => (
    <div
        className="w-10 flex-initial flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
)

interface ExplorerListItemType {
    navigationIcon: any,
    navigationIconOnClick?: any,
    labelItem1: any,
    labelItem2: any,
    labelOnClick?: any,
    optionIcon?: any,
    optionIconOnClick?: any,
}

const ExplorerListItem = ({
    navigationIcon,
    navigationIconOnClick,
    labelItem1,
    labelItem2,
    labelOnClick,
    optionIcon,
    optionIconOnClick
}: ExplorerListItemType) => {
    
    
    return (
        <div className="w-80 h-9 pl-4 gap-2.5 flex hover:bg-zinc-800 cursor-pointer">
            <ExplorerListItemNavigationIcon
                icon={navigationIcon}
                onClick={navigationIconOnClick}
            />
            <ExplorerListItemLabel
                item_1={labelItem1}
                item_2={labelItem2}
                onClick={labelOnClick}
            />
            <ExplorerListItemOption
                icon={optionIcon}
                onClick={optionIconOnClick}
            />
        </div>
    )
}

export default ExplorerListItem;