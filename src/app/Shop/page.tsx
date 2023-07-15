'use client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { shopImages } from './ShopObject';
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

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Shop Guide
      </Typography>
      <Grid container spacing={2} sx={{ px: '5vw', py: '3vh', mb: '5vh' }}>
        {shopImages.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant='h4' sx={{ mb: '3vh' }}>{item.name}</Typography>
              <img
                src={item.src.src}
                alt={item.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant='h5' sx={{ mt: '3vh' }}>{item.description}</Typography>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}

export default page