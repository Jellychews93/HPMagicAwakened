import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Two from '../../../../public/assets/DeckBuilding/Two.png';

export default function Harry() {
  const imageSize = '700';
  return (
    <Box>
      <Typography variant='h3'>
        yEr a WIzaRD, heRRy
      </Typography>
      <Typography variant='h5'>
        Harry&apos;s echo grants damage and healing boost to all spells that are 3 cost or lower. Naturally, we include cheap spells. Your main combo are the following: Oppugno + Broom & Inflatus + Bewitched Snowball. These are the cards that deal the highest damage in Harry&apos;s arsenal.<br />
        Due to the fact that Harry spams a lot of cheap spells, we can benefit from the discount effect of Three Headed Dog. Note that you should ONLY use the dog when it&apos;s 0 cost. Not when it&apos;s 3 cost, not when it&apos;s 2, and not when it&apos;s 1. Only use at 0 cost.<br />
        With that in mind, here are a collection of cards that synergize well with Harry, written in the aforementioned three-category format:<br />
        <br />
        ⭐Central Cards:<br />
        Bewitched Snowball, Oppugno<br /><br />
        + Supports:<br />
        Inflatus or Incarcerous (for snowball)<br />
        Broom (for Oppugno)<br />
        Expulso (very useful for Harry after damage buff)<br />
        Nebulus<br />
        Stupefy<br />
        Expelliarmus<br />
        Episkey or Essence of Dittany<br />
        Portkey<br />
        Prior Incantanto (Note: copied 3 cost cards becoming 4 cost CAN benefit from the echo buff. Have fun with double Snowball)<br />
        Three Headed Dog (discount)<br />
        Golden Snitch ＊(not yet in global; function includes extra mana for casting and movement cards for kiting)<br />
        Manticore (not recommended, but you could use this if you desperately need more movement)<br />
        Skrewt<br /><br />
        ~ Techs:<br />
        Acromantula Venom<br />
        Incendio<br />
        Atmosphere Charm<br />
        Crucio<br />
        Ideally, Harry echo should not include any of the cards listed in the Techs section. Harry echo demands high precision and a noticeably higher skill level to play well. Using your cheap spells smartly to dispatch swarms of creatures, stupefy to pinball Piertotum Locomotor, breaking dragon eggs with Max Range snowballs, etc. Instead of relying on the tech cards like venom or atmosphere charm.
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Two.src} alt='Harry Deck' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/UdRphSFXxfg"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        Among Harry&apos;s choice of companions, there are TWO very important cards that you will wish to squeeze into the roster. Luna Lovegood Companion and Prof. McGonagall companion. Unfortunately, neither Luna companion nor Prof. McGonagall are available in global yet. But as they are integral to future Harry echo combos, we will talk about them for a bit.<br />
        The moment you summon Prof. McGonagall, she will transfigure every unit on the map into a small critter. Transfigured units take extra damage and are slowed (and unable to attack if they are creature or companion units). This is essentially a screen-wide time-out button.<br />
        While she is on the field, every time you use a card, she will transfigure a random unit on the field. Which means if there is only the enemy wizard, she will consistently transfigure them, constantly slowing them and letting you deal extra damage.<br />
        After you have cast 8 cards, she will summon a single Piertotum Locomotor statue.<br />
        Ideally, you wait until 9 or 10 mana, put down Prof. McGonagall, and spam all your spells in quick succession. You can hide/protect her with Nebulus, prolonging her presence on the field and creating pressure through the slow effect/summon statue.<br />
        -----<br />
        While Luna Lovegood companion is on the field, every time you cast a spell, she will summon a random creature of corresponding cost -1. For example, cast a 3 mana spell, she will summon a random 2-cost creature for you. After accumulating a total of 20 mana, she will summon a Thestral, which deals high damage in a small area. Again, protect her with Nebulus and spam your spells after waiting for 10 or 9 mana. She will summon a swarm of creatures for you, and if the enemy doesn&apos;t kill her quickly, will summon a hard-hitting thestral.<br />
        But for now....<br />
        In global, we suggest using Lottie, Ron, Hagrid.<br />
        Replace Lottie with Grawp or Frey Twins, or Cassandra.<br />
      </Typography>
    </Box>
  );
}
