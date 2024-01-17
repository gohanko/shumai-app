import React from "react"

type ListItemNavigationIconType = {
    icon: JSX.Element,
    onClick?: () => void
}

const ListItemNavigationIcon = ({ icon, onClick }: ListItemNavigationIconType) => (
    <div
        className="w-5 flex-2 flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
);

type ListItemLabelType = {
    icon: JSX.Element,
    text: string | JSX.Element,
    onClick?: () => void
}

const ListItemLabel = ({ icon, text, onClick }: ListItemLabelType) => (
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

type ListItemOptionType = {
    icon: JSX.Element,
    onClick?: () => void
}

const ListItemOption = ({ icon, onClick }: ListItemOptionType) => (
    <div
        className="w-10 flex-initial flex items-center text-zinc-500"
        onClick={onClick}
    >
        {icon}
    </div>
)

type ListItemType = {
    navigationIcon: JSX.Element,
    onClickNavigationIcon?: () => void,
    labelIcon: JSX.Element,
    labelText: string | JSX.Element,
    onClickLabel?: () => void,
    optionIcon?: JSX.Element,
    onClickOptionIcon?: () => void,
}

const ListItem = ({
    navigationIcon,
    onClickNavigationIcon,
    labelIcon,
    labelText,
    onClickLabel,
    optionIcon,
    onClickOptionIcon
}: ListItemType) =>  (
    <div className="w-80 h-9 pl-4 gap-2.5 flex hover:bg-zinc-800 cursor-pointer">
        <ListItemNavigationIcon
            icon={navigationIcon}
            onClick={onClickNavigationIcon}
        />
        <ListItemLabel
            icon={labelIcon}
            text={labelText}
            onClick={onClickLabel}
        />
        <ListItemOption
            icon={optionIcon || <div />}
            onClick={onClickOptionIcon}
        />
    </div>
)

export default ListItem;