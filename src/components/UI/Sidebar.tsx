import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, UsersIcon, BriefcaseIcon, CreditCardIcon, MapIcon, MessagesSquareIcon, LogOutIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export const Sidebar = ({
  collapsed,
  setCollapsed
}) => {
  const location = useLocation();
  const menuItems = [{
    title: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />,
    path: '/'
  }, {
    title: 'Workers',
    icon: <UsersIcon size={20} />,
    path: '/workers'
  }, {
    title: 'Jobs',
    icon: <BriefcaseIcon size={20} />,
    path: '/jobs'
  }, {
    title: 'Payments',
    icon: <CreditCardIcon size={20} />,
    path: '/payments'
  }, {
    title: 'Map',
    icon: <MapIcon size={20} />,
    path: '/map'
  }, {
    title: 'Support',
    icon: <MessagesSquareIcon size={20} />,
    path: '/support'
  }];
  return <aside className={`glass-effect z-20 h-full transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between h-16 px-4">
          {!collapsed && <div className="flex items-center">
              <span className="text-xl font-bold orange-text-glow">Serveo</span>
            </div>}
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-full hover:bg-gray-800 orange-glow-hover">
            {collapsed ? <ChevronRightIcon size={18} /> : <ChevronLeftIcon size={18} />}
          </button>
        </div>
        <div className="flex flex-col flex-1 mt-6">
          <nav className="flex-1 px-2">
            {menuItems.map(item => <Link key={item.path} to={item.path} className={`flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-200 ${location.pathname === item.path ? 'bg-orange-600/20 glow-border' : 'hover:bg-gray-800/50'}`}>
                <div className={`${location.pathname === item.path ? 'orange-text-glow' : ''}`}>
                  {item.icon}
                </div>
                {!collapsed && <span className={`ml-3 ${location.pathname === item.path ? 'font-medium' : ''}`}>
                    {item.title}
                  </span>}
              </Link>)}
          </nav>
          <div className="px-2 mb-6">
            <Link to="/login" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
              <LogOutIcon size={20} />
              {!collapsed && <span className="ml-3">Logout</span>}
            </Link>
          </div>
        </div>
      </div>
    </aside>;
};