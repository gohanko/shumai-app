import React from "react";

type ListToolbarProps = {
    children: React.ReactNode
}

const ListToolbar = ({ children }: ListToolbarProps) => (
    <div className='h-10'>
        { children }
    </div>
)

export default ListToolbar;