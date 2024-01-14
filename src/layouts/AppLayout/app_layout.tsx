import React from 'react';
import Toolbar from 'components/Toolbar';
import Status from 'components/Status';
import CreationModal from 'components/CreationModal';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';

interface AppLayoutType {
    children?: any
}

const AppLayout = ({ children }: AppLayoutType) => (
    <div className='h-screen flex flex-col bg-zinc-900'>
        <Toolbar />

        <div className="w-full flex-1 flex">
            <Sidebar />
            {children ?? <Outlet />}
        </div>
        
        <Status />
        <CreationModal />
    </div>
)

export default AppLayout;