import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../UI/Sidebar';
import { Navbar } from '../UI/Navbar';
export const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>;
};