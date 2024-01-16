import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExplorerToolbar from "ui/ExplorerToolbar";
import { useCollectionStore, useInterfaceStore } from "stores";
import IconButton from "ui/IconButton";
import ExplorerList from "ui/ExplorerList";
import CollectionExplorerListItem from "components/CollectionExplorer/collection_explorer_list_item";
import CollectionExplorerListInput from "components/CollectionExplorer/collection_explorer_list_input";
import { CollectionStoreType } from "stores/collection/collection_store";
import { InterfaceStoreType } from "stores/interface/interface";

const CollectionExplorer = () => {
    const toggleCreationModal = useInterfaceStore((state: InterfaceStoreType) => state.toggleCreationModal)
    const isAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.isAddNewCollection)
    const setIsAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.setIsAddNewCollection)
    const collections = useCollectionStore((state: CollectionStoreType) => state.collections)

    const handleOnClick = (event: React.MouseEvent) => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            setIsAddNewCollection(false);
        }
    }

    return (
        <>
            <ExplorerToolbar>
                <IconButton
                    icon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            </ExplorerToolbar>

            <ExplorerList onClick={handleOnClick}>
                <CollectionExplorerListItem collections={collections} />
                { isAddNewCollection && <CollectionExplorerListInput /> }
            </ExplorerList>
        </>
    )
}

export default CollectionExplorer