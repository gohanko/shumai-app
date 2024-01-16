import React, { useState } from 'react';
import { faAngleRight, faAngleDown, faFolderOpen, faFolderClosed, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import { useInterfaceStore } from 'stores';
import IconButton from 'ui/IconButton';
import { CollectionType } from 'stores/collection/collections';

interface CollectionExplorerListItemType {
    collections: Array<CollectionType>
}

const CollectionExplorerListItem = ({ collections }: CollectionExplorerListItemType) => {
    const createTab = useInterfaceStore((state) => state.createTab);

    const [showNested, setShowNested] = useState<any>({});
    const toggleNested = (id: string) => {
        setShowNested({ ...showNested, [id]: !showNested[id] });
    };

    return (
        <>
            { collections.map((collection: CollectionType) => (
                <>
                    <ExplorerListItem
                        key={collection.id}
                        navigationIcon={showNested[collection.id] ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                        navigationIconOnClick={() => toggleNested(collection.id)}
                        labelItem1={showNested[collection.id] ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}
                        labelItem2={collection.name}
                        labelOnClick={() => createTab(collection.id)}
                        optionIcon={<IconButton item={<FontAwesomeIcon icon={faEllipsis} />} />}
                    />

                    { showNested[collection.id] && collection.children?.length > 0 &&
                        <CollectionExplorerListItem
                            key={collection.id}
                            collections={collection.children}
                        />
                    }
                </>
            ))}
        </>
    )
}

export default CollectionExplorerListItem;
