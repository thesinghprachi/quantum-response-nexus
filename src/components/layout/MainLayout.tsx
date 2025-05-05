
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={sidebarOpen} />
        <main 
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out p-4", 
            sidebarOpen ? "ml-64" : "ml-16"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
