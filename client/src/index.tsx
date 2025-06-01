import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './pages/App';
import AppLayout from './layouts/AppLayout';
import Error from './pages/Error';

import "@fontsource/inter";
import './index.css';
import Workspace from './pages/Workspace';

declare global {
    interface Window {
        __TAURI__: Record<string, unknown>;
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <AppLayout><Error /></AppLayout>,
        children: [
            {
                index: true,
                element: <Navigate to="/workspace/" replace />
            },
            {
                path: '/workspace/',
                element: <Workspace />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
