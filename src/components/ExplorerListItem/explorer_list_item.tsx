import { faAngleRight, faAngleDown, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerItem from 'ui/ListItem';
import React, { useState } from 'react';

interface ExplorerListItemType {
    collection: any
}

const ExplorerListItem = ({ collection }: ExplorerListItemType) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ExplorerItem
            item_1={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
            item_2={<FontAwesomeIcon icon={faFolderOpen} />}
            item_3={collection.name}
            onClick={toggleSetIsOpen}
        />
    )
}

export default ExplorerListItem;
