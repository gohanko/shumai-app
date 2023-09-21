import React from 'react';
import TinySidebar from '../TinySidebar';
import SourceExplorer from '../SourceExplorer';
import Workspace from '../Workspace';

function App() {
    return (
        <div className='flex'>
            <TinySidebar />
            <SourceExplorer />
            <Workspace />
        </div>
    )
}

export default App;