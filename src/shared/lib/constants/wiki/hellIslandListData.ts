import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';

const mission = { src: etcMissionPoint, alt: 'etc mission point' };
const gold = { src: secretGoldCoin, alt: 'secret gold coin' };
const battle = { src: sNonpvpBattle, alt: 's nonpvp battle' };

export const hellIslandListData = [
  { key: 'npc', ...gold },
  { key: 'afterMove', ...gold },

  { key: 'citadelTitle', ...mission },
  { key: 'citadelEntrance', ...gold },
  { key: 'gatekeeper', ...gold },
  { key: 'gatekeeperRespawn', ...gold },
  { key: 'floors10', ...gold },
  { key: 'captureDevice', ...gold },
  { key: 'coordinates', ...gold },
  { key: 'captureEffect', ...gold },

  { key: 'darionSpawn', ...gold },
  { key: 'darionAccess', ...gold },
  { key: 'darionGate', ...gold },
  { key: 'darionEffectAll', ...gold },

  { key: 'belethTimer', ...gold },
  { key: 'belethNoEntry', ...gold },
  { key: 'belethKey', ...gold },
  { key: 'belethChest', ...gold },

  { key: 'tasksTitle', ...mission },

  { key: 'darionBattle', ...battle },

  { key: 'belethBattle', ...battle },
];
