import React from 'react'
import CollectionExplorer from 'components/CollectionExplorer/collection_explorer'

const Explorer = () => (
    <div className='max-w-80 w-80 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700 overflow-hidden'>
        <CollectionExplorer />
    </div>
)

export default Explorer