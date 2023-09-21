import React from 'react'
import { TinySidebarIconProps } from './types'

const TinySidebarIcon = ({ icon, tooltip_label = 'Default Tooltip Label' }: TinySidebarIconProps) => {
    return (
        <div className='relative flex items-center justify-center h-10 w-10 mb-2 mx-auto shadow-lg text-white group cursor-pointer'>
            { icon }

            <span className='absolute w-auto p-2 m-1 min-w-max left-10 rounded-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                { tooltip_label }
            </span>
        </div>
    )
}

export default TinySidebarIcon