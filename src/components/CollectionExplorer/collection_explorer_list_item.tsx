import React, { useState } from 'react';
import { faAngleRight, faAngleDown, faFolderOpen, faEllipsis, faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import { useCollectionStore } from 'stores';
import { getCollectionFromParentId } from 'stores/collection/collections';
import IconButton from 'ui/IconButton';
import ExplorerListItemLine from 'ui/ExplorerListItemLine';

interface CollectionExplorerListItemType {
    collection: any
}

const CollectionExplorerListItem = ({ collection }: CollectionExplorerListItemType) => {
    const collections = useCollectionStore((store) => store.collections);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);

    const toggleIsOpen = (event: any) => {
        setIsOpen(!isOpen)
    }
    
    const toggleIsOpenContextMenu = () => setIsOpenContextMenu(!isOpenContextMenu);

    const collection_item_list = getCollectionFromParentId(collections, collection.id)

    return (
        <>
            <ExplorerListItem
                item_1={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                item_2={<FontAwesomeIcon icon={faFolderOpen} />}
                item_3={collection.name}
                item_4={<IconButton item={<FontAwesomeIcon icon={faEllipsis} />} onClick={toggleIsOpenContextMenu} />}
                onClick={toggleIsOpen}
            />
            { isOpen && collection_item_list.map((collection_item) => (
                <ExplorerListItem
                    item_1={<ExplorerListItemLine />}
                    item_2={<FontAwesomeIcon icon={faFileCsv} />}
                    item_3={collection_item.name}
                />
            ))}
        </>
    )
}

export default CollectionExplorerListItem;
