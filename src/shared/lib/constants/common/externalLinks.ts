import { getRebirthConfig } from '@/shared/config/getConfig';

export const EXTERNAL_LINKS = {
  get DISCORD(): string | undefined {
    return getRebirthConfig()?.discord;
  },
  REGISTRATION: 'https://account.l2rebirth.net/account/register',
  PERSONAL_ACCOUNT: 'https://account.l2rebirth.net/account/login',
};
