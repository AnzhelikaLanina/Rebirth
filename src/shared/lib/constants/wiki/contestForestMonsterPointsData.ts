import drop from '@/shared/assets/images/items/drop.png';

const MONSTER_POINTS_LEFT_KEYS = [
  'fo',
  'fore',
  'fores',
  'foresComplex',
  'foresHigher',
  'forestCrystal',
] as const;

const MONSTER_POINTS_RIGHT_KEYS = [
  'foPoints',
  'forePoints',
  'foresPoints',
  'foresComplexPoints',
  'foresHigherPoints',
  'forestCrystalPoints',
] as const;

export const contestForestMonsterPointsData = [
  { leftKey: MONSTER_POINTS_LEFT_KEYS[0], rightKey: MONSTER_POINTS_RIGHT_KEYS[0], image: true as const, src: drop, alt: 'drop' },
  { leftKey: MONSTER_POINTS_LEFT_KEYS[1], rightKey: MONSTER_POINTS_RIGHT_KEYS[1], image: true as const, src: drop, alt: 'drop' },
  { leftKey: MONSTER_POINTS_LEFT_KEYS[2], rightKey: MONSTER_POINTS_RIGHT_KEYS[2], image: true as const, src: drop, alt: 'drop' },
  { leftKey: MONSTER_POINTS_LEFT_KEYS[3], rightKey: MONSTER_POINTS_RIGHT_KEYS[3], image: true as const, src: drop, alt: 'drop' },
  { leftKey: MONSTER_POINTS_LEFT_KEYS[4], rightKey: MONSTER_POINTS_RIGHT_KEYS[4], image: true as const, src: drop, alt: 'drop' },
  { leftKey: MONSTER_POINTS_LEFT_KEYS[5], rightKey: MONSTER_POINTS_RIGHT_KEYS[5], image: true as const, src: drop, alt: 'drop' },
];
