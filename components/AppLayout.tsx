'use client';

import React, { ReactNode, useState } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>

        </div>
    );
};

export default AppLayout;
