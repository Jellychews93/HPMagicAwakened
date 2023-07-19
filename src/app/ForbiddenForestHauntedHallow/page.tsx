'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Box, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { theme } from '../../components/Theme';

// wizard greene = https://www.youtube.com/watch?v=aC7f5Wk6_IE&ab_channel=WizardGreene
// wizard greene forest guide https://www.youtube.com/watch?v=aC7f5Wk6_IE&ab_channel=WizardGreene

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Haunted Hallow/Deathly Dell Guide
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        <span style={{ textDecoration: 'underline' }}>Wizard Greene</span > on Youtube did a great video on both the
        haunted hallow and deathly dell. Check him
        out on <a href="https://www.youtube.com/watch?v=aC7f5Wk6_IE&ab_channel=WizardGreene">Youtube</a> as well!
      </Typography>
      <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', mx: '5vw', }}>
        <iframe
          src="https://www.youtube.com/embed/aC7f5Wk6_IE"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '90%' }}
        />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default page