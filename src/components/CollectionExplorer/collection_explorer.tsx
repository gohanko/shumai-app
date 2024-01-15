import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExplorerToolbar from "ui/ExplorerToolbar";
import { useCollectionStore, useInterfaceStore } from "stores";
import IconButton from "ui/IconButton";
import ExplorerList from "ui/ExplorerList";
import CollectionExplorerListItem from "components/CollectionExplorer/collection_explorer_list_item";
import CollectionExplorerListInput from "components/CollectionExplorer/collection_explorer_list_input";

const CollectionExplorer = () => {
    const toggleCreationModal = useInterfaceStore((state: any) => state.toggleCreationModal)
    const collections = useCollectionStore((state: any) => state.collections)
    const isAddNewCollection = useInterfaceStore((state: any) => state.isAddNewCollection)
    const setIsAddNewCollection = useInterfaceStore((state: any) => state.setIsAddNewCollection)

    const handleOnClick = (event: any) => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            setIsAddNewCollection(false);
        }
    }

    return (
        <div className='flex-2 w-80 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700'>
            <ExplorerToolbar>
                <IconButton
                    item={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            </ExplorerToolbar>


            <ExplorerList onClick={handleOnClick}>
                { collections.map((collection: any) => 
                    <CollectionExplorerListItem collection={collection} />
                )}

                { isAddNewCollection &&
                    <CollectionExplorerListInput /> 
                }
            </ExplorerList>
        </div>
    )
}

export default CollectionExplorer