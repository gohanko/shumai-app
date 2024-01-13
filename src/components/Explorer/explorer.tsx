import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from '../IconButton'
import { useInterfaceStore } from '../../stores';

const Explorer = () => {
    const toggleCreationModal = useInterfaceStore((state) => state.toggleCreationModal)
    
    return (
        <div className='flex-2 w-80 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700'>
            <div className='h-10'>
                <IconButton
                    item={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            </div>

            <div className="flex-1 border-solid border-t border-zinc-700">

            </div>
        </div>
    )
}

export default Explorer