'use client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { shopImages } from './ShopObject';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function page() {
  return (
    <div>
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
    </div>
  )
}

export default page