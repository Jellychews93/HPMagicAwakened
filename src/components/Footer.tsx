import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const linkStyles = {
    display: 'block',
    textAlign: 'center',
    color: '#eeeeee',
    margin: '1vh',
    textDecoration: 'none',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
  };

  const menuTitles = {
    mt: '4vh',
    mb: '2vh',
    textAlign: 'center',
    color: '#FFFFFF',
    textDecoration: 'underline'
  };
  const menuText = {
    textAlign: 'center',
    color: '#eeeeee',
  };
  const iconStyles = {
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    color: '#eeeeee',
    fontSize: isMobile ? '3rem' : '2rem',
    mr: '1vw',
    borderRadius: '30%',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
  };

  return (
    <Box>
      <Grid container spacing={1} sx={{ backgroundColor: 'primary.main', px: '5vw' }}>
        <Grid item xs={12} md={3} >
          <Box>
            {/* <img src={logo} alt='logo' style={{ height: '5vh', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: '50%', }} /> */}
            <Typography variant='h4' sx={menuTitles}>
              TD Therapy Alliance
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={menuText}>
          <Typography variant='h4' sx={menuTitles}>
            Menu
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Hours
          </Typography>
          <Typography variant='body1' sx={menuText}>
            Monday: 9-5 PM <br />
            Tuesday: 9-5 PM <br />
            Wednesday: 9-5 PM <br />
            Thursday: 9-5 PM <br />
            Friday: 9-5 PM <br />
            Saturday: Closed <br />
            Sunday: Closed <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Social Media
          </Typography>
          <Box sx={{ mb: '5vh', textAlign: 'center', }}>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: '#008e82', minHeight: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
        <Typography variant='body1' sx={{ color: '#eeeeee' }}>
          ©2023 John Nam. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}