import { setRebirthConfig, type RebirthConfig } from './getConfig';

const FALLBACK_CONFIG: RebirthConfig = {
  chronicleUpdateName: '',
  discord: '',
  downloadLinks: {
    gameClient: { mediafire: '', yandex: '' },
    gamePatch: { mediafire: '', yandex: '' },
    updater: { mediafire: '', yandex: '' },
  },
  promoCodes: [],
};

export const loadConfig = async (): Promise<void> => {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}config.json?t=${Date.now()}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`config.json: HTTP ${res.status}`);
    const data = (await res.json()) as RebirthConfig;
    setRebirthConfig(data);
  } catch (error) {
    console.error('Не удалось загрузить config.json, используется фолбэк', error);
    setRebirthConfig(FALLBACK_CONFIG);
  }
};
