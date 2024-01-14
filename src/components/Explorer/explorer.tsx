import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faFolderOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from 'ui/IconButton'
import { useCollectionStore, useInterfaceStore } from 'stores';
import ExplorerInput from '../ExplorerInput';
import ExplorerItem from '../ExplorerItem';

const Explorer = () => {
    const collections = useCollectionStore((state: any) => state.collections)
    const toggleCreationModal = useInterfaceStore((state: any) => state.toggleCreationModal)
    const isAddNewCollection = useInterfaceStore((state: any) => state.isAddNewCollection)
    const setIsAddNewCollection = useInterfaceStore((state: any) => state.setIsAddNewCollection)

    // Handles onClick but don't propagate it to children.
    const handleOnClick = (event: any) => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            setIsAddNewCollection(false);
        }
    }
    
    return (
        <div className='flex-2 w-80 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700'>
            <div className='h-10'>
                <IconButton
                    item={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            </div>

            <div
                className="flex-1 border-solid border-t border-zinc-700"
                onClick={handleOnClick}
            >
                { collections.map((collection: any) => 
                    <ExplorerItem
                        first_item={<FontAwesomeIcon icon={faAngleRight} />}
                        second_item={<FontAwesomeIcon icon={faFolderOpen} />}
                        third_item={collection.name}
                    />
                )}

                { isAddNewCollection &&
                <ExplorerInput /> 
                }
            </div>
        </div>
    )
}

export default Explorer