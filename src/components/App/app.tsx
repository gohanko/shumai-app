import React from 'react';
import Toolbar from '../Toolbar';
import Main from '../Main';
import Status from '../Status';
import CreationModal from '../CreationModal';
import { useCollectionStore } from '../../stores';

const App = () => {
    const initializeCollection = useCollectionStore((state: any) => state.initializeCollection)
    initializeCollection();

    return (
        <div className='h-screen flex flex-col'>
            <Toolbar />
            <Main />
            <Status />
            <CreationModal />
        </div>
    )
}


export default App;