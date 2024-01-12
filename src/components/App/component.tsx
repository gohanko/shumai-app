import React from 'react';
import ActivityBar from '../Sidebar';
import PrimarySidebar from '../Explorer';
import Workspace from '../Workspace';

function App() {
    return (
        <div className='flex'>
            <ActivityBar />
            <PrimarySidebar />
            <Workspace />
        </div>
    )
}

export default App;