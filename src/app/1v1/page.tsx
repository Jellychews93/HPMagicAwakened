'use client'
import Navbar from '@/components/Navbar'
import { Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h2'>
        Coming Soon!
      </Typography>
      <Footer />
    </ThemeProvider>
  )
}

export default page