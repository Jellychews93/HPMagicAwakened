'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { soloVideos } from './HPMACentralFF'
import { theme } from '../../components/Theme';

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Solo Forest Guide
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        <span style={{ textDecoration: 'underline' }}>Harry Potter Magic Awakened Central</span> on Youtube does an awesome series on how to do the forest solos. It is extra great because they do
        do a lot of it underleveled. I highly recommend you check out their <a href="https://www.youtube.com/@HarryPotterMACentral/featured" style={{ textDecoration: 'underline' }}>channel!</a> I was not able to find any solo run guides below 12 so thats where this page will start.
      </Typography>
      <Box p={3}>
        <Grid container spacing={2}>
          {soloVideos.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant='h3'>{item.name}</Typography>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  title={item.name}
                  src={item.src}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </ThemeProvider>
  )
}

export default page