'use client'
import React, { useState } from 'react';
import { Box, Grid, Button, Typography, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { images } from './DDImages';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import { theme } from '../../components/Theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  width: '100vw',
  border: '2px solid #000',
  boxShadow: 12,
  p: 1,
};

function Page() {
  const [open, setOpen] = useState<boolean[]>(Array(images.length).fill(false));

  const handleOpen = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };

  const handleClose = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = false;
    setOpen(newOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Deathly Dell Guide by Shirru
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        Awesome guide by <span style={{ textDecoration: 'underline' }}>Shirru</span >!
      </Typography>
      <Grid container>
        {images.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box key={index} sx={{ mx: '3vw', mb: '5vh' }}>
              <Button onClick={() => handleOpen(index)} sx={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }}>
                <Image src={item.src.src} alt={item.alt} width="0" height="0" sizes="100vw" className="w-full h-auto" />
              </Button>
              <Modal
                open={open[index]}
                onClose={() => handleClose(index)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} onClick={() => handleClose(index)}>
                  <Image src={item.src.src} alt={item.alt} width="0" height="0" sizes="100vw" className="w-full h-auto" />
                </Box>
              </Modal>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Page;
