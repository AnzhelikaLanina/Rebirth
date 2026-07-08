import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import adenEssence from '@/shared/assets/images/items/aden-essence.png';
import crystalOfOverlord from '@/shared/assets/images/items/crystal-of-overlord.png';
import monsterEnergy from '@/shared/assets/images/items/monster-energy.png';
import cursedGrail from '@/shared/assets/images/items/cursed-grail.png';

export const immortalWeaponCursedGrailIntroData = [
  {
    key: 'description',
    src: cursedGrail,
    alt: 'cursed grail',
  },
  {
    key: 'questLine1',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    key: 'questLine2',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
];

export const immortalWeaponCursedGrailTableData = [
  {
    header: false,
    image: true,
    key: 'adenEssence',
    src: adenEssence,
    alt: 'aden essence',
  },
  {
    header: false,
    image: true,
    key: 'crystalOfOverlord',
    src: crystalOfOverlord,
    alt: 'crystal of overlord',
  },
  {
    header: false,
    image: true,
    key: 'monsterEnergy',
    src: monsterEnergy,
    alt: 'monster energy',
  },
];
