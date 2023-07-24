import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Fifteen from '../../../../public/assets/DeckBuilding/Fifteen.png';

export default function Twins() {
  const imageSize = '700';
  return (
    <Box>
      <Typography variant='h3'>
        So..... uhm..... about that Weasley Twins deck.....
      </Typography>
      <Typography variant='h5'>
        <br />  I have never played Weasley Twins. I have never touched their echo. I do not know anything about Weasley Twin decks.
        <br />Although, I have asked some of the CN/TW players I know who play them, they say that currently global does not have the cards that will allow for a successful weasley twin deck. So uhhhhhh..... if you don&apos;t mind watching me trying to pull some nonsense out of my ass, here is what I think could work as a Weasley Twins deck...?
        <br /><br />
        <br />Twins are all about Value and battle of attrition. The longer you survive, the more frequently you can use your randomly replenishable companions to swing the advantage into your favor. Twins can use companions slightly earlier than others, they will have a bit more HP. So picking cards that have bigger value than their advertised cost is very important for twins, because you don&apos;t have an echo effect to strengthen any of your regular cards.
        <br />Which is why I suggest Matagot and Acromantula Nest. These two are Big Value™️ cards. Matagot is fast, hits hard, very sticky, and less likely to die to a single spell often needing two spells or more to kill, forcing enemy to waste extra mana. Acromantula Nest will constantly create little spiders that leave puddles of venom behind, its damage and zoning potential is really good.
        <br />Then I decided to include the Bludger and Manticore combo, because Bludger&apos;s damage is pretty significant, and having Manticore to help alleviate movement card restriction, and dodging in general, will ensure you survive long enough to spam companions.
        <br />For companions, we suggest Grawp and Twins and Hagrid. Despite the fact that twins technically can use companions for unlimited amount of time, these three are picked because of their highest value in general. Grawp is tanky and hits hard, Frey Twins hit hard and are not easy to kill, Hagrid Bike is literally S tier in terms of usefulness, you can use Hagrid Bike to tackle enemy creatures too.
        <br /><br />
        ⭐Central Cards:<br />
        <br />Your three companions
        <br />Matagot
        <br /><br />
        + Supports:<br />
        <br /> Incendio/Sectum Sempra
        <br /> Bludger
        <br /> Manticore
        <br /> Bombtastic Bomb
        <br /> Niffler
        <br /> Acromantula Nest
        <br /> Nebulus (turtling)
        <br /> Episkey or Essence of Dittany (supporting Grawp and Frey)
        <br /> Protego (same as above)
        <br /> Whomping Willow or Firecrab
        <br /> Erumpet (value)
        <br /> Glacius Maxima(!!!!)
        <br /> Time Turner(!!!!)
        <br /><br />
        ~ Techs:<br />
        <br /> Confringo
        <br /> Crucio
        <br /> Acromantula Venom
        <br /> Atmosphere Charm
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Fifteen.src} alt='Fifteen' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/_Wdwy_hAe40"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />Top Secret: Glacius Maxima Twins
        <br />Glacius Maxima will fire off additional beams from time turner clones, and COMPANIONS. It is possible to build a deck that utilises Weasley Twins echo, Time Turner, Hermy companion and Malfoy.
        <br />Although I have never personally seen one, so cannot provide you with a more detailed sample deck, this was a build that was whispered in the early stages of the game. It probably fell out of favor because it just wasn&apos;t good. But you can try experimenting with it if you&apos;re bored or have too much time.
        <br />Heres a video showing that yes, this is a thing. Dunno how well it works or how strong it is, just that it exists.
      </Typography>
    </Box>
  );
}
