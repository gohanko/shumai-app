import React from 'react'

type ListProps = {
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent) => void,
}

const List = ({ children, onClick}: ListProps) => (
    <div className='grow min-h-0' onClick={onClick}>
        <div
            className="grow h-0 min-h-full border-solid border-t border-zinc-700 overflow-y-scroll overflow-x-hidden scrollbar-thumb-rounded-full   scrollbar-thumb-zinc-700 scrollbar-thin  "
            onClick={onClick}
        >
            { children }
        </div>
    </div>
)

export default List