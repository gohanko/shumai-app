import React from "react";

type ListToolbarType = {
    children: React.ReactNode
}

const ListToolbar = ({ children }: ListToolbarType) => (
    <div className='h-10'>
        { children }
    </div>
)

export default ListToolbar;