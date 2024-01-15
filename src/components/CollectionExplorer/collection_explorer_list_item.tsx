import React, { useState } from 'react';
import { faAngleRight, faAngleDown, faFolderOpen, faFolderClosed, faEllipsis, faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import { useCollectionStore, useInterfaceStore } from 'stores';
import { getCollectionFromParentId } from 'stores/collection/collections';
import IconButton from 'ui/IconButton';
import ExplorerListItemLine from 'ui/ExplorerListItemLine';

interface CollectionExplorerListItemType {
    collection: any
}

const CollectionExplorerListItem = ({ collection }: CollectionExplorerListItemType) => {
    const collections = useCollectionStore((store) => store.collections);
    const createTab = useInterfaceStore((state) => state.createTab);


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);

    const collection_item_list = getCollectionFromParentId(collections, collection.id)

    const toggleIsOpen = (event: any) => setIsOpen(!isOpen)    
    const toggleIsOpenContextMenu = () => setIsOpenContextMenu(!isOpenContextMenu);

    return (
        <>
            <ExplorerListItem
                navigationIcon={isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                navigationIconOnClick={(event: any) => toggleIsOpen(event)}
                labelItem1={isOpen ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}
                labelItem2={collection.name}
                labelOnClick={() => createTab(collection.id)}
                optionIcon={<IconButton item={<FontAwesomeIcon icon={faEllipsis} />} onClick={toggleIsOpenContextMenu} />}
            />
            { isOpen && collection_item_list.map((collection_item) => (
                <ExplorerListItem
                    navigationIcon={<ExplorerListItemLine />}
                    labelItem1={<FontAwesomeIcon icon={faFileCsv} />}
                    labelItem2={collection_item.name}
                    labelOnClick={() => createTab(collection_item.id)}
                />
            ))}
        </>
    )
}

export default CollectionExplorerListItem;
