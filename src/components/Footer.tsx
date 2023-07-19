import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box>
      <Grid container spacing={1} sx={{ backgroundColor: 'primary.main', px: '5vw', textAlign: 'center', mt: '5vh' }}>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={2}>
          <Typography variant='h4'>
            Dueling
          </Typography>
          <Box sx={{ my: '1vh' }}>
            <ul>
              <li><a href="/DuelingClub" style={{ color: '#dddddd' }}>Dueling Club</a></li>
              <li><a href="/Counters" style={{ color: '#dddddd' }}>Counters</a></li>
              <li><a href="/1v1" style={{ color: '#dddddd' }}>1v1</a></li>
              <li><a href="/2v2" style={{ color: '#dddddd' }}>2v2</a></li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h4'>
            Forbidden Forest
          </Typography>
          <Box sx={{ my: '1vh' }}>
            <ul>
              <li><a href="/ForbiddenForestSolo" style={{ color: '#dddddd' }}>Solo</a></li>
              <li><a href="/ForbiddenForestHauntedHallow" style={{ color: '#dddddd' }}>Haunted Hallow</a></li>
              <li><a href="ForbiddenForestDeathlyDell" style={{ color: '#dddddd' }}>Deathly Dell</a></li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h4'>
            School Life
          </Typography>
          <Box sx={{ my: '1vh' }}>
            <ul>
              <li><a href="/Achievements" style={{ color: '#dddddd' }}>Achievements</a></li>
              <li><a href="/Classes" style={{ color: '#dddddd' }}>Classes</a></li>
              <li><a href="/ExamWeek" style={{ color: '#dddddd' }}>Exam Week</a></li>
              <li><a href="/SocialClub" style={{ color: '#dddddd' }}>Social Club</a></li>
              <li><a href="/Dance" style={{ color: '#dddddd' }}>Dance</a></li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h4'>
            Shop
          </Typography>
          <Box sx={{ my: '1vh' }}>
            <ul>
              <li><a href="/Shop" style={{ color: '#dddddd' }}>Shop Information</a></li>
              <li><a href="/Currencies" style={{ color: '#dddddd' }}>Currencies</a></li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h4'>
            <a href="/FAQ">FAQ</a>
          </Typography>
        </Grid>

      </Grid>
      <Box sx={{ backgroundColor: '#EDC865', minHeight: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
        <Typography variant='body1' sx={{ color: '#0d0604' }}>
          ©2023 Jellychews. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}