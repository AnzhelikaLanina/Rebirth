import {
  pvpPveSystemData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import styles from './WikiPvpPveSystemContent.module.css';

export const WikiPvpPveSystemContent = ({ id }: WikiComponentProps) => {
  const { pvpPveSystem } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    pvpPveSystemData,
    pvpPveSystem,
    'text',
  );

  return (
    <WikiLayout title={pvpPveSystem.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
