'use client'
import profile from '../../public/assets/aboutMe/Profile.png'
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Grid container alignItems="center" spacing={2} sx={{ mt: 5 }}>
      <Grid item xs={2} sx={{}} />
      <Grid item xs={isMobile ? 12 : 4} sx={{}}> {/* Updated xs value */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: isMobile ? 2 : 0, // Added margin bottom for spacing on mobile
          }}
        >
          <Image
            src={profile.src}
            alt="Profile Picture"
            width={300}
            height={300}
            style={{
              border: '2px solid #000',
              borderRadius: '25%',
              width: '75%',
              marginInline: 'auto',
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={isMobile ? 12 : 4} sx={{ mx: '2vw' }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Hi! I&apos;m Jellychews
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center', mt: '1vh' }}>
          I&apos;m a 1v1 Magic Awakened player in North America and saw that there was a severe lack of resources for this game.
          <br />
          I am going to try to use this website as a tool for my club as a guide of sorts. I am by no means a pro player or anything but I seem to have some answers for a lot of my club mates&apos; questions.
          <br />
          So I decided to build a website with my current knowledge and things I&apos;ve learned from other players. The goal is to help out newer players get started and have a source for information in the game. Feel free to share!
          <br />
          Copyright: If I&apos;ve used any content or assets that you&apos;d prefer I didn&apos;t and/or haven&apos;t given any proper citations, please let me know and I will take it down immediately.
          Jellychews93@gmail.com
          <br />
          If you&apos;re interested in contributing as a developer or have content you have to add or edit, feel free to email me as well. I could 
          definitely use the help!
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{}} />
    </Grid>
  );
};

export default AboutMe;
