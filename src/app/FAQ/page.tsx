'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { duelingQuestions, forestQuestions, otherQuestions, schoolLifeQuestions, currencyQuestions } from './Questions';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';


function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Frequently Asked Questions
      </Typography>
      <Typography variant='h5' sx={{ textAlign: 'center', mx: '5vw', mb: '10vh' }}>
        Please take these answers with a grain of salt as my knowledge is obviously not 100% accurate. I am simply answering these to
        the best of my abilities and from what others have said.
      </Typography>

      {/* Dueling Questions */}
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'left', mx: '5vw', mt: '8vh', mb: '3vh' }}>
          Dueling Related Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {duelingQuestions.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', mx: '5vw', mb: '3vh' }}>
              <Typography variant='h4'>{item.question}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.answer} - {item.answeredBy}</Typography>
            </Box>
          ))}
        </Grid>
      </Box>
      {/* forest Questions */}
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'left', mx: '5vw', mt: '8vh', mb: '3vh' }}>
          Forest Related Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {forestQuestions.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', mx: '5vw', mb: '3vh' }}>
              <Typography variant='h4'>{item.question}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.answer} - {item.answeredBy}</Typography>
            </Box>
          ))}
        </Grid>
      </Box>
      {/* schoolLife Questions */}
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'left', mx: '5vw', mt: '8vh', mb: '3vh' }}>
          School Life Related Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {schoolLifeQuestions.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', mx: '5vw', mb: '3vh' }}>
              <Typography variant='h4'>{item.question}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.answer} - {item.answeredBy}</Typography>
            </Box>
          ))}
        </Grid>
      </Box>
      {/* currency Questions */}
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'left', mx: '5vw', mt: '8vh', mb: '3vh' }}>
          Currency Related Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {currencyQuestions.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', mx: '5vw', mb: '3vh' }}>
              <Typography variant='h4'>{item.question}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.answer} - {item.answeredBy}</Typography>
            </Box>
          ))}
        </Grid>
      </Box>
      {/* other Questions */}
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'left', mx: '5vw', mt: '8vh', mb: '3vh' }}>
          Other Related Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {otherQuestions.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', mx: '5vw', mb: '3vh' }}>
              <Typography variant='h4'>{item.question}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.answer} - {item.answeredBy}</Typography>
            </Box>
          ))}
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>

  )
}

export default page