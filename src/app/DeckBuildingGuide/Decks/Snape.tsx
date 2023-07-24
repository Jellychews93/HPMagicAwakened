import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Eight from '../../../../public/assets/DeckBuilding/Eight.png';
import Nine from '../../../../public/assets/DeckBuilding/Nine.png';

export default function Snape() {
  const imageSize = '700';
  return (
    <>
      <Typography variant='h3' sx={{}}>
        Snape: What is that Mysterious Ticking Noise™️?
      </Typography>
      <Typography variant='h5'>
        It&apos;s a time bomb! 💣  It&apos;s a time turner!
        This is the section on how to build a Snape deck. Snape&apos;s echo effect will enhance his normal attack damage, and allow it to bounce to an extra target every second attack. Which is why to build his deck, we must play around this strength of empowered normal attack.
        The unique thing about Snape deck is that Time Turner and the Kevin Companion are absolutely mandatory. No room for negotiations. You want to play snape, you bring these two. No exception.
        But consequently, Snape can include literally every card in the game into their support category, depending on what strategy you&apos;re aiming for. Creatures, spells, as long as they are not Really Bad Cards™️, you can give them a try.
        <br /><br />
        ⭐Central Cards:<br />
        Time Turner (MANDATORY)
        Kevin (also Mandatory)
        <br /><br />
        + Supports:<br />
        <br />Oppugno
        <br />Nebulus
        <br />Expulso
        <br />Expelliarmus
        <br />Stupefy
        <br />Incarcerous
        <br />Acromantula Venom
        <br />Inflatus
        <br />Accio
        <br />Swelling Solution
        <br />Niffler
        <br />Matagot
        <br />Whomping Willow
        <br />Firecrab
        <br />Pixies
        <br />Ashwinder
        <br />Bombtastic Bomb (ESPECIALLY if you are a snape deck with extra creatures)
        <br />Portkey (if you run creatures, also funny with firecrab)
        <br />Manticore+Bludger
        <br />Incendio
        <br />Acromantula Nest
        <br />Crucio
        <br /><br />
        ~ Techs:<br />
        <br />Howler
        <br />Atmosphere Charm
        <br />Sectum Sempra
        Disclaimer, I am not very good at Snape, but here are some video footages of me playing Snape
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/KKJf4MqVULg"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/7cuV3ya4nfk"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        Snape, why does it have to be Snape
        <br />Time turner will create a clone that normal attacks automatically, but at half of your damage. This is fine though, since your echo already boosts your normal attack damage. And with Kevin, your attack damage will rise even higher. So high in fact that you will never need to bring Confringo to deal with creature swarms; maybe only need the occasional Expulso or Incendio to kill creatures placed too far away from you.
        <br />The main strategy is to put your time turner in the center of the field so it can reach enemy wizard hiding in the back line, as well as any creature back there. I prefer Firecrab Snape mostly because firecrabs will restrict enemy&apos;s field of movement, they either move into firecrab range or move into snape attack range or time turner clone attack range. Whomping Willow is great as well because it periodically tries to pull enemy forward, saving you a cast of Accio.
        <Grid container sx={{ my: '5vh' }}>
          <Grid item xs={12} md={4}>
            <Image src={Eight.src} alt='Eight' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
          </Grid>
        </Grid>
        <Typography variant='h5'>
          <br />Swelling Solution?
          <br />I am not a fan of it, but it does synergize pretty well with Snape. Include or exclude per your preferences.
        </Typography>
        <Typography variant='h5'>
          <br />Snape Companions?
          <br />Kevin 1st, no exception. Don&apos;t like it? Don&apos;t play Snape.
          <br />For second, its either Ron or Ivy (if you&apos;re creature heavy and don&apos;t want enemy Ron to wreck you).
          <br />Third is Hagrid.
          (the thing between oppugno and stupefy is portkey, by the way)
        </Typography>
        <Typography variant='h5'>
          <br />OH MY GOD! THEY KILLED kenny KEVIN!!
          <br />(again)
          <br />Once you place down Kevin, he will start to &apos;record&apos; how many times you have done a normal attack. After 24 times, you will receive his full normal attack damage buff. However, if Kevin dies, you will still receive a buff, though it will be much less.
          <br />Kevin&apos;s recording occurs in 6 tiers, and depending on how many times you attacked before he dies, you will receive a small boost. In theory, every four attack will advance the record by one stage. At stage 6 you gain full buff. If your Kevin dies before you get full buff, your chances of victory will literally plummet. Which is why snape is overall not a popular echo for dueling. He is so much better in Forest Explorations.
          <br />There are an unfortunately high amount of ways to torment Kevin. Kevin is a sitting duck, a single cast of Acromantula Venom will see him dead unless your level is way higher than the enemy. An Accio can pull him forward into slapping range. Swarming creatures could reach him before you manage to fully stack your normal attack buff. He could die to a Whizbang or Avada to the face. etc.etc.etc.
          <br />Some Snape players try to protect him by placing down Protego Totalum, or put the Whomping Willow in front of Kevin, or bring healing spells to heal him, Side Along Apparition to relocate him. etc. Success may vary, but at the end of the day..... Oh my God They killed Kevin!!(again)
          <br />Echo Bonuses for Snape?
          <br />Priority is always Kevin, then Time Turner.
          <br />Then seek bonuses on any of the support cards that you like to use.
          <br />Giving Kevin one or two extra levels gives him extra HP which could often mean the difference of surviving enemy attacks, and a higher buffed normal attack damage, which is good for us.
          <br />Although higher levelled time turner only increases Clone health, if clone survive longer = more chance to normal attack, so its still good for us.
        </Typography>
      </Typography>
    </>
  )
}