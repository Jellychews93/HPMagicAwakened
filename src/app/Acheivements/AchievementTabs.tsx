'use client'
import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { duelingAchievements } from './Achievements'
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import DisplayAchievements from './DisplayAchievements';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AchievementTabs() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{
        borderBottom: '1px solid #EDC865', display: 'inline-block', flexGrow: 1,
        maxWidth: { xs: 320, sm: 480, md: 780, lg: 1000, },
      }}>
        <Tabs value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#EDC865',
            },
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
              color: '#EDC865',
            },
          }}>
          <Tab label="Dueling Achievements" {...a11yProps(0)} sx={{
            color: '#EDC865',
            '&.Mui-selected': { color: '#dddddd', },
          }} />
          <Tab label="Dueling Achievements" {...a11yProps(1)} sx={{
            color: '#EDC865',
            '&.Mui-selected': { color: '#dddddd', },
          }} />
          <Tab label="Dueling Achievements" {...a11yProps(2)} sx={{
            color: '#EDC865',
            '&.Mui-selected': { color: '#dddddd', },
          }} />
          <Tab label="Dueling Achievements" {...a11yProps(3)} sx={{
            color: '#EDC865',
            '&.Mui-selected': { color: '#dddddd', },
          }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {duelingAchievements.map((item, index) => (
          <DisplayAchievements key={index} achievements={duelingAchievements} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {duelingAchievements.map((item, index) => (
          <DisplayAchievements key={index} achievements={duelingAchievements} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {duelingAchievements.map((item, index) => (
          <DisplayAchievements key={index} achievements={duelingAchievements} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {duelingAchievements.map((item, index) => (
          <DisplayAchievements key={index} achievements={duelingAchievements} />
        ))}
      </CustomTabPanel>
    </Box>
  );
}
