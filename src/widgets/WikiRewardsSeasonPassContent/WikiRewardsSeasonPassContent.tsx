import styles from './WikiRewardsSeasonPassContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  rewardsSeasonPassData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiRewardsSeasonPassContent = ({ id }: WikiComponentProps) => {
  const { rewardsSeasonPass } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    rewardsSeasonPassData,
    rewardsSeasonPass,
    'text',
  );
  return (
    <WikiLayout
      title={rewardsSeasonPass.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
