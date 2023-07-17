import { Box, Grid, Typography } from '@mui/material';

interface Achievements {
  title: string;
  requirement: string;
}

interface DisplayAchievementsProps {
  achievements: Achievements[];
}

function DisplayAchievements({ achievements }: DisplayAchievementsProps) {
  return (
    <Grid container spacing={4}>
      {achievements.map((item, index) => (
        <Grid item xs={4} key={index}>
          <Box key={index} sx={{ mx: '3vw' }}>
            <Typography variant='h3'>{item.title}</Typography>
            <Typography variant='h4' style={{ overflowWrap: 'break-word', color: '#dddddd' }}>{item.requirement}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default DisplayAchievements;
