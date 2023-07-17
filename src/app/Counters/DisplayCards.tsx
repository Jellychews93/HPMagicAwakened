import { Box, Grid, Typography } from '@mui/material';

interface Card {
  name: string;
  type: string;
  description: string;
  guide: string;
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
            <Typography variant='h4'>{item.name} <span style={{ color: '#dddddd' }}>({item.type})</span></Typography>
            <Typography variant='h5' sx={{ overflowWrap: 'break-word', color: '#dddddd', my: '2vh' }}>{item.description}</Typography>
            <Typography variant='h5' sx={{ overflowWrap: 'break-word', }}>{item.guide}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default DisplayCards;
