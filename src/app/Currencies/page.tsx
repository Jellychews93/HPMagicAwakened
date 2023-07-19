'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { valuable, keys, forest, others, club } from './CurrenciesObject';
import DisplayCurrencies from './DisplayCurrencies';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '5vh' }}>
        Currencies Guide
      </Typography>
      {/* Valuable */}
      <Typography variant='h2' sx={{ mx: '2vw', my: '2vh' }}>
        Most Valuable Currencies
      </Typography>
      <DisplayCurrencies currency={valuable} />
      {/* keys */}
      <Typography variant='h2' sx={{ mx: '2vw', my: '2vh' }}>
        Keys
      </Typography>
      <Typography variant='h5' sx={{ mx: '2vw', my: '2vh' }}>
        More information on the shops guide page
      </Typography>
      <DisplayCurrencies currency={keys} />
      {/* forest */}
      <Typography variant='h2' sx={{ mx: '2vw', my: '2vh' }}>
        Forest
      </Typography>
      <DisplayCurrencies currency={forest} />
      {/* club */}
      <Typography variant='h2' sx={{ mx: '2vw', my: '2vh' }}>
        Club
      </Typography>
      <DisplayCurrencies currency={club} />
      {/* others */}
      <Typography variant='h2' sx={{ mx: '2vw', my: '2vh' }}>
        Others
      </Typography>
      <DisplayCurrencies currency={others} />
      <Footer />
    </ThemeProvider>
  )
}

export default page