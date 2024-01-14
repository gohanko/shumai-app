import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useCollectionStore, useInterfaceStore } from "stores";
import ExplorerItem from "components/ExplorerItem";
import InputField from "ui/InputField";

const ExplorerInput = () => {
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
        <ExplorerItem 
            first_item={<FontAwesomeIcon icon={faAngleRight} />}
            second_item={<FontAwesomeIcon icon={faFolderOpen} />}
            third_item={<InputField onKeyDown={handleOnEnter}/>}
        />
    )
}

export default ExplorerInput;