import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';

export const ancientBossesIntroData = [
  { key: 'intro1', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'intro2', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'intro3', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const ancientBossesAntharasLairData = [
  { key: 'antharasLairHeader' },
  { key: 'antharasLair1', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'antharasLair2', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const ancientBossesIceMonarchData = [
  { key: 'iceMonarchHeader' },
  { key: 'iceMonarchIntro', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const ancientBossesIceMonarchBossesData = [
  { header: false, image: false, key: 'boss1' },
  { header: false, image: false, key: 'boss2' },
  { header: false, image: false, key: 'boss3' },
  { header: false, image: false, key: 'boss4' },
];

export const ancientBossesVolcanoData = [
  { key: 'volcanoHeader' },
  { key: 'volcanoIntro', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const ancientBossesVolcanoBossesData = [
  { header: false, image: false, key: 'boss1' },
  { header: false, image: false, key: 'boss2' },
];

export const ancientBossesQuestData = [
  { key: 'questTask1', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'questTask2', src: etcMissionPoint, alt: 'etc mission point' },
];

export const ancientBossesRewardData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'couponCount',
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
  {
    header: false,
    image: true,
    key: 'exchangeInfo',
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
];
