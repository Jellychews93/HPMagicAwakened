'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AboutMe from './AboutMe'
import WhatIsHPMA from './WhatIsHPMA'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
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
    </div>
  )
}
