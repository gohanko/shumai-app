import React from "react";

type ExplorerToolbarType = {
    children: React.ReactNode
}

const ExplorerToolbar = ({ children }: ExplorerToolbarType) => (
    <div className='h-10'>
        { children }
    </div>
)

export default ExplorerToolbar;