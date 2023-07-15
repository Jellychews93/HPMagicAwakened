'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AboutMe from './AboutMe'
import WhatIsHPMA from './WhatIsHPMA'
import { Box, Grid, Typography } from '@mui/material';
import Footer from '@/components/Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles';
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant='h6'>
            Official Website: <a href="https://www.magicawakened.com/en">https://www.magicawakened.com/en</a>
          </Typography>
          <Typography variant='h1' sx={{ textAlign: 'center', mt: '2vh', textDecoration: 'underline' }}>
            Harry Potter Magic Awakened Guide
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <AboutMe />
      <WhatIsHPMA />
      <Footer />
    </ThemeProvider>
  )
}
