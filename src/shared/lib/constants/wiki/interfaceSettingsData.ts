import etcMissionPoint from '@/shared/assets/images/items/etc-mission-point.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';

const missionPoint = { src: etcMissionPoint, alt: 'etc mission point' };
const goldCoin = { src: secretGoldCoin, alt: 'secret gold coin' };

export const interfaceSettingsSkillPanelData = [
  { key: 'skillPanelTitle', ...missionPoint },
  { key: 'skillPanelSkills', ...goldCoin },
  { key: 'skillPanelItems', ...goldCoin },
  { key: 'skillPanelPriority', ...goldCoin },
  { key: 'skillPanelProfiles', ...goldCoin },
  { key: 'skillPanelQuickAccess', ...goldCoin },
  { key: 'skillPanelAutoPotions', ...goldCoin },
  { key: 'skillPanelGuardianNote' },
  { key: 'skillPanelAutoSaveNote' },
  { key: 'skillPanelDeviceNote' },
];

export const interfaceSettingsWindowsData = [
  { key: 'windowsTitle', ...missionPoint },
  { key: 'windowsVitals', ...goldCoin },
  { key: 'windowsBuffs', ...goldCoin },
  { key: 'windowsDebuffs', ...goldCoin },
  { key: 'windowsOther', ...goldCoin },
  { key: 'windowsSetupNote' },
  { key: 'windowsDeviceNote' },
];

export const interfaceSettingsEffectsData = [
  { key: 'effectsTitle', ...missionPoint },
  { key: 'effectsIntro', ...missionPoint },
  { key: 'effectsHideSkillAnimations', ...goldCoin },
  { key: 'effectsHideVisualEffects', ...goldCoin },
  { key: 'effectsHideTransformations', ...goldCoin },
  { key: 'effectsSimplifiedTree', ...goldCoin },
  { key: 'effectsBuffIcons', ...goldCoin },
  { key: 'effectsItemsAboveChat', ...goldCoin },
  { key: 'effectsCharacterNote' },
];

export const interfaceSettingsGameData = [
  { key: 'gameTitle', ...missionPoint },
  { key: 'gameIntro', ...missionPoint },
  { key: 'gameDamageText', ...goldCoin },
  { key: 'gameSystemChat', ...goldCoin },
  { key: 'gameVideoSettings', ...goldCoin },
  { key: 'gameKeyRemap', ...goldCoin },
  { key: 'gameAudioSettings', ...goldCoin },
  { key: 'gameOtherSettings', ...goldCoin },
  { key: 'gameDeviceNote' },
];
