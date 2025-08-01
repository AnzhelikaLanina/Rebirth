import {
  BalanceActiveIcon,
  BalanceIcon,
  ClansActiveIcon,
  ClansIcon,
  CraftActiveIcon,
  CraftIcon,
  FeaturesActiveIcon,
  FeaturesIcon,
  InterfaceActiveIcon,
  InterfaceIcon,
  MainInfoActiveIcon,
  MainInfoIcon,
  OlympActiveIcon,
  OlympIcon,
  RaidActiveIcon,
  RaidIcon,
  SealsActiveIcon,
  SealsIcon,
} from '../../../assets/images';

export const wikiNavData = [
  { key: 'mainInfoHeader', icon: MainInfoIcon, activeIcon: MainInfoActiveIcon },
  {
    key: 'gameAssistantHeader',
    icon: FeaturesIcon,
    activeIcon: FeaturesActiveIcon,
  },
  { key: 'costumesHeader', icon: ClansIcon, activeIcon: ClansActiveIcon },
  { key: 'worldTradeHeader', icon: RaidIcon, activeIcon: RaidActiveIcon },
  {
    key: 'rewardsForTasksHeader',
    icon: OlympIcon,
    activeIcon: OlympActiveIcon,
  },
  {
    key: 'autoHuntingHeader',
    icon: BalanceIcon,
    activeIcon: BalanceActiveIcon,
  },
  { key: 'offlineHuntingHeader', icon: SealsIcon, activeIcon: SealsActiveIcon },
  { key: 'craftingSystemHeader', icon: CraftIcon, activeIcon: CraftActiveIcon },
  {
    key: 'interfaceHeader',
    icon: InterfaceIcon,
    activeIcon: InterfaceActiveIcon,
  },
];
