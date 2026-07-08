import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import drop from '@/shared/assets/images/items/drop.png';
import coin from '@/shared/assets/images/items/coin.png';
import noblessCloak from '@/shared/assets/images/items/nobless-cloak.png';
import bmPendantOfGrankain from '@/shared/assets/images/items/bm-pendant-of-grankain.png';
import agathionValakas from '@/shared/assets/images/items/agathion-valakas.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';
import frozenWeaponTicket from '@/shared/assets/images/items/frozen-weapon-ticket.png';
import royalSeal from '@/shared/assets/images/items/etc-royal-seal-of-lord.png';

export const celestiaBattleStage4Data = [
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
    key: 'start',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'condition',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'leadersReward',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'celestialCloakLeader',
    src: noblessCloak,
    alt: 'nobless cloak',
  },
];

export const celestiaBattleKnightsRewardData = [
  {
    key: 'knightsReward',
    src: drop,
    alt: 'drop',
  },
];

export const celestiaBattleKnightsRewardsListData = [
  {
    header: true,
    image: true,
    key: 'knightsRewardListTitle',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'grankainPendant',
    src: bmPendantOfGrankain,
    alt: 'bm pendant of grankain',
  },
  {
    header: false,
    image: true,
    key: 'celestialCloak',
    src: noblessCloak,
    alt: 'nobless cloak',
  },
  {
    header: false,
    image: true,
    key: 'valakasAgathion',
    src: agathionValakas,
    alt: 'agathion valakas',
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
    key: 'iceMonarchWeaponCoupon',
    src: frozenWeaponTicket,
    alt: 'frozen weapon ticket',
  },
];

export const celestiaBattleChanceInfoData = [
  {
    key: 'chanceCalcIntro',
    src: drop,
    alt: 'drop',
  },
  {
    key: 'baseChancesTitle',
    src: drop,
    alt: 'drop',
  },
];

export const celestiaBattleBaseChancesData = [
  { header: false, image: true, key: 'place1', src: coin, alt: 'coin' },
  { header: false, image: true, key: 'place2', src: coin, alt: 'coin' },
  { header: false, image: true, key: 'place3', src: coin, alt: 'coin' },
  { header: false, image: true, key: 'place4', src: coin, alt: 'coin' },
  { header: false, image: true, key: 'place5', src: coin, alt: 'coin' },
];

export const celestiaBattleNumberKnightsData = [
  {
    key: 'numberKnights',
    src: drop,
    alt: 'drop',
  },
];

export const celestiaBattleGuaranteedRewardData = [
  {
    header: true,
    image: true,
    key: 'unluckyKnightsTitle',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'giranSeals1000',
    src: royalSeal,
    alt: 'etc royal seal of lord',
  },
];
