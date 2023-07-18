'use client'
import Navbar from '@/components/Navbar'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import SoloorDuo from '../../../public/assets/Duel/SoloorDuo.jpg'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d0604',
      light: '#dddddd',
      dark: '#EDC865',
    },
    secondary: {
      main: '#EDC865',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      color: '#EDC865',
      fontSize: '4rem',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h2: {
      fontSize: '3.25rem',
      color: '#EDC865',
    },
    h3: {
      fontSize: '2.5rem',
      color: '#EDC865',
    },
    h4: {
      fontSize: '1.75rem',
      color: '#EDC865',
    },
    h5: {
      fontSize: '1rem',
      color: '#EDC865',
    },
    h6: {
      color: '#EDC865',
      fontSize: '0.75rem',
      '@media (max-width: 768px)': {
        fontSize: '0.75rem',
      },
    },
    body1: {
      color: '#777777',
      fontSize: '1rem',
    },
  },
});

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Dueling Club
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        What is it?
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        The Dueling Club is HPMA versions of PVP. You can either participate in 1v1 or 2v2.
      </Typography>
      <Image width={400} height={400} src={SoloorDuo.src} alt='Solo or Duo' style={{ marginInline: 'auto' }} />
    </ThemeProvider>
  )
}

export default page

// The GM Dueling Club is for those who make it into Grand Masters and reach a certain predetermined rating. For this season in 2023,
// it is 8100. If you reach that point, you will be invited into the GM Dueling Club.
