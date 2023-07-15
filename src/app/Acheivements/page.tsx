import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { duelingAchievements } from './Achievements'

function page() {
  return (
    <div>
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

    </div>
  )
}

export default page