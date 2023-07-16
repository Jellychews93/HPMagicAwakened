// adding breadcrumbs to each page
// <Breadcrumbs aria-label="breadcrumb" separator="-">
//   <Link href="/" color="inherit">
//     Home
//   </Link>
//   <Typography color="text.primary">Current Page</Typography>
// </Breadcrumbs>
'use client'
import { useState } from 'react';
import Forest from './NavbarDropdowns/Forest';
import logo from '../../public/assets/logo.png';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import Shop from './NavbarDropdowns/Shop';
import SchoolLife from './NavbarDropdowns/SchoolLife';
import Image from 'next/image';
import Dueling from './NavbarDropdowns/Dueling';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#0d0604' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/">
                <Image className="h-8 w-auto" src={logo.src} alt="Logo" width={100} height={100} />
              </a>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                onClick={toggleNavbar}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className={`md:hidden ${showNavbar ? 'block' : 'hidden'}`}>
              <div className="mt-2 py-2 px-4 bg-black shadow rounded translate-y-10">
                <div className='mx-3'>
                  <Dueling />
                </div>
                <div className='mx-3'>
                  <Forest />
                </div>
                <div className='mx-3'>
                  <SchoolLife />
                </div>
                <div className='mx-3'>
                  <Shop />
                </div>
                <div className='mx-3'>
                  <a
                    href='/FAQ'
                    className="flex text-sm rounded-m focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    style={{ color: '#EDC865' }}
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className='mx-3'>
                  <Dueling />
                </div>
                <div className='mx-3'>
                  <Forest />
                </div>
                <div className='mx-3'>
                  <SchoolLife />
                </div>
                <div className='mx-3'>
                  <Shop />
                </div>
                <div className='mx-3'>
                  <a
                    href='/FAQ'
                    className="flex text-sm rounded-m focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    style={{ color: '#EDC865' }}
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
