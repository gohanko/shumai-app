import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
    useCollection,
    useCollectionAction,
    useCollectionBrowser,
    useCollectionBrowserActions,
    useCreationModalActions,
    useTabActions
} from "stores";
import IconButton from "ui/IconButton";
import ListBrowser from "ui/ListBrowser";

const CollectionBrowser = () => {
    const tabActions = useTabActions();
    const creationModalActions = useCreationModalActions()
    const isInputOpen = useCollectionBrowser();
    const collectionBrowserActions = useCollectionBrowserActions();
    const collections = useCollection()
    const collectionActions = useCollectionAction();
    
    const onClickList = (event: React.MouseEvent) => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            collectionBrowserActions.setIsOpenNewInput(false);
        }
    }

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') {
            return;
        }

        const value = event.currentTarget.value;
        if (!value) {
            return;
        }

        collectionActions.create(value);
        collectionBrowserActions.setIsOpenNewInput(false);
    }

    return (
        <ListBrowser
            dataList={collections}
            toolbarChildren={[
                <IconButton
                    icon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={creationModalActions.toggle}    
                />
            ]}
            onClickList={onClickList}
            onClickListItemLabel={tabActions.create}
            isInputOpen={isInputOpen}
            onInputKeyDown={onInputKeyDown}
        />
    )
}

export default CollectionBrowser