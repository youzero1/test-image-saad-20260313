'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  MessageSquare,
  Calendar,
  Settings,
  UserCircle,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart2, label: 'Analytics', active: false },
  { icon: Users, label: 'Users', active: false },
  { icon: MessageSquare, label: 'Messages', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="flex flex-col items-center w-16 bg-gray-900 h-full py-4">
      {/* Logo */}
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mb-8">
        <span className="text-gray-900 font-bold text-sm">A</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col items-center gap-2 flex-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveItem(label)}
            title={label}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
              activeItem === label
                ? 'bg-white text-gray-900'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </nav>

      {/* User Avatar */}
      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500 transition-colors">
        <UserCircle className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
