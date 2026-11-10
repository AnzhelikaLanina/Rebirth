import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';
import immortalWeaponPiece from '@/shared/assets/images/items/immortal-weapon-piece.png';
import dollSummonTicketLv6 from '@/shared/assets/images/items/doll-summon-ticket-lv6.png';
import lScrlOfEnchWp from '@/shared/assets/images/items/l-scrl-of-ench-wp.png';
import etcFireCrystal from '@/shared/assets/images/items/etc-fire-crystal.png';
import etcBloodpledgePoint from '@/shared/assets/images/items/etc-bloodpledge-point.png';
import cursedGrail from '@/shared/assets/images/items/cursed-grail.png';
import prophetsOfTobald from '@/shared/assets/images/items/prophets-of-tobald.png';

export const cainVanHolterData = [
  { key: 'entryLevel', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'minPlayers', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'entryNpc', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'battleTime', src: etcMissionPoint, alt: 'etc mission point' },
];

export const cainVanHolterMechanicsData = [
  { key: 'specialMonsters', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'targetSwitch', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'enhancedSpawn', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'zoneTime', src: sNonpvpBattle, alt: 's nonpvp battle' },
];

export const cainVanHolterQuestData = [
  {
    header: true,
    image: true,
    key: 'questTitle',
    src: sNonpvpPeace,
    alt: 's nonpvp peace',
  },
  {
    header: false,
    image: true,
    key: 'questTask',
    src: sNonpvpBattle,
    alt: 's nonpvp battle',
  },
  {
    header: true,
    image: true,
    key: 'rewardTitle',
    src: sNonpvpPeace,
    alt: 's nonpvp peace',
  },
  {
    header: false,
    image: true,
    key: 'immortalWeaponCoupon',
    src: immortalWeaponTicket,
    alt: 'immortal weapon ticket',
  },
  {
    header: false,
    image: true,
    key: 'legendaryDollCoupon',
    src: dollSummonTicketLv6,
    alt: 'doll summon ticket lv6',
  },
  {
    header: false,
    image: true,
    key: 'modificationScroll',
    src: lScrlOfEnchWp,
    alt: 'l scrl of ench wp',
  },
  {
    header: false,
    image: true,
    key: 'clanPoints',
    src: etcBloodpledgePoint,
    alt: 'etc bloodpledge point',
  },
];

export const cainVanHolterVictoryRewardData = [
  {
    header: true,
    image: true,
    key: 'title',
    src: sNonpvpPeace,
    alt: 's nonpvp peace',
  },
  {
    header: false,
    image: true,
    key: 'weaponFragment',
    src: immortalWeaponPiece,
    alt: 'immortal weapon piece',
  },
  {
    header: false,
    image: true,
    key: 'cursedGrail',
    src: cursedGrail,
    alt: 'cursed grail',
  },
  {
    header: false,
    image: true,
    key: 'tobaldPrediction',
    src: prophetsOfTobald,
    alt: 'prophets of tobald',
  },
  {
    header: false,
    image: true,
    key: 'bloodCrystal',
    src: etcFireCrystal,
    alt: 'etc fire crystal',
  },
];
