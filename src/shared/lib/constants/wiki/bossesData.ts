import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import bmWeekPackage from '@/shared/assets/images/items/bm-week-package.png';
import prophetsPaper00 from '@/shared/assets/images/items/prophets-paper-of-tobald-00.png';
import prophetsPaper01 from '@/shared/assets/images/items/prophets-paper-of-tobald-01.png';
import prophetsPaper02 from '@/shared/assets/images/items/prophets-paper-of-tobald-02.png';
import prophetsPaper03 from '@/shared/assets/images/items/prophets-paper-of-tobald-03.png';
import prophetsPaper04 from '@/shared/assets/images/items/prophets-paper-of-tobald-04.png';

export const bossesKelbimData = [
  { key: 'kelbimHeader', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'kelbimBoss', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimCommanders', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimTeleport', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimEnrage', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimEnrageTeleport', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimStartTeleport', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimSpecialMonsters', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'kelbimSuppliesIntro', src: bmWeekPackage, alt: 'bm week package' },
];

export const bossesPaganData = [
  { key: 'paganHeader', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'paganBoss', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'paganChapel', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'paganOutsideChapel', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'paganSuppliesIntro', src: bmWeekPackage, alt: 'bm week package' },
];

export const bossesSkyTowerData = [
  { key: 'skyTowerHeader', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'skyTowerBoss', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'skyTowerBattle', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'skyTowerMonsters', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const bossesSuppliesData = [
  {
    header: false,
    image: true,
    key: 'paper1',
    src: prophetsPaper00,
    alt: 'prediction page 1',
  },
  {
    header: false,
    image: true,
    key: 'paper2',
    src: prophetsPaper01,
    alt: 'prediction page 2',
  },
  {
    header: false,
    image: true,
    key: 'paper3',
    src: prophetsPaper02,
    alt: 'prediction page 3',
  },
  {
    header: false,
    image: true,
    key: 'paper4',
    src: prophetsPaper03,
    alt: 'prediction page 4',
  },
  {
    header: false,
    image: true,
    key: 'paper5',
    src: prophetsPaper04,
    alt: 'prediction page 5',
  },
];
