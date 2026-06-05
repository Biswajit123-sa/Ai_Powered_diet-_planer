import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'fa-house', color: 'from-orange-500 to-amber-500' },
    { name: 'Diet Generator', path: '/diet', icon: 'fa-wand-magic-sparkles', color: 'from-violet-500 to-purple-500' },
    { name: 'AI Chat', path: '/chat', icon: 'fa-robot', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <aside className={`hidden md:flex flex-col bg-white/80 backdrop-blur-sm border-r border-slate-200/60 h-[calc(100dvh-4rem)] sticky top-16 shrink-0 z-40 transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="p-4 flex-1 flex flex-col gap-1.5">
        <div className={`flex items-center justify-between mb-4 px-3 ${collapsed ? 'justify-center' : ''}`}>
          {!collapsed && (
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
              Main Menu
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            <i className={`fa-solid ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'} text-[10px]`}></i>
          </button>
        </div>
        
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `group flex items-center gap-3 px-3 py-3 rounded-2xl font-medium transition-all duration-200 relative overflow-hidden ${
                isActive 
                  ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg shadow-orange-500/15' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              } ${collapsed ? 'justify-center' : ''}`
            }
            title={collapsed ? item.name : undefined}
          >
            <div className={`w-5 text-center shrink-0 ${collapsed ? '' : ''}`}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            {!collapsed && (
              <span className="text-sm">{item.name}</span>
            )}
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-medium text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 ${
            collapsed ? 'justify-center' : ''
          }`}
          title={collapsed ? 'Logout' : undefined}
        >
          <div className="w-5 text-center shrink-0">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
