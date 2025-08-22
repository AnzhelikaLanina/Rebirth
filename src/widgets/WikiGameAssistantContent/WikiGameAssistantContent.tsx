import styles from './WikiGameAssistantContent.module.css';
import { gameAssistantData, mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';


export const WikiGameAssistantContent = () => {
  const { gameAssistant } = useLocalizedData();
  const localizedItems = mapWithLocalization(gameAssistantData, gameAssistant, 'text');
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{gameAssistant.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
};
