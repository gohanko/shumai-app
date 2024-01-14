import React from 'react';
import { useCollectionStore } from '../../stores';
import AppLayout from '../../layout/AppLayout';

const App = () => {
    const initializeCollection = useCollectionStore((state: any) => state.initializeCollection)
    initializeCollection();

    return (<AppLayout />)
}

export default App;