import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';

const mission = { src: etcMissionPoint, alt: 'etc mission point' };
const battle = { src: sNonpvpBattle, alt: 's nonpvp battle' };

export const orfenInfoData = [
  { key: 'respawn', ...mission },
  { key: 'mapLocation', ...mission },
  { key: 'teleport', ...battle },
  { key: 'rewardsAll', ...battle },
  { key: 'taskFortyHands', ...mission },
];
