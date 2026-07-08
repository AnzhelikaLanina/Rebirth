import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';
import dollSummonTicketLv5 from '@/shared/assets/images/items/doll-summon-ticket-lv5.png';
import bmSayhaStorm from '@/shared/assets/images/items/bm-sayha-storm.png';
import earringOfOrfen from '@/shared/assets/images/items/earring-of-orfen.png';
import etcChaserStone from '@/shared/assets/images/items/etc-chaser-stone.png';
import drop from '@/shared/assets/images/items/drop.png';

export const manyArmsRewardsData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'immortalWeaponCoupon',
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
  {
    header: false,
    image: true,
    key: 'heroicDollCoupon',
    src: dollSummonTicketLv5,
    alt: 'doll summon ticket lv5',
  },
  {
    header: false,
    image: true,
    key: 'sayhaStorm',
    src: bmSayhaStorm,
    alt: 'bm sayha storm',
  },
  {
    header: false,
    image: true,
    key: 'orfenEarring',
    src: earringOfOrfen,
    alt: 'earring of orfen',
  },
  {
    header: false,
    image: true,
    key: 'chaserStone',
    src: etcChaserStone,
    alt: 'etc chaser stone',
  },
];