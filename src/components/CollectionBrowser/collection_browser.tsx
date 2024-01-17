import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCollectionStore, useInterfaceStore } from "stores";
import { CollectionStoreType } from "stores/collection";
import { InterfaceStoreType } from "stores/interface";
import IconButton from "ui/IconButton";
import ListBrowser from "ui/ListBrowser";

const CollectionBrowser = () => {
    const toggleCreationModal = useInterfaceStore((state: InterfaceStoreType) => state.toggleCreationModal)
    const isAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.isAddNewCollection)
    const setIsAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.setIsAddNewCollection)
    const collections = useCollectionStore((state: CollectionStoreType) => state.collections)
    const createCollection = useCollectionStore((state: CollectionStoreType) => state.createCollection);

    const onClickList = (event: React.MouseEvent) => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            setIsAddNewCollection(false);
        }
    }

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        <ListBrowser
            dataList={collections}
            toolbarChildren={[
                <IconButton
                    icon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={toggleCreationModal}    
                />
            ]}
            onClickList={onClickList}
            isInputOpen={isAddNewCollection}
            onInputKeyDown={onInputKeyDown}
        />
    )
}

export default CollectionBrowser