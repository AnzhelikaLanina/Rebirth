import exp from '../../../assets/images/items/exp.png';
import sp from '../../../assets/images/items/sp.png';
import adena from '../../../assets/images/items/adena.png';
import drop from '../../../assets/images/items/drop.png';
import coin from '../../../assets/images/items/coin.png';
import sNonpvpPeace from '../../../assets/images/items/s-nonpvp-peace.png';
import bmStarterPackage from '../../../assets/images/items/bm-starter-package.png';

export const mainInfoWikiIntroData = [
  { key: 'goal', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'premiumForAll', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'serverStart', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'limitedDonations', src: sNonpvpPeace, alt: 's nonpvp peace' },
  {
    key: 'starterPackage',
    src: bmStarterPackage,
    alt: 'bm starter package',
  },
];

export const mainInfoWikiRatesData = [
  { key: 'header', header: true, image: false },
  { key: 'exp', header: false, image: true, src: exp, alt: 'exp' },
  { key: 'sp', header: false, image: true, src: sp, alt: 'sp' },
  { key: 'adena', header: false, image: true, src: adena, alt: 'adena' },
  { key: 'dropCount', header: false, image: true, src: coin, alt: 'drop count' },
  {
    key: 'dropChance',
    header: false,
    image: true,
    src: drop,
    alt: 'drop chance',
  },
];
