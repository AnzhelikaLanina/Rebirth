import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import etcUnholyCrystal from '@/shared/assets/images/items/etc-unholy-crystal-1.png';
import etcBrokenCrystalSilver from '@/shared/assets/images/items/etc-broken-crystal-silver.png';

export const heavenlyArmorIntroData = [
  { key: 'newArmorType', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'modifyScroll', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'specialCreation', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'celestialShard', src: etcUnholyCrystal, alt: 'etc unholy crystal' },
  {
    key: 'shardFragment',
    src: etcBrokenCrystalSilver,
    alt: 'etc broken crystal silver',
  },
  { key: 'shardExchange', src: etcUnholyCrystal, alt: 'etc unholy crystal' },
];

export const heavenlyArmorSkillsData = [
  { key: 'noArmorTypes', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'passiveSkills', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'heavyLightMerge', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'armorRequirements', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'casterSkills', src: sNonpvpPeace, alt: 's nonpvp peace' },
  { key: 'shamanSkills', src: sNonpvpPeace, alt: 's nonpvp peace' },
];

export const heavenlyArmorItemsData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: sNonpvpBattle,
    alt: 's nonpvp battle',
  },
  {
    header: false,
    image: true,
    key: 'helmet',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'gauntlets',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'boots',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'top',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'bottom',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'helmetSealed',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'gauntletsSealed',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'bootsSealed',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'topSealed',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'bottomSealed',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];
