import etcKylesBloodDragon from '@/shared/assets/images/items/etc-kyles-blood-dragon.png';

const boss = { src: etcKylesBloodDragon, alt: 'etc kyles blood dragon' };

export const shiftingMirageListData = [
  { key: 'stage1Title' },
  { key: 's1Boss', ...boss },
  { key: 's1Damage', ...boss },
  { key: 's1Fail', ...boss },
  { key: 's1Success', ...boss },

  { key: 'stage2Title' },
  { key: 's2Boss', ...boss },
  { key: 's2Damage', ...boss },
  { key: 's2Fail', ...boss },
  { key: 's2Success', ...boss },

  { key: 'stage3Title' },
  { key: 's3Boss', ...boss },
  { key: 's3Damage', ...boss },
  { key: 's3Fail', ...boss },
  { key: 's3Success', ...boss },

  { key: 'stage4Title' },
  { key: 's4Boss', ...boss },
  { key: 's4Damage', ...boss },
  { key: 's4Fail', ...boss },
  { key: 's4Success', ...boss },
  { key: 's4Persist', ...boss },
];
