import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useInterfaceStore } from "stores";
import IconButton from "ui/IconButton";

const ExplorerListToolbar = () => {
    const toggleCreationModal = useInterfaceStore((state: any) => state.toggleCreationModal)

    return (
        <div className='h-10'>
            <IconButton
                item={<FontAwesomeIcon icon={faPlus} />}
                onClick={toggleCreationModal}    
            />
        </div>
    )
}

export default ExplorerListToolbar;