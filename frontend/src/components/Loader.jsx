import React from 'react';

const Loader = ({ fullScreen = false, message = "Loading..." }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-5 p-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-orange-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-300 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-orange-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fa-solid fa-leaf text-orange-500 text-sm animate-pulse"></i>
        </div>
      </div>
      {message && (
        <div className="text-center">
          <p className="text-slate-700 font-medium text-sm">{message}</p>
          <p className="text-slate-400 text-xs mt-1">This may take a few seconds</p>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 glass flex items-center justify-center overflow-hidden">
        {content}
      </div>
    );
  }

  return (
    <div className="flex-grow flex justify-center items-center h-full min-h-[200px]">
      {content}
    </div>
  );
};

export default Loader;
