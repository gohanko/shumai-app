import React, { useState } from "react";
import { faAngleRight, faAngleDown, faFolderOpen, faFolderClosed, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import ListItem from 'ui/List/list_item'
import IconButton from 'ui/IconButton';
import { useInterfaceStore } from 'stores';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListBrowserData } from "ui/ListBrowser/list_browser";

type RecursiveListProps = {
    dataList: Array<ListBrowserData | any>
}

const RecursiveList = ({
    dataList,
}: RecursiveListProps) => {
    const [showNested, setShowNested] = useState<any>({});
    const createTab = useInterfaceStore((state) => state.createTab);

    const generateListElements = () => dataList.map((data: ListBrowserData) => (
        <>
            <ListItem
                key={data.id}
                navigationIcon={showNested[data.id] ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                navigationIconOnClick={() => setShowNested({ ...showNested, [data.id]: !showNested[data.id]})}
                labelText={data.name}
                labelIcon={showNested[data.id] ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}
                labelOnClick={() => createTab(data.id)}
                optionIcon={<IconButton icon={<FontAwesomeIcon icon={faEllipsis} />} />}
            />

            { showNested[data.id] && data.children?.length > 0 &&
                <RecursiveList
                    key={data.id}
                    dataList={data.children}
                />
            }
        </>
    ));

    const listElements = generateListElements();
    return (
        <>
            { listElements }
        </>
    )
}

export default RecursiveList