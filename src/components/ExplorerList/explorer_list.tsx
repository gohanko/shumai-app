import React from 'react'
import { useCollectionStore, useInterfaceStore } from 'stores';
import ExplorerInput from 'components/ExplorerListInput';
import CollectionListItem from 'components/ExplorerListItem';
import ExplorerListToolbar from 'components/ExplorerListToolbar';

const ExplorerList = () => {
    const collections = useCollectionStore((state: any) => state.collections)
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
            <ExplorerListToolbar />

            <div
                className="flex-1 border-solid border-t border-zinc-700"
                onClick={handleOnClick}
            >
                { collections.map((collection: any) => 
                    <CollectionListItem collection={collection} />
                )}

                { isAddNewCollection &&
                    <ExplorerInput /> 
                }
            </div>
        </div>
    )
}

export default ExplorerList