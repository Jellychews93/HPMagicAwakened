'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { duelingAchievements } from './Achievements'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DisplayAchievements from './DisplayAchievements'
import AchievementTabs from './AchievementTabs'
import Footer from '@/components/Footer'
import { theme } from '../../components/Theme';


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