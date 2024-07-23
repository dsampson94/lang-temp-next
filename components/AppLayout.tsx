'use client';

import React, { ReactNode, useState } from 'react';
import Header from './landing/Header';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="flex flex-col flex-grow overflow-hidden">
                <Header isLoggedIn />
                <main className="flex-grow p-3 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
