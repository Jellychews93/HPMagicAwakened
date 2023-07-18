import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';

interface Achievements {
  title: string;
  requirement: string;
}

interface DisplayAchievementsProps {
  achievements: Achievements[];
}

function DisplayAchievements({ achievements }: DisplayAchievementsProps) {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box>
      <Grid container spacing={4}>
        {achievements.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box key={index} sx={{ mx: '3vw' }}>
              <Typography variant='h4'>{item.title}</Typography>
              <Typography variant='h5' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.requirement}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DisplayAchievements;
