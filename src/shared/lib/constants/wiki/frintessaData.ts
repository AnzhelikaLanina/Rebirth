import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';
import necklaceOfFrintessa from '@/shared/assets/images/items/necklace-of-frintessa.png';
import etcRoyalSealOfLord from '@/shared/assets/images/items/etc-royal-seal-of-lord.png';
import etcBloodpledgePoint from '@/shared/assets/images/items/etc-bloodpledge-point.png';

export const frintessaData = [
  { key: 'entryLevel', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'entryNpc', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'minPlayers', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'battleTime', src: etcMissionPoint, alt: 'etc mission point' },
];

export const frintessaStageOneData = [
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
    key: 'description',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];

export const frintessaStageTwoData = [
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
    key: 'description',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];

export const frintessaStageThreeData = [
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
    key: 'strongestForm',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'portals',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'rewardCondition',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];

export const frintessaQuestData = [
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
    key: 'frintessaNecklace',
    src: necklaceOfFrintessa,
    alt: 'necklace of frintessa',
  },
  {
    header: false,
    image: true,
    key: 'giranSeal',
    src: etcRoyalSealOfLord,
    alt: 'etc royal seal of lord',
  },
  {
    header: false,
    image: true,
    key: 'clanPoints',
    src: etcBloodpledgePoint,
    alt: 'etc bloodpledge point',
  },
];
