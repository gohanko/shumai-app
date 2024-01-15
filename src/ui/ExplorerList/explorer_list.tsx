import React from 'react'

interface ExplorerListType {
    children: any,
    onClick?: any,
}

const ExplorerList = ({ children, onClick}: ExplorerListType) => (
    <div className='grow min-h-0'>
        <div
            className="grow h-0 min-h-full border-solid border-t border-zinc-700 overflow-y-scroll overflow-x-hidden scroll-smooth  "
            onClick={onClick}
        >
            { children }
        </div>
    </div>
)

export default ExplorerList