'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { duelingAchievements } from './Achievements'
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
      <Typography variant='h1' sx={{ textAlign: 'center', my: '5vh' }}>
        Achievements Guide
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6} sx={{ px: '3vw' }}>
          <Typography variant='h4' sx={{ my: '5vh' }}>
            Dueling Achievements
          </Typography>
          {duelingAchievements.map((item, index) => (
            <Box key={index} sx={{ mb: '2vh' }}>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h5" sx={{ color: '#dddddd' }}>{item.requirement}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} lg={6} sx={{ px: '3vw' }}>
          <Typography variant='h4' sx={{ my: '5vh' }}>
            fdsjakl Achievements
          </Typography>
          {duelingAchievements.map((item, index) => (
            <Box key={index} sx={{ mb: '2vh' }}>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h4" sx={{ color: '#dddddd' }}>{item.requirement}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

    </ThemeProvider>
  )
}

export default page