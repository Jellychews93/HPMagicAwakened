'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CAAbilities from '../../../public/assets/Club/CAAbilities.jpg'
import CABoss from '../../../public/assets/Club/CABoss.jpg'
import CARewards from '../../../public/assets/Club/CARewards.jpg'
import ClubAdventure from '../../../public/assets/Club/ClubAdventure.jpg'
import CardTradeConfirm from '../../../public/assets/Club/CardTradeConfirm.jpg'
import SocialClubLocation from '../../../public/assets/Club/SocialClubLocation.jpg'
import ExchangeCards from '../../../public/assets/Club/ExchangeCards.jpg'
import MembersDetails from '../../../public/assets/Club/MembersDetails.jpg'
import TradeCards from '../../../public/assets/Club/TradeCards.jpg'
import Image from 'next/image';
import Footer from '@/components/Footer';
import { theme } from '../../components/Theme';


function page() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
            Social Club Guide
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ textAlign: 'center', mx: '5vw', mb: '10vh' }}>
            The Social Club is HPMAs way to have people interact and do activities together. When the game was first released to global,
            there was a social club event and it had tasks that required players to do almost all aspects of the game like dancing, forest runs,
            and etc with their club mates. It was super fun and I really hope they bring this back. However even without this, there are some key
            things to do with your social club. Note: if you leave your social club, you must wait 4 hours to join another one.
          </Typography>
        </Grid>

        {/* Social Club Location */}
        <Typography variant='h2' sx={{ mx: '3vw' }}>
          How to get to your social club
        </Typography>
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={2} md={2} />
          <Grid item xs={4} md={4}>
            <Image width={400} height={400}
              src={SocialClubLocation.src}
              alt="How to get to your social club"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <Image width={400} height={400}
              src={MembersDetails.src}
              alt="Member Details"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid xs={2} md={2} />
          <Grid item xs={12} sx={{ mx: '7vw' }}>
            <Typography variant='h4'>
              When you open your mini map, you should see a button that says social club assuming you are in one. If you are not in one,
              you can apply to one and after joining, you should be able to visit. Here you can also see the member details. If you wish
              to leave your club, click on details and you should see an option to leave. On the right image, you can see how much each
              player has contribute to the club. You gain contribution points by participating in the Club Adventure.
            </Typography>
          </Grid>
        </Grid>

        {/* club adventure */}
        <Typography variant='h2' sx={{ mb: '3vh', mx: '3vw' }}>
          Club Adventure
        </Typography>

        {/* club adventure explanation */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={ClubAdventure.src}
              alt="Club Adventure"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              The Club Adventure is like a raid in which every club member can participate twice in per day.
              Each stage has a different boss and after defeating the main ones, your club will then start battling in endless stages.
              It is recommended you challege with others to maximize the damage your team does. To invite others, you click on the golden
              crosses on the top right. You can only invite people who are in your club.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* club adventure bosses */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={CABoss.src}
              alt="Club Adventure"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              In the picture is what the boss selection stage looks like. You must select the current one. It is not shown but if you click
              the bosses, you can see who did the most damage to that boss in your club. After you select the boss, click start to begin the challenge.
              There is NO penalty if you lose. The goal is simply to do as much damage as possible to the boss.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* club rewards bosses */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={CARewards.src}
              alt="Club Adventure"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              After your team defeats a boss, your entire club will recieve a reward like shown. During the endless stages, you will only recieve
              club ability coins
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* club abilities */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={CAAbilities.src}
              alt="Club Adventure"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              You use these tokens to increase the abilities of your club. This ability upgrade benefits ALL club members and there is
              no reason for you to save these coins. You should use them asap! Participting in the Club Adventures is a great way to
              play with others and be active in your club.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* club abilities */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={CAAbilities.src}
              alt="Club Adventure"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              You use these tokens to increase the abilities of your club. This ability upgrade benefits ALL club members and there is
              no reason for you to save these coins. You should use them asap! Participting in the Club Adventures is a great way to
              play with others and be active in your club.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* Card Exchange */}
        <Typography variant='h2' sx={{ mx: '3vw' }}>
          Card Exchange
        </Typography>
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={ExchangeCards.src}
              alt="Card Exchange"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              The Card Exchange is another HUGE benefit of being in a club. You can trade cards with your club mates here. To initiate
              a trade, you click the card you want, and click the cards you are willing to trade away. You MUST have an extra copy of the card.
              You can not trade away your entire card.. meaning you will always have a copy of the card. Also to trade card, you must
              have a trade token of the cards rarity. For example if you want to trade an epic card, you must have an epic trade token.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* Card Trade */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={TradeCards.src}
              alt="Trade Card"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              In the social club exchange section, you can see what trades your club mates have requested. On the left is the card they want
              and on the right is what they are willing to trade away. If you see a trade you like and you have the appropriate trade token,
              you can make the trade.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>

        {/* Card Trade Confirmation */}
        <Grid container spacing={4} sx={{ px: '3vw', my: '5vh' }}>
          <Grid xs={12} md={2} />
          <Grid item xs={12} md={4}>
            <Image width={400} height={400}
              src={CardTradeConfirm.src}
              alt="Card Trade Confirmation"
              style={{ maxWidth: '100%', maxHeight: '1200px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h4'>
              When you click trade, you will see this screen. Select the card you want from the list of cards. The left one is the one you are
              giving away and the right one is the one you are receiving. To complete the trade you must also have a trade token. After completing the trade
              you will also receive 100 gold which is always nice.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}

export default page