import React from 'react'

interface ExplorerListType {
    children: any,
    onClick?: any,
}

const ExplorerList = ({ children, onClick}: ExplorerListType) => (
    <div
        className="flex-1 border-solid border-t border-zinc-700"
        onClick={onClick}
    >
        { children }
    </div>
)

export default ExplorerList