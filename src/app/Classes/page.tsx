'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import classAccess from '../../../public/assets/Class/ClassAccess.jpg'
import inviteFriends from '../../../public/assets/Class/InviteFriends.jpg'
import Answers from './Answers'
import { hogwartsClasses } from './ClassesObject'
import Image from 'next/image'
import { theme } from '../../components/Theme';


function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '5vh' }}>
        Classes Guide
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: '5vw', textAlign: 'center' }}>
        <Typography variant='h4' sx={{ mb: '3vh' }}>
          Classes are a fun way to play with your friends. There are a total of seven different classes available.
          You can access them on this screen in the first image. In the second image, you use the plus sign to invite your friends.
          You can also invite your companions like Cassandra to join you in your classes.
        </Typography>
        <Grid container spacing={2} sx={{ mb: '3vh' }}>
          <Grid item xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={classAccess.src}
              alt="Class access"
              style={{ maxWidth: '100%', maxHeight: '800px', height: 'auto', marginInline: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={inviteFriends.src}
              alt="Class access"
              style={{ maxWidth: '100%', maxHeight: '800px', height: 'auto', marginInline: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={2} />
        </Grid>
      </Box>

      {/* Displaying Hogwarts Classes */}
      {hogwartsClasses.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: '5vw',
            textAlign: 'center',
          }}>
          <Typography variant="h3" sx={{ mb: '3vh' }}>
            {item.name}
          </Typography>
          <Typography variant="h4" sx={{ mb: '3vh' }}>
            Taught by: Professor {item.professor}
          </Typography>
          <Grid item xs={12} sm={8} md={8} key={item.id}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              mx: '5vw',
              textAlign: 'center',
              mb: '10vh'
            }}>
            <Image width={300} height={300}
              src={typeof item.src === 'string' ? item.src : item.src.src}
              alt={item.name}
              style={{ width: '40%', maxHeight: '600px', height: 'auto', display: 'flex', marginInline: 'auto' }}
            />
            <Typography variant="h5" sx={{ textAlign: 'left', mt: { xs: '3vh', sm: 0 }, ml: { xs: 0, sm: '3vh' } }}>
              Description: {item.description}
              <br />
              <br />
              Explanation: {item.explanation}
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Box sx={{ textAlign: 'center', mx: 'auto', justifyContent: 'center', mt: '10vh' }}>
        <Typography variant='h3' sx={{ mb: '3vh' }}>
          Answers to the classes
        </Typography>
        <Answers />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Page
