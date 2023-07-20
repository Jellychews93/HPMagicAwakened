'use client'
import { useState, useEffect, useRef } from 'react';

function Dueling() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex text-sm rounded-m focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        style={{ color: '#EDC865' }}
      >
        Dueling
        <svg
          className={`ml-2 h-5 w-5 ${dropdownOpen ? '' : 'rotate-180'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3.586L3.707 9.879a1 1 0 101.414 1.414L10 6.414l4.879 4.879a1 1 0 101.414-1.414L10 3.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5" style={{ backgroundColor: '#EDC865', zIndex: '3' }}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="DuelingClub"
              className="block text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              style={{ color: '#0d0604' }}
              role="menuitem"
            >
              Dueling Club
            </a>
            <a
              href="DeckBuildingGuide"
              className="block text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              style={{ color: '#0d0604' }}
              role="menuitem"
            >
              Deck Building
            </a>
            <a
              href="Counters"
              className="block text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              style={{ color: '#0d0604' }}
              role="menuitem"
            >
              Card Counters/Tips
            </a>
            <a
              href="1v1"
              className="block text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              style={{ color: '#0d0604' }}
              role="menuitem"
            >
              1v1
            </a>
            <a
              href="2v2"
              className="block text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              style={{ color: '#0d0604' }}
              role="menuitem"
            >
              2v2
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dueling;
