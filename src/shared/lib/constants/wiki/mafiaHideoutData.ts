import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import etcWhitedayChoco from '@/shared/assets/images/items/etc-whiteday-choco.png';

export const mafiaHideoutData = [
  { key: 'applicationTime1', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'applicationTime2', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'entryOncePerDay', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'massEntry', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'reEntry1', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'reEntry2', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'entryClosed1', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'entryClosed2', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'reconnect', src: sNonpvpBattle, alt: 's nonpvp battle' },
  { key: 'entryMethod', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'zoneStart', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'gatesOpen', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'deputyAppears', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'deputyDefeated', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'bossAppears', src: etcMissionPoint, alt: 'etc mission point' },
  { key: 'moneyLaundering', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'wantedEffect', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'diceRanks', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'coinsDropOnDeath', src: secretGoldCoin, alt: 'secret gold coin' },
];

export const mafiaHideoutFinalBlowData = [
  {
    header: true,
    image: true,
    key: 'finalBlowReward',
    src: etcMissionPoint,
    alt: 'etc mission point',
  },
  {
    header: false,
    image: true,
    key: 'mysteriousBox',
    src: etcWhitedayChoco,
    alt: 'etc whiteday choco',
  },
];

export const mafiaHideoutAgentData = [
  { key: 'agentDelta', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'exchangeCoins', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'exchangeItems', src: secretGoldCoin, alt: 'secret gold coin' },
  { key: 'questAvailable', src: etcMissionPoint, alt: 'etc mission point' },
];
