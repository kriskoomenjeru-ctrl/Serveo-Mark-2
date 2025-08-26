import React from 'react';
import { MenuIcon, BellIcon, UserIcon, SearchIcon } from 'lucide-react';
export const Navbar = ({
  onToggleSidebar
}) => {
  return <header className="glass-effect h-16 flex items-center justify-between px-6 z-10">
      <div className="flex items-center">
        <button onClick={onToggleSidebar} className="p-2 rounded-full hover:bg-gray-800 md:hidden">
          <MenuIcon size={20} />
        </button>
        <div className="relative ml-4 hidden md:flex items-center">
          <SearchIcon size={18} className="absolute left-3 text-gray-400" />
          <input type="text" placeholder="Search..." className="bg-gray-800/50 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800 orange-glow-hover relative">
          <BellIcon size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="glass-effect rounded-full p-1 orange-glow-hover">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <UserIcon size={18} />
            </div>
          </div>
          <span className="ml-2 hidden md:inline">Admin</span>
        </div>
      </div>
    </header>;
};