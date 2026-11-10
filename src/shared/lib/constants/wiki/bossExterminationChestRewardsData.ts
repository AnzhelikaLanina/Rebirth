import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import dollSummonTicketFixedLv3 from '@/shared/assets/images/items/doll-summon-ticket-fixed-lv3.png';
import dollSummonTicketFixedLv4 from '@/shared/assets/images/items/doll-summon-ticket-fixed-lv4.png';
import dollSummonTicketLv5 from '@/shared/assets/images/items/doll-summon-ticket-lv5.png';
import dollSummonTicketLv6 from '@/shared/assets/images/items/doll-summon-ticket-lv6.png';

export const bossExterminationChestRewardsData = [
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
    key: 'exceptionalDollCoupon',
    src: dollSummonTicketFixedLv3,
    alt: 'doll summon ticket fixed lv3',
  },
  {
    header: false,
    image: true,
    key: 'rareDollCoupon',
    src: dollSummonTicketFixedLv4,
    alt: 'doll summon ticket fixed lv4',
  },
  {
    header: false,
    image: true,
    key: 'heroicDollCoupon',
    src: dollSummonTicketLv5,
    alt: 'doll summon ticket lv5',
  },
  {
    header: false,
    image: true,
    key: 'legendaryDollCoupon',
    src: dollSummonTicketLv6,
    alt: 'doll summon ticket lv6',
  },
];
