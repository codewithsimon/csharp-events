import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="/logo 3.png" alt="C# Corner Logo" className="h-8 w-auto" />
          </div>
          
          <a 
            href="https://csharp.tv" 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center"
          >
            <img 
              src="/csharp-tv-logo-navbar-black.png" 
              alt="CSharp TV" 
              className="h-6 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;