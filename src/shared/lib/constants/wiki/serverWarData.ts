import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import coin from '@/shared/assets/images/items/coin.png';
import drop from '@/shared/assets/images/items/drop.png';
import presentOfDestinationEvent from '@/shared/assets/images/items/present-of-destination-event.png';
import etcCoinsBlue from '@/shared/assets/images/items/etc-coins-blue.png';

export const serverWarScheduleData = [
  { key: 'weekly', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'period', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'noPoints', src: etcMissionPoint, alt: 'etc mission point' },
];

export const serverWarRatingData = [
  { key: 'accumulatePoints', src: coin, alt: 'coin' },
  { key: 'ratingInterface', src: coin, alt: 'coin' },
  { key: 'ratingTypes', src: coin, alt: 'coin' },
  { key: 'serverRating', src: coin, alt: 'coin' },
  { key: 'personalRating', src: coin, alt: 'coin' },
  { key: 'ratingSchedule', src: coin, alt: 'coin' },
];

export const serverWarZoneData = [
  { key: 'darkFortress', src: drop, alt: 'drop' },
  { key: 'stayTime', src: drop, alt: 'drop' },
  { key: 'campBuff', src: drop, alt: 'drop' },
  { key: 'outerGate', src: drop, alt: 'drop' },
];

export const serverWarPointsData = [
  { key: 'pointsIntro', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'sabotageSupply', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'eliminateBoss', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'battlefieldGhost', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'contestForest', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'mafiaHideout', src: etcMissionPoint, alt: 'etc mission point' },
];

export const serverWarRewardIntroData = [
  { key: 'rewardIntro', src: sNonpvpPeace, alt: 's nonpvp peace' },
];

const RANKING_PLACE_KEYS = [
  'place1',
  'place2',
  'place3',
  'place4',
  'place5',
  'place6',
] as const;

const RANKING_REWARD_KEYS = [
  'reward1',
  'reward2',
  'reward3',
  'reward4',
  'reward5',
  'reward6',
] as const;

export const serverWarRankingData = [
  {
    leftKey: RANKING_PLACE_KEYS[0],
    rightKey: RANKING_REWARD_KEYS[0],
    image: true as const,
    src: presentOfDestinationEvent,
    alt: 'present of destination event',
  },
  {
    leftKey: RANKING_PLACE_KEYS[1],
    rightKey: RANKING_REWARD_KEYS[1],
    image: true as const,
    src: presentOfDestinationEvent,
    alt: 'present of destination event',
  },
  {
    leftKey: RANKING_PLACE_KEYS[2],
    rightKey: RANKING_REWARD_KEYS[2],
    image: true as const,
    src: presentOfDestinationEvent,
    alt: 'present of destination event',
  },
  {
    leftKey: RANKING_PLACE_KEYS[3],
    rightKey: RANKING_REWARD_KEYS[3],
    image: true as const,
    src: etcCoinsBlue,
    alt: 'etc coins blue',
  },
  {
    leftKey: RANKING_PLACE_KEYS[4],
    rightKey: RANKING_REWARD_KEYS[4],
    image: true as const,
    src: etcCoinsBlue,
    alt: 'etc coins blue',
  },
  {
    leftKey: RANKING_PLACE_KEYS[5],
    rightKey: RANKING_REWARD_KEYS[5],
    image: true as const,
    src: etcCoinsBlue,
    alt: 'etc coins blue',
  },
];

export const serverWarSeasonData = [
  { key: 'newSeason', src: sNonpvpPeace, alt: 's nonpvp peace' },
];
