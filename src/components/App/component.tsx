import React from 'react';
import ActivityBar from '../ActivityBar';
import PrimarySidebar from '../PrimarySidebar';
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