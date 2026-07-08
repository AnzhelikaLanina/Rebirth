export type RebirthConfig = {
  chronicleUpdateName: string;
  discord: string;
  downloadLinks: {
    gameClient: {
      mediafire: string;
      yandex: string;
    };
    gamePatch: {
      mediafire: string;
      yandex: string;
    };
    updater: {
      mediafire: string;
      yandex: string;
    };
  };
  promoCodes: string[];
};

let config: RebirthConfig | undefined;

export const setRebirthConfig = (value: RebirthConfig): void => {
  config = value;
};

export const getRebirthConfig = (): RebirthConfig | undefined => config;
