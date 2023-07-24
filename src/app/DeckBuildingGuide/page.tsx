'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import One from '../../../public/assets/DeckBuilding/One.png';
import Two from '../../../public/assets/DeckBuilding/Two.png';
import Three from '../../../public/assets/DeckBuilding/Three.png';
import Four from '../../../public/assets/DeckBuilding/Four.png';
import Five from '../../../public/assets/DeckBuilding/Five.png';
import Six from '../../../public/assets/DeckBuilding/Six.png';
import Seven from '../../../public/assets/DeckBuilding/Seven.png';
import Eight from '../../../public/assets/DeckBuilding/Eight.png';
import Nine from '../../../public/assets/DeckBuilding/Nine.png';
import Ten from '../../../public/assets/DeckBuilding/Ten.png';
import Eleven from '../../../public/assets/DeckBuilding/Eleven.png';
import Twelve from '../../../public/assets/DeckBuilding/Twelve.png';
import Thirteen from '../../../public/assets/DeckBuilding/Thirteen.png';
import Harry from './Decks/Harry';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Hermione from './Decks/Hermione';
import Newt from './Decks/Newt';
import Snape from './Decks/Snape';
import Neville from './Decks/Neville';
import Bellatrix from './Decks/Bellatrix';
import Dobby from './Decks/Dobby';
import Hagrid from './Decks/Hagrid';
import Twins from './Decks/Twins';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function Page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery('(max-width:768px)');
  const imageSize = '700'

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Deck Building Guide by QQInfinity
      </Typography>
      <Box sx={{ px: '10vw' }}>
        <Typography variant='h4'>
          Hello this is QQinfinity, your resident Top Hat lover.<br />
          I am biting the bullet and writing the first strategy guide for this channel here because being informative is kind of my whole deal - ask the other old members of the discord.<br />
          You can find table of contents in the Pins 📌
        </Typography>
        <Typography variant='h4' sx={{ mt: '3vh', textDecoration: 'underline' }}>
          Now disclaimer:
        </Typography>
        <Typography variant='h5'>
          I am a player of the Taiwanese server, which first came out in 2021 autumn, and I joined HPMA in 2022 January; I then &apos;quit&apos; HPMA in 2022 July, and now I came back 2023 June after a full year of hiatus.
          The information within this guide will not perfectly match the current state of global server nor the current state of taiwan server (since I am literally one year behind the others). But seeing as no one seems willing to share, this is all you&apos;re getting. Besides, knowledge is knowledge anyway.
        </Typography>
        <Typography variant='h4' sx={{ mt: '3vh' }}>
          The aim of this guide:
        </Typography>
        <Typography variant='h5'>
          This guide will attempt to explain the basic mindset and attitude necessary to build a decent deck that will compliment the echo of your choice. Hopefully after reading this guide you will make better informed choices when adding cards and formulating strategy. While this guide will include a few sample builds, please DO NOT take it as gospel, and adjust the cards to your preferences and playstyle.<br />
          Also this is mostly dueling. Not forest.
        </Typography>
        <Typography variant='h4' sx={{ mt: '3vh' }}>
          The Venn Diagram:
        </Typography>
        <Typography variant='h5'>
          Imagine a Venn Diagram (two circles that overlap). One circle is SPELLS, and the other circle is CREATURES, while the central intersection is MIXED.<br />
          Generally, Harry and Hermione echo will want a deck predominantly composed of Spells, Newt will want a deck full of CREATURES, and everyone else is a different degrees of MIXED where they lean closer to having more spells or having more creatures. <br />
          It is highly discouraged to make a harry/hermy deck with more than one or two creatures (which are usually either Three Headed Dog, or Skrewt, or Golden Snitch＊), same for Newt decks having more than one or two spells. <br />
          (Golden Snitch is currently unavailable in Global)<br />
          【continued......】
        </Typography>
        <Image src={One.src} alt='venn diagram' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        <Typography variant='h4' sx={{ mt: '3vh' }}>
          Reading your effects (cards and echoes)
        </Typography>
        <Typography variant='h5'>
          The reason Harry and Hermione want to stick to spells, is because Harry&apos;s spell that are 3 mana and less will get damage/healing buff, and Hermione will boost the most expensive spell in her hand after using three other spells. Their echo effect do not benefit from the addition of creature cards at all. Which is why to maximize their echo effect, less creatures is always better for them.<br />
          On the other side of the spectrum, Newt&apos;s echo effect will generate a 1 mana cost creature after playing three creature cards. Again, to maximize his effect, less spell is better.<br />
          While the other echoes are still dependent on specific cards and will lean more heavily towards more spells or more creatures, the final result will generally be a mixed deck. Like Neville or Hagrid, their main focus will be one or two creatures, but will include supportive spells. And Snape or Bella, who prefer spells but will bring creatures of specific functions for support.
        </Typography>
        <Typography variant='h4' sx={{ mt: '3vh' }}>
          Picking your cards:
        </Typography>
        <Typography variant='h5'>
          While it is possible to separate cards into categories like &apos;support&apos; or &apos;damage dealing&apos;, etc. For the purpose of DECK BUILDING, I propose an alternative sorting system that will make it slightly easier to pick your cards.<br />
          Your Main Focus/Central Card<br />
          The One (or Two) card that will be central to your strategy.<br />
          Your complimentary cards/support<br />
          Four or five cards that will boost your central card or will give extra value to your central strategy.<br />
          Counter-Picks/Tech Cards<br />
          One or two cards picked specifically to deal with weaknesses or problems that your strategy struggle with.
        </Typography>
        <Typography variant='h4' sx={{ mt: '3vh' }}>
          Picking your Echo Bonuses
        </Typography>
        <Typography variant='h5'>
          The mentality for echo bonus is usually &quot;	It&apos;s got ONE bonus that I really like. It will have to do.&quot;	 and not bother trying to optimize echo bonuses too much until you get to a really high level. You need to farm gold echoes and spend lots of coins, even then you won&apos;t always get bonuses you like.
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{
            borderBottom: '1px solid #EDC865', display: 'inline-block', flexGrow: 1,
            maxWidth: { xs: 320, sm: 480, md: 780, lg: 1000, },
          }}>
            <Tabs
              variant="scrollable"
              value={value}
              onChange={handleChange}
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              sx={{
                mt: '5vh',
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  color: '#EDC865',
                  '&.Mui-selected': {
                    color: '#dddddd',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#EDC865',
                },
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                  color: '#EDC865',
                },
              }}
            >
              <Tab label="Harry" {...a11yProps(0)} />
              <Tab label="Hermione" {...a11yProps(1)} />
              <Tab label="Newt" {...a11yProps(2)} />
              <Tab label="Snape" {...a11yProps(3)} />
              <Tab label="Neville" {...a11yProps(4)} />
              <Tab label="Bellatrix" {...a11yProps(5)} />
              <Tab label="Dobby" {...a11yProps(6)} />
              <Tab label="Hagrid" {...a11yProps(7)} />
              <Tab label="Twins" {...a11yProps(8)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Harry />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Hermione />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Newt />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Snape />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Neville />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Bellatrix />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Dobby />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Hagrid />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Twins />
            </TabPanel>
          </Box >
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Page
