import { getRebirthConfig } from '@/shared/config/getConfig';

export const EXTERNAL_LINKS = {
  get DISCORD(): string | undefined {
    return getRebirthConfig()?.discord;
  },
  REGISTRATION: '',
  PERSONAL_ACCOUNT: '',
};
