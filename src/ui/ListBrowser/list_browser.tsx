import React from 'react'
import { faAngleRight, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListToolbar from 'ui/List/list_toolbar';
import ListInput from 'ui/List/list_input';
import List from 'ui/List/list';
import RecursiveList from 'ui/RecursiveList';

type ListBrowserData = {
    id: string,
    name: string,
    children: Array<ListBrowserData>,
    [x: string | number | symbol]: unknown,
}

type ListBrowserProps = {
    dataList: Array<ListBrowserData>
    toolbarChildren: Array<JSX.Element>
    onClickList: (event: React.MouseEvent) => void,
    isInputOpen: boolean,
    onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const ListBrowser = ({
    dataList,
    toolbarChildren,
    onClickList,
    isInputOpen,
    onInputKeyDown
}: ListBrowserProps) => (
    <>
        <ListToolbar>
            { toolbarChildren.map((children) => children)}
        </ListToolbar>
    
        <List onClick={onClickList}>
            <RecursiveList dataList={dataList} />
            { isInputOpen && 
            
                <ListInput
                    navigationIcon={<FontAwesomeIcon icon={faAngleRight} />}
                    labelIcon={<FontAwesomeIcon icon={faFolderOpen} />}
                    onKeyDown={onInputKeyDown}
                />
            }
        </List>
    </>
)

export type {
    ListBrowserData
}

export default ListBrowser