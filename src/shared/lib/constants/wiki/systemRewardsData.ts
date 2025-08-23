import dollSummon1TicketLv6 from '@/shared/assets/images/items/doll-summon-ticket-lv6.png';
import dollSummon1TicketLv5 from '@/shared/assets/images/items/doll-summon-ticket-lv5.png';
import aq from '../../../assets/images/items/aq.png';
import baiumRing from '../../../assets/images/items/baium-ring.png';
import ringOfCore from '../../../assets/images/items/ring-of-core.png';
import earringOfZaken from '../../../assets/images/items/earring-of-zaken.png';
import earringOfOrfen from '../../../assets/images/items/earring-of-orfen.png';
import necklaceOfFrintessa from '../../../assets/images/items/necklace-of-frintessa.png';
import etcMissionPoint from '../../../assets/images/items/etc-mission-point.png';
import levelRewardImmortalRing from '@/shared/assets/images/items/level-reward-immortal-ring.png';
import fireSwordAden from '@/shared/assets/images/items/fire-sword-aden.png';
import bmLCoin from '@/shared/assets/images/items/bm-lcoin.png';
import etcRoyalSealOfLord from '@/shared/assets/images/items/etc-royal-seal-of-lord.png';
import etcAncientAdena from '@/shared/assets/images/items/etc-ancient-adena.png';

export const systemRewardsData = [
  {
    header: true,
    image: true,
    src: etcMissionPoint,
    alt: 'etc mission point',
    key: 'header',
  },
  {
    header: false,
    image: true,
    src: dollSummon1TicketLv6,
    alt: 'doll summon ticket lv6',
    key: 'legendaryDollCoupons',
  },
  {
    header: false,
    image: true,
    src: dollSummon1TicketLv5,
    alt: 'doll summon ticket lv5',
    key: 'heroicDollCoupons',
  },
  {
    header: false,
    image: true,
    src: levelRewardImmortalRing,
    alt: 'level reward immortal ring',
    key: 'immortalRing',
  },
  {
    header: false,
    image: true,
    src: fireSwordAden,
    alt: 'fire sword aden',
    key: 'immortalWeapon',
  },
  {
    header: false,
    image: true,
    src: aq,
    alt: 'aq',
    key: 'queenAntRing',
  },
  {
    header: false,
    image: true,
    src: baiumRing,
    alt: 'baium ring',
    key: 'baiumRing',
  },
  {
    header: false,
    image: true,
    src: ringOfCore,
    alt: 'ring of core',
    key: 'coreRing',
  },
  {
    header: false,
    image: true,
    src: earringOfZaken,
    alt: 'earring of zaken',
    key: 'earringOfZaken',
  },
  {
    header: false,
    image: true,
    src: earringOfOrfen,
    alt: 'earring of orfen',
    key: 'earringOfOrfen',
  },
  {
    header: false,
    image: true,
    src: necklaceOfFrintessa,
    alt: 'necklace of frintessa',
    key: 'necklaceOfFrintessa',
  },
  {
    header: false,
    image: true,
    src: bmLCoin,
    alt: 'bm L Coin',
    key: 'lCoins',
  },
  {
    header: false,
    image: true,
    src: etcRoyalSealOfLord,
    alt: 'etc royal seal of lord',
    key: 'giranSeals',
  },
  {
    header: false,
    image: true,
    src: etcAncientAdena,
    alt: 'etc ancient adena',
    key: 'ancientAdena',
  },
];
