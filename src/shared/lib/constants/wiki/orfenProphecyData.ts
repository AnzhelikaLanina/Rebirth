import etcKylesBloodDragon from '@/shared/assets/images/items/etc-kyles-blood-dragon.png';

const buff = {
  header: false,
  image: true,
  src: etcKylesBloodDragon,
  alt: 'etc kyles blood dragon',
};

export const orfenProphecyData = [
  { key: 'pveDamage', ...buff },
  { key: 'physAtk', ...buff },
  { key: 'magAtk', ...buff },
  { key: 'atkSpeed', ...buff },
  { key: 'magSpeed', ...buff },
  { key: 'cphpmp', ...buff },
  { key: 'expSp', ...buff },
];
