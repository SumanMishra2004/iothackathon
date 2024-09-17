import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full sticky mx-auto flex justify-center items-center h-24">
      {/* Logo (absolute positioning to avoid shifting navbar items) */}
      <div className="absolute left-3 text-5xl font-bold text-black">
        <span className="font-black">ɧ</span>
      </div>

      {/* Navbar */}
      <nav className="flex justify-center space-x-8">
        {['Home', 'About Us', 'Timeline', 'Tracks'].map((link) => (
          <div
            key={link}
            onClick={() => handleLinkClick(link)}
            className={`cursor-pointer text-lg font-semibold relative ${
              activeLink === link
                ? 'text-orange-500 font-bold  lightning'
                : 'text-black'
            }`}
          >
            {link}
            {activeLink === link && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-orange-500 animate-lightning"></span>
            )}
          </div>
        ))}
      </nav>

      <style>{`
        @keyframes lightning {
          0% {
            width: 0;
            opacity: 0.5;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 0;
            opacity: 0.5;
          }
        }
        .lightning {
          position: relative;
        }
        .animate-lightning {
          animation: lightning 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
