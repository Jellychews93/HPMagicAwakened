import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Nine from '../../../../public/assets/DeckBuilding/Nine.png';

export default function Neville() {
  const imageSize = '700';
  return (
    <>
      <Typography variant='h3' sx={{}}>
        Neville: St. Mungo Neville&apos;s Hospital for Magical Maladies and Injuries
      </Typography>
      <Typography variant='h5'>
        <br />Neville&apos;s normal attack has a special function where if there are no enemy units nearby, it will instead heal friendly units within attacking range. Additionally, since this &apos;healing&apos; normal attack is still considered a normal attack, it can be boosted by Kevin&apos;s buff. Which is why a vast majority of Neville decks will include Kevin and Time Turner.
        <br />But unlike Snape decks where the K&T (kevin time turner) combination is mandatory, this is not the case for Neville. It is a possible strategy that is helpful for Neville, but he is hardly beholden to it. Time turners are often included without Kevin.
        <br />Nevilles should endeavour to use creatures that lose health to function, or start with missing health to maximise his potential. Unicorn and Dragon Egg were clearly designed for Neville in mind. For this guide, we will include a Dragon Egg Neville deck that can easily be adapted into Unicorn if you don&apos;t have egg. (Though unicorn is far inferior)
        <br />Try and keep nifflers alive as long as you can. Dragon egg is a hefty 7 cost card, and Whomping Willow, Time Turner, Protego Totalum cost 5. You will want all the mana you can get. Ideally Golden Snitch is included, but global no snitch. We get the drift.
        <br /><br />
        ⭐Central Cards:<br />
        Norwegian Ridgeback Egg, Time Turner (with Kevin, if you like)
        <br /><br />
        + Supports:<br />
        <br />Niffler
        <br />Golden Snitch ＊
        <br />Phoenix
        <br />Nebulus
        <br />Side Along Apparition
        <br />Protego Totalum
        <br />Essence of Dittany
        <br />Protego
        <br />Portkey
        <br />Acromantula Nest or Whomping Willow
        <br />Incendio
        <br />Bombtastic Bomb
        <br />Manticore
        <br />Prior Incantanto
        <br />Swelling Solution
        <br />Inflatus/Incarcerous
        <br />Expulso
        <br />Oppugno
        <br />Ventus
        <br /><br />
        ~ Techs:<br />
        <br />Acromantula Venom (very rarely)
        <br />Confringo
        <br />Crucio (for Ron)
        <br />Atmosphere Charm
        <br />Sectum Sempra
        <br />Aquamenti
        <br />Glacius Maxima (!!!)
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Nine.src} alt='Nine' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />All your companions love (Professor) Neville
        <br />Neville synergizes very well with many companions and would dearly wish he could bring more than three.
        <br />We&apos;ve already mentioned Kevin, so we will skip that. Slot 1 if you do bring him.
        <br />Lottie will generate mana by decreasing her own health. As Neville, we can continuously heal her (and nearby nifflers and golden snitches) for a continuous stream of free mana. If you want to bring her, we recommend slot 1 or 2.
        <br />Daniel is necessary for late game, to instantly hatch a dragon egg and help hatch any future eggs during &apos;regen speed up&apos; phase. He will be good at slot 2 or 3.
        <br />Cassandra is a very good bodyguard for Neville and can deal with swarms of creatures for a very long time as long as you support her properly. If you want to bring her, we recommend slot 1 or 2.
        <br />Ivy can be used to vanish annoying Rons trying to crash your mobile hospital. She will be good at slot 2 or 3. (Ivy can also be used to vanish enemy Hagrid&apos;s Bike, so your dragons have easier time attacking wizard)
        <br />For Neville, Ron brings immediate value by sweeping away creatures, but cannot generate additional value like any of the other companions listed above. Use Ron if you really can&apos;t handle creatures despite having Cassandra.
        <br />Same for Hagrid. Good immediate value, but not what we&apos;re looking for. You can use him, but whatever you do, DO NOT kick Daniel to make room for Hagrid. For dragon eggs, Daniel is very powerful for hatching.
      </Typography>
      <Typography variant='h5'>
        <br />Nebulus and Side Along Apparition and Protego Totalum
        <br />Hide inside Nebulus to let Lottie and Dragon Egg work in peace. Nebulus will also block Atmosphere Charm, Thunderstorm, and Confringo. Atmosphere Charm and Thunderstorm have a -60% healing received effect, which heavily hinders the hatching of the dragon egg. Confringo is dangerous since our creatures and companions will be close to each other and are liable to die in that big chain of explosions.
        <br />The corner stone of a good neville is being smart about Side Along Apparition... which we will shorten down to Apparition, and Protego Totalum. If enemy throws acromantula venom onto your egg and companions, relocate to a safer corner. If enemy tries to whizbang, apparate away or shield with protego totalum. And vice versa.
        <br />Another strategy is to avoid putting eggs in the same basket, by putting eggs and companions in different corners. Use time turner clones to heal a different corner. Like you standing near dragon egg, while clone stands near Kevin. Enemy will have to decide whether to whizbang kevin OR the egg, and not both. However this is match up dependent, and will not always work. There is a risk of spreading yourself too thin and losing everything.
        <br />The key is to not be at 0 mana. Always keep some reserve mana at all times. So instead of waiting for 7 mana and putting down an egg then get hit by whizbang, you wait for 10 mana, put down the egg, hold Apparition in hand, teleport away when enemy tries to whizbang.
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.youtube.com/embed/HSmE-qHRgms"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.youtube.com/embed/CvnzdCwShu8"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        (With Unicorn; Unicorn is much weaker than egg, so the fights drag on.)
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.youtube.com/embed/njpM8OY0Vh8"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.youtube.com/embed/7N8X42cMz4A"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />Glacius Maxima....?
        <br />Oh yes. Glacius Maxima will shoot off additional ice beams from your time turner clones and any existing companions. However Neville decks tend to have many hefty cards, and Glacius Maxima really isn&apos;t that good. Snape will never want to use Glacius Maxima since normal attack damage is much more consistent and better overall, but Neville is one of the only echo that could potentially use Glacius Maxima. The other is Glacius Maxima Hermy (with time turner, without kevin), but that is mostly a meme deck.
        <br />How good is Neville in dueling actually?
        <br />He is not very good. Neville suffers immensely from card level power creep. If his card level is not higher than enemy, his chances of victory are greatly reduced. And if enemy happens to be higher level, then your prospects become extremely thin. Whizbang could break Protego Totalum bubble before the final hit. A dragon could hatch, but just dies to high level acromantula venom. Your Whomping Willow or Cassandra cannot withstand high level swarm of creatures and your line of defense falls apart....... The list goes on.
        <br />If you do not have high level cards in general, we do not suggest playing Neville at all.
        <br />Wait, what about Occamy and Thunderbird?
        <br />Thunderbird expends health to grant a shield, which is nice, but they are much too frail. They cannot survive long enough for Neville to heal them. Occamy attack too slowly, tend to miss moving targets, have low health, and the damage isn&apos;t even that great. Occamy bad. Don&apos;t play Occamy.
        <br />Bombtastic Bomb expends health to create bombs, which is a good thing since we are Neville. But it is also rather frail, and its difficult to fit into Neville&apos;s deck, so it is mentioned as a viable support card but rarely included in actual Neville decks.
      </Typography>
      <Typography variant='h5'>
        <br />Bonuses?
        <br />Egg, naturally. Then Kevin and Time Turner if you used those. Whomping Willo/Acromantula Nest, depending on which you use. Then anything from the support list.
        <br />Neville and Swelling Solution?
        <br />This is a &apos;maybe&apos;. It CAN synergize well with Neville, but he usually doesn&apos;t have enough space in the deck to include it. Include or exclude per your preferences.
        <br />Question of the Day: How do I counter Neville?
        <br />Atmosphere charm plus either Incendio or Acromantula Venom is the answer that most echoes will use. Hermy thunderstorm can include either atmosphere charm or just destroy egg with Incendio. Hermy Whizbang can just Whizbang (if enemy doesn&apos;t have Apparate/Totalum). However, the next Echo that I am about to introduce is not only strong in their own right, but will also heavily counter Neville.
      </Typography>
    </>
  )
}