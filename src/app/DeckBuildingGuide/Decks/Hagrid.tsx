import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Twelve from '../../../../public/assets/DeckBuilding/Twelve.png';
import Thirteen from '../../../../public/assets/DeckBuilding/Thirteen.png';
import Fourteen from '../../../../public/assets/DeckBuilding/Fourteen.png';
import Sixteen from '../../../../public/assets/DeckBuilding/Sixteen.png';

export default function Hagrid() {
  const imageSize = '700';
  return (
    <Box>
      <Typography variant='h3'>
        Hagrid: The Not-so-gentle giant Dreadnought
      </Typography>
      <Typography variant='h5'>
        <br />Hagrid&apos;s echo effect involves boosting the most expensive creature in your deck, giving them extra attack speed and a healing factor that triggers when the creatures reaches 50% health, this healing can occur twice. In the case of having multiple creatures with identical costs, only one random creature (that you can&apos;t determine until actually playing them) will benefit from this echo effect.
        <br />This effect is best paired with expensive and bulky creatures, because being bulky means they are less likely to immediately die before/while healed, and the healing in general will heal for more HP.
        <br />The common mistakes of newbie Hagrids are the following:
        <br />putting in multiple creatures of the same cost (Fiendfyre+Dragon egg ; Piertotum Locomotor+Opal Eye＊)
        <br />putting creatures that are not suitable for Hagrid in general (Opal Eye＊)
        <br />putting in way too many creatures when you realistically only needed less than four types.
        <br />Hagrid is one of the representative echoes for the Mixed deck archetype but generally leaning towards SPELLS. Like in Fiendfyre, you bring fiendfyre, spiders, maybe pixie or matagot, then the rest should just be spells. Full creature fiendfyres will get their ass kicked, so don&apos;t build full creature fiendfyre, okay?
        <br />Why are you against Opal Eye in Hagrid?
        <br />Opal eye is rather frail for a 6 mana creature, and often cannot survive long enough for Hagrid&apos;s healing factor to kick in. To put into context, much cheaper cards like Incendio and Sectum Sempra are almost capable of one-shotting Opal Eyes. Follow it up with something like Oppugno or Stupefy and it will be dead before it can regenerate health to survive any other spells. You can get much better value out of Piertotum Locomotor and Fiendfyre.
        <br />And Egg?
        <br />Easy counter with Atmosphere Charm. You can&apos;t even save egg with Portkey because you might end up sending egg to enemy side of field to its death.
        <br /><br />
        <br />We will be writing about Fiendfyre Hagrid, because Hagrid is literally the only echo that will ever use fiendfyre. No other echo should include fiendfyre in their deck. Just don&apos;t.
        <br />Fiendfyre will get stronger when something dies while its alive, which means we want cheap and plentiful creatures like Spiders, Pixies, Matagot, and Manticore.
        <br />Spiders is actually a super awful card, and no one in their right mind should be using them. However, the mere fact that it summons 6 units at once cements their place within the Hagrid Fiendfyre archetype, there simply is no other substitute for this quick 6 unit.
        <br />Manticore can summon 4 units and after the dance is finished, apply a movement speed buff to anything nearby. This is helpful for Fiendfyre because it moves really slowly, and no reason to not have 4 units feed it.
        <br />You can adapt this deck into Piertotum Locomotor or Dragon Egg by switching out Fiendfyre and Spiders. What card to replace spiders? ANYTHING. Spiders are that bad.
        <br /><br />
        ⭐Central Cards:<br />
        <br />Fiendfyre

        <br /><br />
        + Supports:<br />
        <br />Spiders (mandatory, unfortunately)
        <br />Manticore
        <br />Portkey (highly recommend)
        <br />Niffler (because mana)
        <br />Golden Snitch＊ (not available. same old)
        <br />Pixies
        <br />Matagot
        <br />Acromantula Nest/Firecrab
        <br />Bombtastic Bomb
        <br />Episkey
        <br />Inflatus (for Ron, and to stop enemy from running)
        <br />Incendio/Sectum Sempra
        <br />Essence of Dittany (more useful in Piertotum Locomotor, less efficient for Fiendfyre)
        <br />Protego (same as Dittany, more useful in statue)
        <br />Swelling Solution
        <br />Expulso
        <br />Oppugno
        <br />Crucio (for Ron, and enemy fiendfyre)
        <br />Monster Book (bad, but its for breaking nebulus)
        <br />Side Along Apparition (if Dragon egg)
        <br />Nebulus (if egg)
        <br /><br />
        ~ Techs:<br />
        <br />Acromantula Venom
        <br />Atmosphere Charm
        <br />Confringo
        <br />Aquamenti
        <br />Orb of Water (bad, but combines damage and control)
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Sixteen.src} alt='Tweleve' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/93AJOrpbsTA"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />Companions, we bring Lottie because Mana. Heal her with Episkey when possible. Or choose Grawp or Frey twins otherwise.
        <br />Ivy to counter Ron.
        <br />Hagrid Bike is always useful.
      </Typography>
      <Typography variant='h5'>
        <br /> For this sample deck, we didn&apos;t include Pixies or Matagot, instead bringing Inflatus and Incendio for direct damage. Spiders+Manticore is 10 units. You might wish to switch for creatures if you find Fiendfyre isnt getting fed quickly enough to your liking. We don&apos;t really need Fiendfyre to be fully fed. Being fully fed allows it to attack three targets, which is better against creatures but not that helpful against spells. If you&apos;re up against creatures, enemy units can feed you anyhow.
        <br /> Portkey is crucial for the survival of Fiendfyre. Acromantula Venom is a card that heavily counters Fiendfyre, and we are using Portkey to randomly relocate it to somewhere else. Of course, theres a chance that you are super unlucky and the Fiendfyre is teleported back into the venom puddle again, but there really isnt any other choice. Side Along Apparition only works while its within your side of the field after all. This also helps with Atmosphere Charm, but to prevent Atmosphere Charm to slowly home back onto the Fiendfyre once its done teleporting, YOU the wizard, need to stand under the Atmosphere Charm (if you can; not gonna work if its on enemy side of field) to prevent it from sticking back onto Fiendfyre. This is trading a bit of your health for the survival of your central strategy.
        <br /> To play fiendfyre, ALWAYS WAIT FOR 10 MANA. Then you play both fiendfyre and spiders together, in that order. You should bring fiendfyre out first, wait a little bit to see if enemy wants to acromantula venom or incendio or Ron or whatever, if the coast is clear then you play spiders, if the coast is not clear you play portkey.
        <br /> To ensure your Fiendfyre can continuously put pressure on enemy, use Episky to heal it. If you are going up against Whizbang Hermy, you can choose to Episkey early (before 50% that triggers healing factor) because Whizbang has enough damage to kill at 50%, so you should heal it to stay above executing range, or Portkey to escape whizbang or Ron.
      </Typography>
      <Typography variant='h5'>
        <br /> F00k these Whales with max level Fiendfyre Hagrid. How do I counter them?
        <br /> Atmosphere Charm and Acromantula Venom are highly recommended. You can also try Crucio, though this card is much harder to include for certain echoes, and Fiendfyre CAN survive a Crucio if they have immense level advantage or are backed up by Episkey, or relocated by Portkey.
        <br /> Buying yourself time to slap it with normal attack with Nebulus, Expulso, Stupefy is very important, then once it reaches about 50% range for the healing, you use atmosphere charm. Or wait until 60%~55% and use a very powerful card to execute it, like Incendio or whizbang.
        <br /> Neville, when played well, can stop Fiendfyre in its tracks, unable to pressure Neville while he hatches more and more dragon eggs to counterattack. Try Neville if you have trouble against Hagrid.
        <br /> How to deal with Fiendfyre if I&apos;m playing creature deck?
        <br /> Since you could hardly include Acromantula Venom, you will have to settle for Acromantula Nest. The little spider leave behind puddles of Venom. You just let the little spider die, then once Fiendfyre walks into the puddle, walk forward and let it attack you, or throw out a creature to distract it (this ensures it stops moving out of the puddle), with your normal attack it should die really soon.
        <br /> Bombtastic Bomb is also a viable answer. A sufficient swarm of creatures with multiple bombs will be able to kill the Fiendfyre in record time. Unfortunately this is a pyrrhic victory and does not work if enemy has much higher level than you. Which is why Crucio is a viable tech card listed in the newt section of the guide.
      </Typography>
      <Typography variant='h5'>
        <br /> Hagrid Echo Bonus?
        <br /> Fiendfyre, and whatever central card you picked.
        <br /> Spiders does not need bonus. Portkey does not need bonus.
        <br /> Episkey and the other spells like Incendio/Sectum Sempra could benefit from bonus.
      </Typography>
      <Typography variant='h5'>
        <br /> Swelling Solution!!!!!!
        <br /> Okay, finally, the ONE situation Swelling Solution is helpful.
        <br /> Yes, you can use it for Hagrid if you like. It&apos;s helpful but not mandatory.
      </Typography>
      <Typography variant='h5'>
        <br /> How good is Hagrid Actually?
        <br /> Ironically, Hagrid isn&apos;t actually that good in dueling. His popularity and winrate is on the bottom half of the echo tier list in CN/TW servers. It&apos;s mostly due to card level power creep that enables Hagrid to bully other players. In a perfect world where card levels are all equal, Hagrid will always lose against skilled players.
        <br /> Neville especially counters Hagrid. Neville&apos;s superb defensive capabilites mean that any big bulky creature Hagrid brings out will be worn down, or unable to break through the Protego Totalum+Apparition core to actually prevent Neville from accumulating more advantages.
        <br /> (WARNER BROS MAKE IT HAPPEN!
        <br />  OR WE F2P PLAYERS WILL RIOT!!!!! 🧑‍🤝‍🧑  🔥 🧑‍🤝‍🧑 )
        <br /> My Rant on Card Level Differences in Dueling
        <br /> Online PVP games across all genres all use a synced level system. Pokemon locks everyone at lv50, even if fine tuning by IV/EV and move sets is a thing.
        <br /> Player account levels (summoner levels) dont impact gameplay in league of legends and other DOTA.
        <br /> Medieval fighting games like For Honor and what not arent going to give you extra HP or stronger damage because you got higher levels.
        <br /> Online gambling games like mahjong everyone starts at 25000 points and I doubt online poker will give extra chips to players due to levels.
        <br /> Online racing games that are not gacha cash grabs wont give you better or faster cars due to levels.
        <br /> Strategy games like cid meiers civilization or crusader king isnt going to give you better starting tiles because youre a player who pumped one thousand hours into the game
        <br /> But no. HPMA uses players levels, and then each card have card levels.
        <br /> Its like playing yugioh where neither player starts at 8000LP, and each card have power boosts depending on what &apos;level&apos; it is, instead of having the ATK/DEF for what is written on the card, and having extra effects due to levels and not because its written on the card. Or magic the gathering. Or pokemon TCG. Or gwent.
        <br /> Of course im going to take every chance to dunk on this sh_tty excuse of a matchmaking system
        <br /> Remember how in the disclaimer I mentioned that I quit for a year? Yeah. This is why. Forcing low level players to constantly match against players with higher levels SHOULD NOT BE ALLOWED. But its been like this in 2021, so it remains the case in 2023.
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Twelve.src} alt='Twelve' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={Thirteen.src} alt='Thirteen' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={Fourteen.src} alt='Fourteen' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />DO IT WARNER BROS. MAKE EVERYONE EQUAL!!!!!! YOU COWARD!!!!!
        <br />(I&apos;ve also been told by a guildmate that initially the game DID have a synced dueling mode in the test server where everyone was same level. but then no one played that mode so it was removed in test server and didnt make it into the actual game. But I cannot verify this claim, so take it with a grain of salt.
        <br />well that just speaks of how problematic the balancing issue of the game is.)
      </Typography>
      <Typography variant='h5'>
        <br /> Echo Bonuses for Dobby
        <br />Avada, for obvious reasons
        <br />Golden Snitch, when its available (eventually)
        <br />Bludger, if thats what youre playing
        <br /> For easier time with creatures, Sectum Sempra/Incendio and Expulso
        <br />For Turtling, Nebulus and Episkey
        <br />And anything inside the support card list
      </Typography>
    </Box>
  );
}
