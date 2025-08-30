import styles from './WikiGameAssistantContent.module.css';
import {
  gameAssistantData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiGameAssistantContent = ({ id }: WikiComponentProps) => {
  const { gameAssistant } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    gameAssistantData,
    gameAssistant, 'text'
  );
  return (
    <WikiLayout
      id={id}
      title={gameAssistant.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
