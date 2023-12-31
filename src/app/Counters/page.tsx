'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { commonCards, rareCards, epicCards, legendaryCards, darkCards, mythicCards } from './Cards';
import DisplayCards from './DisplayCards';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '5vh' }}>
        Card Counters / Tips
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        Please keep in mind that every situation is different and this is meant to just be a general guideline!
        This is purely from my experience as a player and there is probably SO much that I am missing.
      </Typography>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Common Cards
        </Typography>
        <DisplayCards cards={commonCards} />
      </Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Rare Cards
        </Typography>
        <DisplayCards cards={rareCards} />
      </Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Epic Cards
        </Typography>
        <DisplayCards cards={epicCards} />
      </Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Legendary Cards
        </Typography>
        <DisplayCards cards={legendaryCards} />
      </Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Dark Cards
        </Typography>
        <DisplayCards cards={darkCards} />
      </Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', my: '3vh', mt: '5vh', textDecoration: 'underline' }}>
          Mythic Cards
        </Typography>
        <DisplayCards cards={mythicCards} />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default page