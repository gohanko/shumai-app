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

    const parent_collections = collections.filter((collection: any) => !collection.parent_id)

    return (
        <>
        <ExplorerToolbar>
                <IconButton
                    item={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            </ExplorerToolbar>


            <ExplorerList onClick={handleOnClick}>
                { parent_collections.map((collection: any) => 
                    <CollectionExplorerListItem collection={collection} />
                )}

                { isAddNewCollection &&
                    <CollectionExplorerListInput /> 
                }
            </ExplorerList>
        </>
    )
}

export default CollectionExplorer