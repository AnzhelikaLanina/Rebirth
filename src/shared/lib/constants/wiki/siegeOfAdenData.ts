import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import drop from '@/shared/assets/images/items/drop.png';

export const siegeOfAdenIntroData = [
  { key: 'siegeStart', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'biweekly', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'siegeButton', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'application', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'clanFunctions', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'phasesIntro', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const siegeOfAdenPhase1Data = [
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
    key: 'external',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
];

export const siegeOfAdenPhase2Data = [
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
    key: 'internal',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'heroWeapon',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'gates',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
];

export const siegeOfAdenPhase3Data = [
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
    key: 'central',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'mammothGolem',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
];

export const siegeOfAdenInfoData = [
  { key: 'rating', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'points', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'statusBoard', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'captureTitle', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const siegeOfAdenRewardsData = [
  { key: 'cloak', src: drop, alt: 'drop' },
  { key: 'transformSkill', src: drop, alt: 'drop' },
  { key: 'questParticipate', src: drop, alt: 'drop' },
  { key: 'questVictory', src: drop, alt: 'drop' },
];
