import { faAngleRight, faAngleDown, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import React, { useState } from 'react';
import { useCollectionStore } from 'stores';
import { getCollectionItem } from 'stores/collection/collection_items';

interface CollectionExplorerListItemType {
    collection: any
}

const CollectionExplorerListItem = ({ collection }: CollectionExplorerListItemType) => {
    const collection_items = useCollectionStore((store) => store.collection_items);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const collection_item_list = getCollectionItem(collection_items, collection.id)

    return (
        <>
            <ExplorerListItem
                item_1={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                item_2={<FontAwesomeIcon icon={faFolderOpen} />}
                item_3={collection.name}
                onClick={toggleSetIsOpen}
            />
            { collection_item_list.map((collection_item) => (
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
