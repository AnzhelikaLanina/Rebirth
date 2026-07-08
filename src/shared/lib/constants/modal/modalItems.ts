import blueLogo from '../../../assets/images/icons/blue-logo-icon.webp';
import winRarLogo from '../../../assets/images/icons/raw.webp';
import lineageLogo from '../../../assets/images/icons/lineage-icon.webp';
import { getRebirthConfig } from '@/shared/config/getConfig';

type ModalItemKey = 'gameClient' | 'gamePatch' | 'updater';

export type ModalItemType = {
  icon: string;
  key: ModalItemKey;
  linkGYandex?: string;
  linkMediafire?: string;
};

export const getModalItems = (): ModalItemType[] => {
  const links = getRebirthConfig()?.downloadLinks;

  return [
    {
      icon: lineageLogo,
      key: 'gameClient',
      linkMediafire: links?.gameClient?.mediafire,
      linkGYandex: links?.gameClient?.yandex,
    },
    {
      icon: winRarLogo,
      key: 'gamePatch',
      linkMediafire: links?.gamePatch?.mediafire,
      linkGYandex: links?.gamePatch?.yandex,
    },
    {
      icon: blueLogo,
      key: 'updater',
      linkMediafire: links?.updater?.mediafire,
      linkGYandex: links?.updater?.yandex,
    },
  ];
};
