import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import immortalWeaponTicket from '@/shared/assets/images/items/immortal-weapon-ticket.png';
import immortalWeaponPiece from '@/shared/assets/images/items/immortal-weapon-piece.png';
import etcFireCrystal from '@/shared/assets/images/items/etc-fire-crystal.png';
import etcRoyalSealOfLord from '@/shared/assets/images/items/etc-royal-seal-of-lord.png';
import etcBloodpledgePoint from '@/shared/assets/images/items/etc-bloodpledge-point.png';
import cursedGrail from '@/shared/assets/images/items/cursed-grail.png';
import prophetsOfTobald from '@/shared/assets/images/items/prophets-of-tobald.png';

export const octavisData = [
  { key: 'entryLevel', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'minPlayers', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'entryNpc', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'battleTime', src: etcMissionPoint, alt: 'etc mission point' },
];

export const octavisStageOneData = [
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
    key: 'chariot',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'notTargetable',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'beastHpBelow50',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'beastHpAbove50',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'stageChange',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];

export const octavisStageTwoData = [
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
    key: 'physicalStage',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'gladiatorSword',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  {
    header: false,
    image: true,
    key: 'gladiatorMonsters',
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
];

export const octavisStageThreeData = [
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
    key: 'magicStage',
    src: secretGoldCoin,
    alt: 'secret gold coin',
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
    key: 'arenaHeroes',
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

export const octavisQuestData = [
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
    key: 'bloodCrystal',
    src: etcFireCrystal,
    alt: 'etc fire crystal',
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

export const octavisVictoryRewardData = [
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
