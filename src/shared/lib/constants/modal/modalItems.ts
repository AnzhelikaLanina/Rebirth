import blueLogo from '../../../assets/images/icons/blue-logo-icon.webp';
import winRarLogo from '../../../assets/images/icons/raw.webp';
import lineageLogo from '../../../assets/images/icons/lineage-icon.webp';
import { getRebirthConfig } from '@/shared/config/getConfig';

type ModalItemKey = 'gameClient' | 'gamePatch' | 'updater';

export type ModalItemType = {
  icon: string;
  key: ModalItemKey;
  linkGoogle?: string;
  linkGYandex?: string;
  linkMediafire?: string;
};

const config = getRebirthConfig();
const links = config?.downloadLinks;

export const modalItems: ModalItemType[] = [
  {
    icon: lineageLogo,
    key: 'gameClient',
    linkGoogle: links?.gameClient?.google,
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
    linkGoogle: links?.updater?.google,
    linkGYandex: links?.updater?.yandex,
  },
];
