import drop from '@/shared/assets/images/items/drop.png';
import dollSummonTicketFixedLv1 from '@/shared/assets/images/items/doll-summon-ticket-fixed-lv1.png';
import bmElmoadenGoldBox from '@/shared/assets/images/items/bm-elmoaden-gold-box.png';

export const mafiaHideoutRewardsTitleData = [
  { key: 'title', src: drop, alt: 'drop' },
];

export const mafiaHideoutRewardsData = [
  {
    header: true,
    image: true,
    key: 'hpReward',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'regularDollCoupon',
    src: dollSummonTicketFixedLv1,
    alt: 'doll summon ticket fixed lv1',
  },
];

export const mafiaHideoutQuestRewardData = [
  {
    header: true,
    image: true,
    key: 'questRewardTitle',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'specialSupplies',
    src: bmElmoadenGoldBox,
    alt: 'bm elmoaden gold box',
  },
];
