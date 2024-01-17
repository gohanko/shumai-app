import React from 'react'
import CollectionBrowser from 'components/CollectionBrowser/collection_browser'

const Explorer = () => (
    <div className='max-w-80 w-80 h-full flex flex-col bg-zinc-900 border-solid border-r border-t border-zinc-700 overflow-hidden'>
        <CollectionBrowser />
    </div>
)

export default Explorer