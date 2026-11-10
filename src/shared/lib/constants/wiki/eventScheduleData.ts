// Расписание ивентов. Время и порядок общие для всех языков, подписи берутся из
// локализации (eventSchedule.events / eventSchedule.days). wikiKey указывает на
// раздел wiki (wikiNavData), на который ведёт клик по названию ивента.

export type EventScheduleToken = {
  labelKey: string;
  wikiKey?: string;
};

export type EventScheduleEntry = {
  time: string;
  tokens: EventScheduleToken[];
};

export type EventScheduleDay = {
  dayKey: string;
  entries: EventScheduleEntry[];
};

const link = (labelKey: string, wikiKey: string): EventScheduleToken => ({
  labelKey,
  wikiKey,
});
const text = (labelKey: string): EventScheduleToken => ({ labelKey });

// общий костяк будних дней (Пн–Пт до вечерних боссов)
const weekdayBase: EventScheduleEntry[] = [
  { time: '13:00', tokens: [link('ironSupplyBase', 'ironSupplyBaseHeader')] },
  { time: '13:30', tokens: [link('contestForest', 'contestForestHeader')] },
  { time: '14:00', tokens: [link('mafia', 'mafiaHideoutHeader')] },
  { time: '17:00 - 18:00', tokens: [link('catacomb', 'catacombHeader')] },
  { time: '19:30', tokens: [link('bossExtermination', 'bossExterminationHeader')] },
  { time: '20:00', tokens: [link('orcFortress', 'orcFortressHeader')] },
  { time: '20:00', tokens: [link('ironSupplyBase', 'ironSupplyBaseHeader')] },
  { time: '20:30', tokens: [link('contestForest', 'contestForestHeader')] },
  { time: '21:00', tokens: [link('mafia', 'mafiaHideoutHeader')] },
  { time: '21:30 - 22:00', tokens: [link('olympiad', 'olympiadHeader')] },
  { time: '22:00', tokens: [link('ancientBosses', 'ancientBossesHeader')] },
  { time: '22:00 - 23:00', tokens: [link('catacomb', 'catacombHeader')] },
];

const weekdayWithBoss = (
  bossLabelKey: string,
  bossWikiKey: string,
): EventScheduleEntry[] => [
  ...weekdayBase,
  { time: '22:30', tokens: [link(bossLabelKey, bossWikiKey)] },
  { time: '22:30', tokens: [link('chaoticBosses', 'chaoticBossesHeader')] },
];

export const eventScheduleData: EventScheduleDay[] = [
  {
    dayKey: 'monday',
    entries: weekdayWithBoss('queenAnt', 'queenAntHeader'),
  },
  {
    dayKey: 'tuesday',
    entries: weekdayWithBoss('orfen', 'orfenHeader'),
  },
  {
    dayKey: 'wednesday',
    entries: weekdayWithBoss('zaken', 'zakenHeader'),
  },
  {
    dayKey: 'thursday',
    entries: weekdayWithBoss('core', 'coreBossHeader'),
  },
  {
    dayKey: 'friday',
    entries: [
      ...weekdayBase.slice(0, 10),
      { time: '22:00', tokens: [link('bosses', 'bossesHeader')] },
      { time: '22:00 - 23:00', tokens: [link('catacomb', 'catacombHeader')] },
    ],
  },
  {
    dayKey: 'saturday',
    entries: [
      { time: '10:00 - 00:00', tokens: [link('hellIsland', 'hellIslandHeader')] },
      { time: '17:00 - 18:00', tokens: [link('catacomb', 'catacombHeader')] },
      { time: '20:00', tokens: [link('orcFortress', 'orcFortressHeader')] },
      {
        time: '22:00',
        tokens: [text('bossesWord'), link('hellIsland', 'hellIslandHeader')],
      },
      { time: '22:00 - 23:00', tokens: [link('catacomb', 'catacombHeader')] },
    ],
  },
  {
    dayKey: 'sunday',
    entries: [
      { time: '17:00 - 18:00', tokens: [link('catacomb', 'catacombHeader')] },
      { time: '19:00', tokens: [link('fafurion', 'fafurionHeader')] },
      {
        time: '20:00',
        tokens: [
          link('siegeOfGiran', 'siegeOfGiranHeader'),
          text('orWord'),
          link('siegeOfAden', 'siegeOfAdenHeader'),
        ],
      },
      { time: '20:00', tokens: [link('orcFortress', 'orcFortressHeader')] },
      { time: '21:00', tokens: [link('valakas', 'valakasHeader')] },
      { time: '22:00', tokens: [link('antharas', 'antharasHeader')] },
      { time: '22:00 - 23:00', tokens: [link('catacomb', 'catacombHeader')] },
    ],
  },
];
