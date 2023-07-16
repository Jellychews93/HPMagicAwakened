import { Box, Grid, Typography } from '@mui/material';

interface Card {
  name: string;
  type: string;
  description: string;
}

interface DisplayCardsProps {
  cards: Card[];
}

function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <Grid container spacing={4}>
      {cards.map((item, index) => (
        <Grid item xs={4} key={index}>
          <Box sx={{ mx: '3vw' }}>
            <Typography variant='h3'>{item.name} <span style={{ color: '#dddddd', fontSize: '1.75rem' }}>({item.type})</span></Typography>
            <Typography variant='h4' style={{ overflowWrap: 'break-word' }}>{item.description}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default DisplayCards;
