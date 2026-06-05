import React from 'react';

const Card = ({ children, className = '', title, icon }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-premium border border-slate-100/80 hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-base shrink-0 shadow-md shadow-orange-500/20">
              <i className={`fa-solid ${icon}`}></i>
            </div>
          )}
          {title && <h3 className="text-lg font-heading font-bold text-slate-900">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
