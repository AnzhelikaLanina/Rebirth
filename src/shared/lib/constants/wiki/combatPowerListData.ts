import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';

const gold = { image: true, src: secretGoldCoin, alt: 'secret gold coin' };

export const combatPowerListData = [
  {
    header: true,
    image: true,
    key: 'intro',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  { header: false, key: 'equipment', ...gold },
  { header: false, key: 'dolls', ...gold },
  { header: false, key: 'dollCollection', ...gold },
  { header: false, key: 'adenLaboratory', ...gold },
  { header: false, key: 'soulCrystals', ...gold },
  { header: false, key: 'blessingItems', ...gold },
  { header: false, key: 'spirits', ...gold },
  { header: false, key: 'hiddenPower', ...gold },
  { header: false, key: 'paints', ...gold },
  { header: false, key: 'characterLevel', ...gold },
  { header: false, key: 'stonesOfLife', ...gold },
  { header: false, key: 'collection', ...gold },
  { header: false, key: 'characterSkills', ...gold },
  { header: false, key: 'clanSkills', ...gold },
  { header: false, key: 'basicStats', ...gold },
];
