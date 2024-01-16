import React, { useState } from 'react';
import { faAngleRight, faAngleDown, faFolderOpen, faFolderClosed, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExplorerListItem from 'ui/ExplorerListItem';
import { useInterfaceStore } from 'stores';
import IconButton from 'ui/IconButton';
import { CollectionType } from 'stores/collection/collections';

type CollectionExplorerListItemProps  = {
    collections: Array<CollectionType>
}

const CollectionExplorerListItem = ({ collections }: CollectionExplorerListItemProps) => {
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
                        labelIcon={showNested[collection.id] ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}
                        labelText={collection.name}
                        labelOnClick={() => createTab(collection.id)}
                        optionIcon={<IconButton icon={<FontAwesomeIcon icon={faEllipsis} />} />}
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
