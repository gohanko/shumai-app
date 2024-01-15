import React from "react";

interface ExplorerToolbarType {
    children: any
}

const ExplorerToolbar = ({ children }: ExplorerToolbarType) => (
    <div className='h-10'>
        { children }
    </div>
)


export default ExplorerToolbar;