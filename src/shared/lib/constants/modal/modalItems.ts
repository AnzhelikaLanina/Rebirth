import blueLogo from '../../../assets/images/icons/blue-logo-icon.webp';
import winRarLogo from '../../../assets/images/icons/raw.webp';
import lineageLogo from '../../../assets/images/icons/lineage-icon.webp';

type ModalItemKey = 'gameClient' | 'gamePatch' | 'updater';

export type ModalItemType = {
  icon: string;
  key: ModalItemKey;
  linkGoogle: string;
  linkGYandex: string;
};

export const modalItems: ModalItemType[] = [
  {
    icon: lineageLogo,
    key: 'gameClient',
    linkGoogle: 'https://anzhelikalanina.github.io/Rebirth/',
    linkGYandex: 'https://anzhelikalanina.github.io/Rebirth/',
  },
  {
    icon: winRarLogo,
    key: 'gamePatch',
    linkGoogle: 'https://anzhelikalanina.github.io/Rebirth/',
    linkGYandex: 'https://anzhelikalanina.github.io/Rebirth/',
  },
  {
    icon: blueLogo,
    key: 'updater',
    linkGoogle: 'https://anzhelikalanina.github.io/Rebirth/',
    linkGYandex: 'https://anzhelikalanina.github.io/Rebirth/',
  },
];
