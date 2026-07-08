import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import scrollEnchantArmor from '@/shared/assets/images/items/etc-scroll-of-enchant-armor.png';
import blessedEnchantArmor from '@/shared/assets/images/items/etc-blessed-scrl-of-ench-am-a.png';
import scrollEnchantWeapon from '@/shared/assets/images/items/etc-scroll-of-enchant-weapon.png';
import blessedEnchantWeapon from '@/shared/assets/images/items/etc-blessed-scrl-of-ench-wp-a.png';

export const alligatorIslandRewardsData = [
  {
    header: true,
    image: true,
    key: 'rewardsTitle',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'armorScroll',
    src: scrollEnchantArmor,
    alt: 'etc scroll of enchant armor',
  },
  {
    header: false,
    image: true,
    key: 'armorScrollBlessed',
    src: blessedEnchantArmor,
    alt: 'etc blessed scroll of enchant armor',
  },
  {
    header: false,
    image: true,
    key: 'weaponScroll',
    src: scrollEnchantWeapon,
    alt: 'etc scroll of enchant weapon',
  },
  {
    header: false,
    image: true,
    key: 'weaponScrollBlessed',
    src: blessedEnchantWeapon,
    alt: 'etc blessed scroll of enchant weapon',
  },
];
