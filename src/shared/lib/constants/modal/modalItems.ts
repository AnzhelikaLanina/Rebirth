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
    linkGoogle: '',
    linkGYandex: '',
  },
  {
    icon: winRarLogo,
    key: 'gamePatch',
    linkGoogle: '',
    linkGYandex: '',
  },
  {
    icon: blueLogo,
    key: 'updater',
    linkGoogle: '',
    linkGYandex: '',
  },
];
