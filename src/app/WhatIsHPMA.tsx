'use client'
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HPMA from '../../public/assets/HPMA.jpg'
import Image from 'next/image';

const WhatIsHPMA = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Grid container alignItems="center" spacing={2} sx={{ mt: '5vh' }}>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{}}>
        <Typography variant='h1' sx={{ textAlign: 'center', mb: '3vh' }}>
          What Is Harry Potter Magic Awakened?
        </Typography>
        <Image src={HPMA.src} alt="HPMA Photo"
        width={300} height={300}
          style={{
            width: '50vw',
            marginInline: 'auto',
            border: '2px solid #000',
            borderRadius: '25%',
          }} />
        <Typography variant='h5'>
          From the HPMA Official Website:
        </Typography>
        <Typography variant='h5'>
          Your journey to master the magic starts here! You are invited to attend the Hogwarts School of Witchcraft and Wizardry. Duel in thrilling multiplayer, real-time matches. Browse the dazzling shops of Diagon Alley, solve mysteries as you roam the school halls, show off your moves at the Dance Club, explore the Forbidden Forest, and more in this new card collection and role-playing game!
        </Typography>
      </Grid>
      <Grid item xs={1} />
    </Grid >
  );
};

export default WhatIsHPMA;
