import styles from './WikiLCoinDropSystemContent.module.css';
import {
  lCoinDropSystemData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiLCoinDropSystemContent = ({ id }: WikiComponentProps) => {
  const { lCoinDropSystem } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    lCoinDropSystemData,
    lCoinDropSystem,
    'text'
  );
  return (
    <WikiLayout
      id={id}
      title={lCoinDropSystem.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  )
}