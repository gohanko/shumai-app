import { faAngleRight, faAngleDown, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from 'ui/ExplorerListItem';
import React, { useState } from 'react';

interface CollectionExplorerListItemType {
    collection: any
}

const CollectionExplorerListItem = ({ collection }: CollectionExplorerListItemType) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ListItem
            item_1={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
            item_2={<FontAwesomeIcon icon={faFolderOpen} />}
            item_3={collection.name}
            onClick={toggleSetIsOpen}
        />
    )
}

export default CollectionExplorerListItem;
