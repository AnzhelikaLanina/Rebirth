import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import drop from '@/shared/assets/images/items/drop.png';
import dollSummonTicketLv5 from '@/shared/assets/images/items/doll-summon-ticket-lv5.png';
import dollSummonTicketLv6 from '@/shared/assets/images/items/doll-summon-ticket-lv6.png';

export const transcendentZoneIntroData = [
  { key: 'intro', src: etcMissionPoint, alt: 'etc mission point' },
];

const stageTableData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  { header: false, image: true, key: 'duration', src: drop, alt: 'drop' },
  { header: false, image: true, key: 'miniBoss', src: drop, alt: 'drop' },
];

export const transcendentZoneStage1Data = stageTableData;
export const transcendentZoneStage2Data = stageTableData;
export const transcendentZoneStage3Data = stageTableData;

export const transcendentZoneDifficultyData = [
  { key: 'difficultyIncrease', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'maxDifficulty', src: etcMissionPoint, alt: 'etc mission point' },
];

export const transcendentZoneQuestData = [
  { key: 'questAvailable', src: etcMissionPoint, alt: 'etc mission point' },
];

export const transcendentZoneRewardsData = [
  { header: true, image: true, key: 'title', src: drop, alt: 'drop' },
  {
    header: false,
    image: true,
    key: 'heroicDoll',
    src: dollSummonTicketLv5,
    alt: 'doll summon ticket lv5',
  },
  {
    header: false,
    image: true,
    key: 'legendaryDoll',
    src: dollSummonTicketLv6,
    alt: 'doll summon ticket lv6',
  },
];

export const transcendentZoneOutroData = [
  { key: 'expIncreased', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'dailyEntry', src: drop, alt: 'drop' },
];
