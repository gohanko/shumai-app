import React from 'react'

type ContextMenuItemProps = {
    label: string,
    className?: string,
    help: string,
}

const ContextMenuItem = ({
    label,
    className,
    help
}: ContextMenuItemProps) => (
    <div className="w-full h-7 px-2.5 py-1 gap-1 flex rounded hover:bg-zinc-700 cursor-pointer align-middle">
        <div className={"flex-1 text-white text-xs font-semibold flex items-center " + className}>
            <p className="">{ label }</p>
        </div>

        <div className={"flex-2 text-zinc-600 text-xs font-semibold flex items-center " }>
            { help }
        </div>
    </div>
)

type ContextMenuProps = {
    items: Array<ContextMenuItemProps>,
}

const ContextMenu = ({ items }: ContextMenuProps) => (
    <div role="tooltip" className={`absolute translate-x-1/2 w-52 bg-zinc-900 p-2.5 flex flex-col border-solid border border-zinc-700 rounded-md`}>
        { items.map((item) => (<ContextMenuItem label={item.label} className={item.className} help={item.help} />)) }
    </div>
)

export default ContextMenu