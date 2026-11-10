import {
  setRebirthConfig,
  type PromoCodeGroups,
  type RebirthConfig,
} from './getConfig';

const FALLBACK_CONFIG: RebirthConfig = {
  chronicleUpdateName: '',
  discord: '',
  downloadLinks: {
    gameClient: { mediafire: '', yandex: '' },
    gamePatch: { mediafire: '', yandex: '' },
    updater: { mediafire: '', yandex: '' },
  },
  promoCodes: { noWipeServer: [], newRebirth: [] },
};

const toStringList = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];

const normalizePromoCodes = (value: unknown): PromoCodeGroups => {
  if (Array.isArray(value)) {
    return { noWipeServer: [], newRebirth: toStringList(value) };
  }

  const groups = (value ?? {}) as Partial<Record<keyof PromoCodeGroups, unknown>>;

  return {
    noWipeServer: toStringList(groups.noWipeServer),
    newRebirth: toStringList(groups.newRebirth),
  };
};

export const loadConfig = async (): Promise<void> => {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}config.json?t=${Date.now()}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`config.json: HTTP ${res.status}`);
    const data = (await res.json()) as RebirthConfig;
    setRebirthConfig({ ...data, promoCodes: normalizePromoCodes(data.promoCodes) });
  } catch (error) {
    console.error('Не удалось загрузить config.json, используется фолбэк', error);
    setRebirthConfig(FALLBACK_CONFIG);
  }
};
