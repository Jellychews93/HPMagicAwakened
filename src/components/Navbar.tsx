'use client'
import { useState } from 'react';
import Forest from './NavbarDropdowns/Forest';
import logo from '../../public/assets/logo.png'
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#0d0604' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/"><img className="h-8 w-auto" src={logo.src} alt="Logo" /></a>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className='mx-3'>
                  <Forest />
                </div>
                <div className='mx-3'>
                  <a
                    href='/'
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

// adding breadcrumbs to each page
// <Breadcrumbs aria-label="breadcrumb" separator="-">
//   <Link href="/" color="inherit">
//     Home
//   </Link>
//   <Typography color="text.primary">Current Page</Typography>
// </Breadcrumbs>
