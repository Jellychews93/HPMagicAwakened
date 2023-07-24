import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Ten from '../../../../public/assets/DeckBuilding/Ten.png';

export default function Bellatrix() {
  const imageSize = '700';
  return (
    <>
      <Typography variant='h3' sx={{}}>
        Bellatrix: Killing by a Thousand Cuts
      </Typography>
      <Typography variant='h5'>
        Bella&apos;s echo effect involves dealing as many multiple-hit attacks as possible to quickly charge her Death Eater Gauge. Each time you inflict damage, it increases by 1. If you inflict damage against Player Wizards (including Time Turner Clones, but not wizard companions), it increases by 4. Once the bar is filled, she will summon one death eater, the next time it is filled, summon two, until finally she can summon up to three death eaters each time the bar is full. Death eaters will fire off powerful Crucios for you, that you don&apos;t need to channel the spell or spend mana for. Due to the fact that she gets quicker charges from time turner clones, she heavily counters Snape and Neville who rely on them, and will easily win against those two echoes unless you misplay (or somehow meeting those two but DONT use time turner, but nobody in their right mind do this).<br />
        The crucio damage of the death eaters WILL ESCALATE up to four times. Each time the damage increases by 35% (same effect as the actual spell), so its only going to hurt more and more as the game goes on and she summons more death eaters more often.<br />
        Bella is the mistress of the mixed deck archetype, as she can lean into both pure spells, pure creatures, and anything in between. As long as it can hit more than once, its a possible choice to include in her deck.<br />
        There are many ways to build her. Thunderstorm Bella is a thing, Bludger Bella is a thing, Creature Swarm Bella (mostly copying the Ashwinder Newt deck) is a thing. Listing the number of ways to build a Bella deck will face a similar problem with Snape&apos;s "theoretically too many choices" of support cards, but it&apos;s not exactly the cards that determine her success, rather how you handle the not-very-well-hinted/explained mechanics of her Death Eaters that determine your success in Bellatrix.<br />
        (Ironically, Avada is the least likely card you would ever take as a Bella player :VolCry: )<br /><br /><br />
        <br />To put a bit of spice and variety into this guide, I have decided to introduce the Bludger Bellatrix with a side of Creatures.
        <br /><br />⭐Central Cards:<br />
        <br />Bludger (no buff is fine)
        <br />Manticore (no need for echo buff)
        <br />Bombtastic Bomb (buff if possible)
        <br />Matagot (buff if possible)
        <br /><br />
        + Supports:<br />
        <br />Oppugno + Broom 🧿 (IMPORTANT! will explain later)
        <br />Atmosphere Charm
        <br />Acromantula Venom (+Incarcerous or Inflatus)
        <br />Incendio
        <br />Confringo
        <br />Thunderstorm + Portkey
        <br />Ashwinder
        <br />Pixie
        <br />Sectum Sempra
        <br />Acromantula Nest
        <br />Howler
        <br />Crucio
        <br />Aquamenti
        <br />Orb of Water
        <br />Ventus (👎 bad card. bad damage, laughable effect of gently pushing away enemies. why push enemies when you can just kill? anyway, its multi hit, whatever)
        <br />Monster Book (👎 frail, bad damage, it could attack multiple times very quickly, but use it to break nebulus, only use when necessary)
        <br />Stack of Monster Book of Monsters (👎 Bad card, but Bella is literally the only person that could use it)
        <br /><br />
        ~ Techs:<br />
        <br />Tech? What Tech? Bellatrix herself IS the tech. Besides, your Bella deck probably includes most of the cards usually listed here anyway.
        <br /> <br /> Companions: Your first choice should always be the Frey twins. They hurt a lot, are difficult to kill simultaneously (unlike Malfoy who&apos;s whole gang usually die to a single Incendio or Venom together), and will greatly speed up your death eater gauge if enemy don&apos;t deal with them quickly. You may also choose Grawp if you like.
        <br />Second slot is either Ron or Ivy. If you use more creatures, pick Ivy.
        <br />Third is Hagrid. Hagrid is too good.
      </Typography>
      <Grid container sx={{ my: '5vh' }}>
        <Grid item xs={12} md={4}>
          <Image src={Ten.src} alt='Ten' width={imageSize} height={imageSize} style={{ display: 'block', marginInline: 'auto' }} />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />Kiki&apos;s Deadly Delivery
        <br />Under normal circumstances, when Bellatrix summons death eaters, they will usually touch down on her side of the field, generally behind or beside your wizard. However it is possible to deposit death eaters into enemy side of the field through the use of Broom (and in the future, a certain card called Obscurus). Oppugno+Broom at around 90~95% death eater gauge will ensure it will be summoned on the other side. However, the timing of this combo is very strict, it is much easier to do with Obscurus. Master the Death Eater air delivery, and you will Master Bella.
        <br />Gold Echo takes less &apos;charges&apos; to reach full bar (124 charges for gold echo), so use Gold Echo Bella if you can find one.
        <br />Successful Air Deliveries are also very important when going up against Neville. Instead of letting them walk slowly and be intercepted by the likes of Cassandra, Willow, or Firecrab, deliver them right onto the doorsteps of Neville, and let him experience first-hand how you turned his parents into vegetables.
        <br />Death Eaters meander slowly towards your enemies, so depositting them on enemy side of the field is crucial if you want to increase your win rate as a Bella player. Bombtastic Bomb will boost speed (and yes, it benefits the death eaters too!), and Manticore dance can boost speed when its done. Adding Matagot that is already fast on its own rounds up the core of the deadly delivery strategy.
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
            src="https://www.youtube.com/embed/LE0m8MNvVek"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant='h5'>
        <br />Each cast of the Bludger spell will be able to hit the enemy 4 times on average, plus or minus any creature it passes through. But it will burn through your movement cards very quickly, which is why it is usually paired up with Golden snitch...... but no snitch global, yada yada yada, we instead use Manticore that enables us to move without spending movement cards to make sure we catch as many bludgers as possible.
        <br />The theoretical maximum damage of Bludger is really high, so do not underestimate its damage output. Just from that video alone, I used bludger four times and dealt a total of 1789 damage, while matagot that came in second only dealt 935.
        <br />However Bludger will &apos;lose target&apos; if enemy hides in Nebulus. I attempted to deal with that by using Venom to deny enemy Nebulus, but I misplayed on that part. (I don&apos;t like monster book Okay!? I didn&apos;t want to use it to break nebulus)
        <br />
        <br />Swelling Solution?
        <br />I am not a fan of swelling solution in general. I say no. But if you&apos;ve given it a try and like using it in your creature centric Bella deck, go ahead.
      </Typography>
      <Typography variant='h5'>
        <br />So what&apos;s with your hatred of Monster Book and Stack of Monster Book of Monsters?
        <br />Monster Book is a grounded unit that cannot touch pixies, a unit that is highly popular in creature decks. Monster book can be kited with ease. Monster Book is frail. Monster Book damage is pitiful (although it can hit really quickly). Monster Book costs 3 mana and can be neutralised by Expulso (with a few more slaps of normal attack) or one cast of Oppugno, which are 2 mana cards. People can hide in Nebulus again (after kiting said book away from the nebulus).
        <br />As mentioned in the Newt section, Stack costs 7 mana, but can die to 4 mana Incendio, Venom, Sectum Sempra. Harry could kill them with buffed Expulso or Stupefy or Snowballs, 2 or 3 or 3 mana. Hermy&apos;s Thunderstorm (6 mana, technically 3 due to discount) can zap them silly, whizbang (7 mana, technically 4) would be a waste but kills them too. Confringo is 5 mana and can kill them. Pixies are 3 mana. Firecrab are 5 mana. Ashwinder is 3 mana (plus a few more mana to spawn smaller snakes). People can walk a bit further away and hide inside 2 mana Nebulus. They can be neutralised with 3 mana Incarcerous or Inflatus. Even 6 mana Opal Eye can deal with them since its Airborne.
        <br />The list goes on and on and on and on and on.
        <br />NO MONSTER BOOKS!
        <br />I don&apos;t care if Bella is literally the only person that could potentially benefit from monster book and stack of monster book! NO MONSTER BOOKS! NO! MONSTER! BOOKS!!!!!!
        <br />Sure, a newbie Harry with level 1 expulso, stupefy, snowball isnt going to kill automatic lv6 Stack of Monster Book, but that isn&apos;t a reasonable comparison, that doesn&apos;t count.
        <br />NO MONSTER BOOKS!
        <br />And Merlin help anyone dumb enough to use Stack of Books PLUS SWELLING SOLUTION! One Incendio and that&apos;s 9 mana wasted entirely for NOTHING!!!!
        <br />NO MONSTER BOOKS!
      </Typography>
      <Typography variant='h5'>
        <br /> More on Bella and Death Eaters
        <br /> Bella&apos;s Death Eater gauge has a &apos;cool down&apos; after you fill and summon death eaters. It will go green, and rapidly go down. During this &apos;green&apos; period, your bar WILL NOT CHARGE no matter how many attacks you land. Try to avoid over-expending resources at that point in time, like throwing out 10 mana&apos;s worth of spells or creatures for example.
        <br /> The level of your summoned death eaters will be your total average deck level (level of all cards in the bella echo deck, averaged). Do your best to include all your highest level cards that are still relevant to Bella&apos;s needs. Please avoid shenanigans like lv15 Episkey just to boost average. You&apos;re not gonna use it. Your Death Eater has attack range identical to regular wizard and regular companions. This means its just a tiny bit longer than Cassandra&apos;s slapping range. They could eventually poke her down if left alone.
        <br /> Your death eaters are quite frail, but its okay if they die so long as they managed to &apos;initiate&apos; a crucio on enemy wizard. Even if they don&apos;t zap crucio until the very end, it still allows crucio damage to escalate by 35% for any future zapping.
        <br /> Death Eater AI is kind of dumb. They will automatically try to Crucio anything they first walk in range to. It is possible to misdirect death eater Crucio by placing a more convenient target within their range. For example, see approaching Death Eaters? Throw out a niffler and walk backwards out of range, with only niffler within range it zaps the niffler and spares you. (You monster) A very good scapegoat for this scenario is Matagot. Instead of dying, it splits in two. Throwing a cat at death eaters will keep them distracted.
        <br /> Death Eater CAN Crucio again given enough time (imagine a cool down similar to Hermione Companion, taking a bit longer). But since death eaters are really frail, this doesn&apos;t usually happen. If you are against a Bella, its better to kill them than to delay them, with say, Stupefy or Ventus.
      </Typography>
      <Typography variant='h5'>
        <br />Echo Bonus is same old. Bonus for your central cards first, then your support cards. Due to the number of possible Bella deck variations, there is no good rule of thumb here except that anything with Multi-hit is nice, any creature that is quick or hits many times is good. Things that hit once, creatures that are slow, or have no offensive value (avada, troll, healing spells/phoenix) are all bonuses you should avoid.
        <br />Heyyyyy I saw Orb of Water mentioned for the first time in this guide.....
        <br />The problem of orb of water is that its 6 mana, yet can be easily interrupted or neutralized by cheap spells like Broom, Expulso, Portkey(random), Stupefy, Incarcerous, Inflatus, Expelliarmus, Side Along Apparition, Tebo Assault (if Newt), Accio, Howler. All of which are much much cheaper than Orb of Water. Additionally, Orb of Water burns through movement cards like craaaaaazy, there is a high chance you run out of movement cards and become a sitting duck at the middle of the duel.
        <br />One possible build is the Manticore Orb of Water. With Manticore enabling you to move without spending movement, increased movement speed for better dodging, it makes it slightly safer to use Orb of Water with Bella.
        <br />Since Orb of Water hits many times, it accumulates your charges decently quickly. It can also stop enemies from running away, which means easier access for Death Eaters to zap with crucio. It is a build that works, but not one I recommend.
        <br />Crucio (spell) with Bella?
        <br />5 mana is on the costly side, and it is also easily interrupted by all the aforementioned cards that stops Orb of Water. Not to mention the power of just running away out of range. Perhaps Manticore will help here. It is rather redundant though; you couldve included some other utility card that might be more helpful than the pure raw damage of Crucio. Unless you picked it specifically for Ron or Fiendfyre. Then sure, whatever I guess.
      </Typography>
    </>
  )
}