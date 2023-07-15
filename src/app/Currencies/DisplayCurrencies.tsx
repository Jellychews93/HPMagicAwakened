import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { keys, forest, others, club } from './CurrenciesObject';
import Image from 'next/image';

interface Currency {
  name: string;
  src: {
    src: string;
  };
  description: string;
}

interface DisplayCurrenciesProps {
  currency: Currency[];
}

function DisplayCurrencies({ currency }: DisplayCurrenciesProps) {
  return (
    <Grid container spacing={2} sx={{ px: '5vw', py: '3vh', mb: '5vh' }}>
      {currency.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Typography variant='h4' sx={{ mb: '3vh' }}>{item.name}</Typography>
            <Image
              src={item.src.src}
              alt={item.name}
              style={{ width: '100%', height: '50vh', objectFit: 'cover', objectPosition: 'top' }}
            />
            <Typography variant='h5' sx={{ mt: '3vh' }}>{item.description}</Typography>
          </Grid>
        );
      })}
    </Grid>
  )
}

export default DisplayCurrencies