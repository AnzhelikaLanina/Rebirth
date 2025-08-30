import styles from './WikiClanBonusesContent.module.css';
import {
  clanBonusesData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiClanBonusesContent = ({ id }: WikiComponentProps) => {
  const { clanBonuses } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    clanBonusesData,
    clanBonuses,
    'text'
  );
  return (
    <WikiLayout
      id={id}
      title={clanBonuses.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  )
}