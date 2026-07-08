import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import frozenWeaponTicket from '@/shared/assets/images/items/frozen-weapon-ticket.png';
import bmSoulOfShilen from '@/shared/assets/images/items/bm-soul-of-shilen.png';
import etcRoyalSealOfLord from '@/shared/assets/images/items/etc-royal-seal-of-lord.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';

export const catacombQuestRewardsData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: sNonpvpBattle,
    alt: 's nonpvp battle',
  },
  {
    header: false,
    image: true,
    key: 'frozenWeaponTicket',
    src: frozenWeaponTicket,
    alt: 'frozen weapon ticket',
  },
  {
    header: false,
    image: true,
    key: 'magicFire',
    src: bmSoulOfShilen,
    alt: 'bm soul of shilen',
  },
  {
    header: false,
    image: true,
    key: 'giranSeals',
    src: etcRoyalSealOfLord,
    alt: 'etc royal seal of lord',
  },
  {
    header: false,
    image: true,
    key: 'questPoints',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
];
