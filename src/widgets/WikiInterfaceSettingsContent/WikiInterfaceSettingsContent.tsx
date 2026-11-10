import {
  interfaceSettingsSkillPanelData,
  interfaceSettingsWindowsData,
  interfaceSettingsEffectsData,
  interfaceSettingsGameData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import styles from './WikiInterfaceSettingsContent.module.css';

export const WikiInterfaceSettingsContent = ({ id }: WikiComponentProps) => {
  const { interfaceSettings, wiki } = useLocalizedData();

  const localizedSkillPanel = mapWithLocalization(
    interfaceSettingsSkillPanelData,
    interfaceSettings,
    'text',
  );
  const localizedWindows = mapWithLocalization(
    interfaceSettingsWindowsData,
    interfaceSettings,
    'text',
  );
  const localizedEffects = mapWithLocalization(
    interfaceSettingsEffectsData,
    interfaceSettings,
    'text',
  );
  const localizedGame = mapWithLocalization(
    interfaceSettingsGameData,
    interfaceSettings,
    'text',
  );

  return (
    <WikiLayout
      title={wiki.interfaceSettingsHeader}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedSkillPanel)}
      {renderItemCards(localizedWindows)}
      {renderItemCards(localizedEffects)}
      {renderItemCards(localizedGame)}
    </WikiLayout>
  );
};
