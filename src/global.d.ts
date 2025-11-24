export {};

declare global {
  interface Window {
    __REBIRTH_CONFIG__?: {
      downloadLinks?: {
        gameClient?: {
          google?: string;
          yandex?: string;
        };
        gamePatch?: {
          mediafire?: string;
          yandex?: string;
        };
        updater?: {
          google?: string;
          yandex?: string;
        };
      };
    };
  }
}
