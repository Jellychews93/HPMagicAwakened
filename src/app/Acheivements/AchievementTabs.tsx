'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { duelingAchievements } from './Achievements'
import { Grid } from '@mui/material';
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: '1px solid #EDC865', display: 'inline-block' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#EDC865',
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
          <Tab label="Dueling Achievements" {...a11yProps(2)} sx={{
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
    </Box>
  );
}
