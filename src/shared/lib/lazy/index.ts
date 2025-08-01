import { lazy } from 'react';

export const WikiMainInfoContentLazy = lazy(() =>
  import('../../../widgets/WikiMainInfoContent').then((module) => ({
    default: module.WikiMainInfoContent,
  })),
);
export const WikiGameAssistantContentLazy = lazy(() =>
  import('../../../widgets/WikiGameAssistantContent').then((module) => ({
    default: module.WikiGameAssistantContent,
  })),
);
export const WikiCostumesContentLazy = lazy(() =>
  import('../../../widgets/WikiCostumesContent').then((module) => ({
    default: module.WikiCostumesContent,
  })),
);
export const WikiWorldTradeContentLazy = lazy(() =>
  import('../../../widgets/WikiWorldTradeContent').then((module) => ({
    default: module.WikiWorldTradeContent,
  })),
);
export const WikiRewardsForTasksContentLazy = lazy(() =>
  import('../../../widgets/WikiRewardsForTasksContent').then((module) => ({
    default: module.WikiRewardsForTasksContent,
  })),
);
export const WikiAutoHuntingContentLazy = lazy(() =>
  import('../../../widgets/WikiAutoHuntingContent').then((module) => ({
    default: module.WikiAutoHuntingContent,
  })),
);
export const WikiOfflineHuntingContentLazy = lazy(() =>
  import('../../../widgets/WikiOfflineHuntingContent').then((module) => ({
    default: module.WikiOfflineHuntingContent,
  })),
);
