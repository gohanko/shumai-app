import React, { useState } from "react";
import { faAngleRight, faAngleDown, faFolderOpen, faFolderClosed, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import ListItem from 'ui/List/list_item'
import IconButton from 'ui/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListBrowserData } from "ui/ListBrowser/list_browser";

type RecursiveListProps = {
    dataList: Array<ListBrowserData>
    onClickLabel: (id: string) => void
}

const RecursiveList = ({
    dataList,
    onClickLabel
}: RecursiveListProps) => {
    const [showNested, setShowNested] = useState<any>({});

    const generateListElements = () => dataList.map((data: ListBrowserData) => (
        <>
            <ListItem
                key={data.id}
                navigationIcon={showNested[data.id] ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                onClickNavigationIcon={() => setShowNested({ ...showNested, [data.id]: !showNested[data.id]})}
                labelText={data.name}
                labelIcon={showNested[data.id] ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}
                onClickLabel={() => onClickLabel(data.id)}
                optionIcon={<IconButton icon={<FontAwesomeIcon icon={faEllipsis} />} />}
            />

            { showNested[data.id] && data.children?.length > 0 &&
                <RecursiveList
                    key={data.id}
                    dataList={data.children}
                    onClickLabel={onClickLabel}
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