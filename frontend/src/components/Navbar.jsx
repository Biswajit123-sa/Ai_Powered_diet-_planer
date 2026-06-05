import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  const navLinks = token 
    ? [
        { name: 'Dashboard', path: '/dashboard', icon: 'fa-house' },
        { name: 'Diet Plan', path: '/diet', icon: 'fa-wand-magic-sparkles' },
        { name: 'AI Chat', path: '/chat', icon: 'fa-robot' }
      ]
    : [
        { name: 'Home', path: '/', icon: 'fa-home' },
        { name: 'About', path: '/about', icon: 'fa-info-circle' }
      ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'glass border-b border-slate-200/50 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to={token ? "/dashboard" : "/"} className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-tr from-orange-600 to-orange-400 text-white p-2 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-md shadow-orange-500/20">
            <i className="fa-solid fa-leaf text-lg"></i>
          </div>
          <span className="text-xl font-heading font-bold text-gradient">
            NutriAI
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-1 bg-slate-100/80 rounded-2xl p-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path 
                      ? 'bg-white text-orange-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <i className={`fa-solid ${link.icon} text-xs`}></i>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {token ? (
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <span>Logout</span>
              <i className="fa-solid fa-arrow-right-from-bracket group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors rounded-xl">
                Log in
              </Link>
              <Link to="/register" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl transition-transform duration-200`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full glass border-b border-slate-200/50 shadow-xl transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <i className={`fa-solid ${link.icon} w-5 text-center`}></i>
              {link.name}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
            {token ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
              >
                <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center"></i>
                Logout
              </button>
            ) : (
              <>
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 transition-all"
                >
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;