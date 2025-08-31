import styles from './WikiOlympiadContent.module.css';
import {
  mapWithLocalization,
  olympiadData,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiOlympiadContent = ({ id }: WikiComponentProps) => {
  const { olympiad } = useLocalizedData();
  const localizedItems = mapWithLocalization(olympiadData, olympiad, 'text');
  return (
    <WikiLayout title={olympiad.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
