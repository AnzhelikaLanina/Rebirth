import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';

const rewardRowData = (
  titleKey: string,
  couponCountKey: string,
  exchangeInfoKey: string,
) => [
  {
    header: true,
    image: true,
    key: titleKey,
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: couponCountKey,
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
  {
    header: false,
    image: true,
    key: exchangeInfoKey,
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
];

export const immortalWeaponSealedAncientBossesRewardsData = rewardRowData(
  'title',
  'couponCount',
  'exchangeInfo',
);

export const immortalWeaponSealedSorokaRewardsData = rewardRowData(
  'title',
  'couponCount',
  'exchangeInfo',
);

export const immortalWeaponSealedCursedEmperorRewardsData = rewardRowData(
  'title',
  'couponCount',
  'exchangeInfo',
);

export const immortalWeaponSealedWeekendGameRewardsData = rewardRowData(
  'title',
  'couponCount',
  'exchangeInfo',
);
