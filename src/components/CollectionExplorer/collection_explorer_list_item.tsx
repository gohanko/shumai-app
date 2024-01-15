import React, { useState } from 'react';
import { faAngleRight, faAngleDown, faFolderOpen, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import { useCollectionStore } from 'stores';
import { getCollectionFromParentId } from 'stores/collection/collections';
import IconButton from 'ui/IconButton';

interface CollectionExplorerListItemType {
    collection: any
}

const CollectionExplorerListItem = ({ collection }: CollectionExplorerListItemType) => {
    const collections = useCollectionStore((store) => store.collections);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const collection_item_list = getCollectionFromParentId(collections, collection.id)

    return (
        <>
            <ExplorerListItem
                item_1={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                item_2={<FontAwesomeIcon icon={faFolderOpen} />}
                item_3={collection.name}
                item_4={<IconButton item={<FontAwesomeIcon icon={faEllipsis} />} />}
                onClick={toggleSetIsOpen}
            />
            { isOpen && collection_item_list.map((collection_item) => (
                <ExplorerListItem
                    item_1={'aa'}
                    item_2={'aa'}
                    item_3={collection_item.name}
                />
            ))}
        </>
    )
}

export default CollectionExplorerListItem;
