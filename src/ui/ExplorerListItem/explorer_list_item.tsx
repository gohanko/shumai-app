import React from "react"

type ExplorerListItemNavigationIconType = {
    icon: JSX.Element,
    onClick?: () => void
}

const ExplorerListItemNavigationIcon = ({ icon, onClick }: ExplorerListItemNavigationIconType) => (
    <div
        className="w-5 flex-2 flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
);

type ExplorerListItemLabelType = {
    icon: JSX.Element,
    text: string | JSX.Element,
    onClick?: () => void
}

const ExplorerListItemLabel = ({ icon, text, onClick }: ExplorerListItemLabelType) => (
    <div
        className="flex-1 h-9 gap-2.5 flex"
        onClick={onClick}
    >
        <div className="flex-initial flex w-5 items-center text-zinc-500">
            {icon}
        </div>

        <div className="flex-1 flex w-16 text-sm items-center text-white select-none">
            <p className="truncate">{text}</p>
        </div>
    </div>
)

type ExplorerListItemOptionType = {
    icon: JSX.Element,
    onClick?: () => void
}

const ExplorerListItemOption = ({ icon, onClick }: ExplorerListItemOptionType) => (
    <div
        className="w-10 flex-initial flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
)

type ExplorerListItemType = {
    navigationIcon: JSX.Element,
    navigationIconOnClick?: () => void,
    labelIcon: JSX.Element,
    labelText: string | JSX.Element,
    labelOnClick?: () => void,
    optionIcon?: JSX.Element,
    optionIconOnClick?: () => void,
}

const ExplorerListItem = ({
    navigationIcon,
    navigationIconOnClick,
    labelIcon,
    labelText,
    labelOnClick,
    optionIcon,
    optionIconOnClick
}: ExplorerListItemType) =>  (
    <div className="w-80 h-9 pl-4 gap-2.5 flex hover:bg-zinc-800 cursor-pointer">
        <ExplorerListItemNavigationIcon
            icon={navigationIcon}
            onClick={navigationIconOnClick}
        />
        <ExplorerListItemLabel
            icon={labelIcon}
            text={labelText}
            onClick={labelOnClick}
        />
        <ExplorerListItemOption
            icon={optionIcon || <div />}
            onClick={optionIconOnClick}
        />
    </div>
)

export default ExplorerListItem;