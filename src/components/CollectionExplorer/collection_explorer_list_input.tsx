import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useCollectionStore, useInterfaceStore } from "stores";
import ExplorerListItem from "ui/ExplorerListItem";
import InputField from "ui/InputField";
import { CollectionStoreType } from "stores/collection";
import { InterfaceStoreType } from "stores/interface";

const CollectionExplorerListInput = () => {
    const createCollection = useCollectionStore((state: CollectionStoreType) => state.createCollection);
    const setIsAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.setIsAddNewCollection)

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') {
            return;
        }

        const value = event.currentTarget.value;
        if (!value) {
            return;
        }

        createCollection(value);
        setIsAddNewCollection(false);
    }

    return (
        <ExplorerListItem 
            navigationIcon={<FontAwesomeIcon icon={faAngleRight} />}
            labelIcon={<FontAwesomeIcon icon={faFolderOpen} />}
            labelText={<InputField onKeyDown={handleOnEnter}/>}
        />
    )
}

export default CollectionExplorerListInput;