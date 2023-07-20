import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Three from '../../../../public/assets/DeckBuilding/Three.png';
import Four from '../../../../public/assets/DeckBuilding/Four.png';
import Five from '../../../../public/assets/DeckBuilding/Five.png';
import Six from '../../../../public/assets/DeckBuilding/Six.png';

export default function Hermione() {
  const imageSize = '700'
  return (
    <>
      <Typography variant='h3' sx={{}}>
        Hermione Granger, Minister of Magic, Queen of HPMA
      </Typography>
      <Typography variant='h5'>
        It is no exaggeration that Hermy echo has dominated (and continues to dominate) the HPMA meta with her simplistic yet powerful echo effect.<br />
        Her echo effect involves halving the most expensive card in hand and boosting it's card level by 1 (50% probability for level boost) after playing three spells.<br />
        And so the usual way to build her is to pick One very expensive spell, and bring a whole bunch of cheap spells to facilitate her echo buff. Some variations pick Two very expensive spells and let the echo effect buff them in rotation.<br />
        However we will discuss the two most popular hermy deck, the Hermy Thunderstorm, and the Hermy Firework/Whizbang.<br />
        I am not kidding when I say that Thunderstorm and Whizbang are almost always banned every month.
        <br /><br />
        ⭐Central Cards:<br />
        Thunderstorm, for thunderstorm
        or
        Whizbang, for Whizbang<br /><br />

        + Supports:<br />
        Oppugno+Broom (solid damage and cheap spell)<br />
        Expulso<br />
        Nebulus<br />
        Portkey (for thunderstorm)<br />
        Prior Incantanto (if aiming for double thunderstorm)<br />
        Incarcerous (whizbang component)<br />
        Inflatus (whizbang component)<br />
        Incendio or Sectum Sempra (your secondary source of dps)<br />
        Three Headed Dog<br />
        Stupefy<br />
        Expelliarmus<br />
        Side Along Apparition<br />
        Essence of Dittany or Episkey<br />
        Snowball<br />
        Blast Ended Skrewt<br />
        Golden Snitch＊
        <br /><br />

        ~ Techs:<br />
        Acromantula Venom (grounded creatures)<br />
        Accio (snipe companions and dragon eggs)<br />
        Atmosphere Charm (healing reduction, vs. hagrid and neville)<br />
        Confringo (newt creature swarm)<br />
        Crucio (ron or grawp or fiendfyre)<br />
        Aquamenti (all of the above mentioned functions, but with less efficiency)
        <br />
        Sample of Thunder Hermy and Whizbang Hermy.<br />
        Again, Luna and Prof. Mcgonagall are very strong picks for her, but its not available yet.<br />
        Lottie/Grawp/Frey Twins are all worth considering. Cassandra is helpful in dealing with creatures but bad against spells. Use Hermy companion as 1st if you want double thunderstorm.<br />
        Ron as second companion, or Hermy.<br />
        Hagrid as third.<br /><br />
        Thunder Hermy brings Portkey? Why Portkey?<br />
        You can throw the boot into enemy nebulus and break the fog. The portkey will grant vision, allowing Thunderstorm to hit things that are hiding inside. <br />
        Bewitched snowball follows a similar logic. The snowman with the aoe slow effect also grants vision into nebulus, but it is a lot less reliable than portkey since people can just dodge snowball, potentially letting it roll past the nebulus entirely.<br />
        If you don't find snowball to be a good fit for your deck, replace Snowball for something more useful, like three headed dog.<br />
        Proof that boot can pierce nebulus<br />
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Three.src} alt='thunderstorm' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/PliDf95F7mI"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        Sample of Whizbang<br />
        Remember that your echo discount occurs after three spells.<br />
        So generally you'll be using: cheap, cheap, cheap spell, then play the buffed expensive spell.<br />
        For thunderstorm, cheap cheap cheap (example, oppugno into broom, then expulso) to discount the thunderstorm in your hand. Then you play thunderstorm. If enemy has nebulus, you wait for 2 additional mana, play thunderstorm and immediately throw portkey into enemy nebulus. For the sake of optimization, cheap-cheap-portkey-thunderstorm (after waiting for mana to play both portkey and thunderstorm immediately).<br />
        For whizbang, cheap cheap spell, then a control spell, then whizbang. (example: oppugno into broom, then wait 7 mana, incarcerous into discounted 4 mana whizbang).<br />
        Additional footages of Thunder Hermy:
        <Grid container sx={{ my: '5vh' }}>
          <Grid item xs={12} md={4}>
            <Image src={Four.src} alt='whizbang' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <iframe
              src="https://www.youtube.com/embed/SiCZcWDwt2I"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <iframe
              src="https://www.youtube.com/embed/ssUWv5phr64"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
        <Typography variant='h5'>
          <br />What is Double Thunderstorm? And Triple Thunderstorm?
          <br />Prior Incantanto allows you to copy a spell you previously used. Through precise control of card rotation, it is possible to play two thunderstorms in quick succession. This is known as the double thunderstorm. To achieve this, the sequence of cards should be:
          <br />Cheap, cheap, cheap, buff the thunderstorm but don't play it yet.
          <br />Then, cheap, cheap, discounted thunderstorm, into discounted prior incantanto copied thunderstorm.
          <br />The Hermione companion will immediately use an identical spell when you put her down and cast a spell. So Hermy companion is required to achieve triple thunderstorm.
          <br />(In the future, after Dumbledore companion releases, its possible to achieve quadruple thunderstorm, because dumbledore will enhance a spell you cast to trigger twice. So its dumble-enhanced thunderstorm that triggers twice + priori thunderstorm + hermy companion thunderstorm)
          <br />Regular thunderstorm sequence
        </Typography>
        <Grid container sx={{ my: '5vh' }}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5'>
              Regular thunderstorm sequence
            </Typography>
            <Image src={Five.src} alt='thunderstorm' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
            <Typography variant='h5'>
              Regular Whizbang Sequence
            </Typography>
            <Image src={Six.src} alt='thunderstorm' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
          </Grid>
        </Grid>
        <Typography variant='h5'>
          <br />Echo bonuses to look out for:
          <br />Thunderstorm or Whizbang
          <br />Prior Incantanto, Oppugno, Expulso, Nebulus, Inflatus, Incarcerous, Three headed Dog, and anything in the support card section.
          <br />You can also fish for bonuses on your companions, particularly Hermy companion. Every level she gains means the spell she copies hits harder, she has slightly more HP to survive a bit longer.
        </Typography>
      </Typography>
    </>
  )
}