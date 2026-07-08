import { getRebirthConfig } from '@/shared/config/getConfig';

const DEFAULT_NAME = 'SAMURAI';

export const CHRONICLE_UPDATE_PLACEHOLDER = '{{CHRONICLE_UPDATE}}';

export const getChronicleUpdateName = (): string => {
  const raw = getRebirthConfig()?.chronicleUpdateName?.trim();
  return raw || DEFAULT_NAME;
};

export const withChronicleUpdate = (text: string): string =>
  text.replaceAll(CHRONICLE_UPDATE_PLACEHOLDER, getChronicleUpdateName());
