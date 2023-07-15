import goldenKey from '../../../public/assets/Currencies/Golden Key.png';
import silverKey from '../../../public/assets/Currencies/Silver Key.png';
import rubyKey from '../../../public/assets/Currencies/Ruby Key.png';
import clockturnKey from '../../../public/assets/Currencies/Clockturn Key.png';

import clubCoin from '../../../public/assets/Currencies/Club Coin.png';
import clubCrest from '../../../public/assets/Currencies/Club Crest.png';
import tradeToken from '../../../public/assets/Currencies/Trade Token.png';

import echoCrystal from '../../../public/assets/Currencies/Echo Crystal.png';
import leprechaunGold from '../../../public/assets/Currencies/Leprechaun Gold.png';
import thankYouNotes from '../../../public/assets/Currencies/Thank You Notes.png';

import gems from '../../../public/assets/Currencies/Gems.png';
import gold from '../../../public/assets/Currencies/Gold.png';
import jewels from '../../../public/assets/Currencies/Jewels.png';

import madamVIPCoupon from '../../../public/assets/Currencies/Madam VIP Coupon.png';
import passPoints from '../../../public/assets/Currencies/Pass Points.png';

export const valuable = [
  { name: 'Jewels', src: jewels, description: 'HPMA pay to win currency. This is bought in the jewels shop and can be used to buy most other currencies. These are probably the most valuable' },
  { name: 'Gems', src: gems, description: 'Second most valuable currency. Can also be use to buy most other currencies and cosmetics. These you can earn just by playing the game. I like to ration these and buy bundles here and there.' },
  { name: 'Gold', src: gold, description: 'Gold is probably the third most valuable currency. It is the only currency you can use to level up your spellbook which makes you stronger.' },
];

export const keys = [
  { name: 'Gold Key', src: goldenKey, description: 'These are used in the Magical Studies section in the Shop. You can get any card in the game through this draw. You are guarunteed a legendary (orange) card every 20 pulls. I do not really think these are worth saving.. Maybe if you really want a chance to get the next banners cards if it is added to the banner? Otherwise I would just use them whenever.' },
  { name: 'Silver Key', src: silverKey, description: 'Similar to the gold keys, they are used in the same shop. The only difference is that you can only get up to epic (purple) cards in this. You are guarunteed an epic card every 30 pulls' },
  { name: 'Ruby Key', src: rubyKey, description: 'These are used to roll on the event banners. The Ron one seems like it is permanent for all players and gives you a discounted roll cost at 9 instead of 10 keys so I would utilize this. Your Ruby keys will NOT expire and can be used in the next event. I would save these until you see an event card you really want.' },
  { name: 'Clockturn Key', src: clockturnKey, description: 'These are used to roll on the Mystery Wheel. These keys do NOT expire and can be used for future wheels. F2P recommendation is to save until you are more or less guarunteed to get all the items on the wheel.' },
];

export const forest = [
  { name: 'Echo Crystal', src: echoCrystal, description: 'Used to upgrade your echos. Recommended use is NOT to level up echos but to change out the cards that get bonuses.' },
  { name: 'Leprechaun Gold', src: leprechaunGold, description: 'Currency earned during your forbidden forest run. Used to upgrade cards at the merchant or abilities in the rest area. These expire at the end of run and do NOT carry over to the next run so use it while you are in the forest.' },
  { name: 'Thank You Notes', src: thankYouNotes, description: 'Earned when playing with others in the forbidden forest. Can be used in the Thank You Note Shop. You can farm up to 10 per day. If you miss one day, you can farm up to 5 days worth or 50 thank you notes.' },
];

export const club = [
  { name: 'Club Coin', src: clubCoin, description: 'Used to upgrade club abilites in the club adventure. No point in saving I think. Use them immediately. Earned by participating in the club adventure.' },
  { name: 'Club Crest', src: clubCrest, description: 'Can be used to purchase trade tokens in the card trade shop. Earned by doing club activites.' },
  { name: 'Trade Token', src: tradeToken, description: 'Used to trade cards. Each token type represents the type of card you can trade between common and legendary cards. You need one to initiate the trade then one to accept a trade. 2 is used per transaction.' },
];

export const others = [
  { name: 'Madam VIP Coupon', src: madamVIPCoupon, description: 'Used to get discounts at the clothes shop in Diagon Alley. You can earn these by dancing. The gold one gets you discounts on the event exclusive alternative outfits. To buy these you must already have the original event outfit. The purple ones give you a discount on all other items.' },
  { name: 'Pass Points', src: passPoints, description: 'Earned by participating in dailies. They level up your magic pass. The top is free while the bottom rewards costs money.' },
]