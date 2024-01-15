import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useCollectionStore, useInterfaceStore } from "stores";
import ExplorerListItem from "ui/ExplorerListItem";
import InputField from "ui/InputField";

const CollectionExplorerListInput = () => {
    const createCollection = useCollectionStore(store => store.createCollection);
    const setIsAddNewCollection = useInterfaceStore((state: any) => state.setIsAddNewCollection)

    const handleOnEnter = (event: any) => {
        if (event.key !== 'Enter') {
            return;
        }

        const value = event.target.value;
        if (!value) {
            return;
        }

        createCollection(event.target.value);
        setIsAddNewCollection(false);
    }

    return (
        <ExplorerListItem 
            navigationIcon={<FontAwesomeIcon icon={faAngleRight} />}
            labelItem1={<FontAwesomeIcon icon={faFolderOpen} />}
            labelItem2={<InputField onKeyDown={handleOnEnter}/>}
        />
    )
}

export default CollectionExplorerListInput;