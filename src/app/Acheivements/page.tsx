'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { duelingAchievements } from './Achievements'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DisplayAchievements from './DisplayAchievements'
import AchievementTabs from './AchievementTabs'
import Footer from '@/components/Footer'

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
      <Typography variant='h1' sx={{ textAlign: 'center', my: '5vh' }}>
        Achievements Guide
      </Typography>

      {/* <DisplayAchievements achievements={duelingAchievements} /> */}
      <Box sx={{ textAlign: 'center', mx: 'auto', justifyContent: 'center', mt: '10vh' }}>
        <AchievementTabs />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default page