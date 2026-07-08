import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import drop from '@/shared/assets/images/items/drop.png';

export const olympiadParticipationRewardsData = [
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
    key: 'lCoinsPerFight',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'battleMarksForDefeat',
    src: drop,
    alt: 'drop',
  },
  {
    header: false,
    image: true,
    key: 'battleMarksForWin',
    src: drop,
    alt: 'drop',
  },
];
