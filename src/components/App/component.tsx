import React from 'react';
import Toolbar from '../Toolbar';
import Main from '../Main';
import Status from '../Status';
import CreationModal from '../CreationModal';

const App = () => (
    <div className='h-screen flex flex-col'>
        <Toolbar />
        <Main />
        <Status />
        <CreationModal />
    </div>
)


export default App;