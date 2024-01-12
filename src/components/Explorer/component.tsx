import React from 'react'
import DataSourceList from '../CollectionList'

const PrimarySidebar = () => {
    return (
        <div className='flex-2 flex flex-col h-screen w-72 m-0'>
            <div className={'flex h-10 bg-zinc-700'}></div>
            <div className={'flex-1 bg-zinc-800 border-r border-solid border-zinc-700'}>
                <DataSourceList />
            </div>
        </div>
    )
}

export default PrimarySidebar