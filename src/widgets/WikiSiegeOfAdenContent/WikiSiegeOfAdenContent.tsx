import {
  siegeOfAdenIntroData,
  siegeOfAdenPhase1Data,
  siegeOfAdenPhase2Data,
  siegeOfAdenPhase3Data,
  siegeOfAdenInfoData,
  siegeOfAdenRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiSiegeOfAdenContent.module.css';

export const WikiSiegeOfAdenContent = ({ id }: WikiComponentProps) => {
  const { siegeOfAden, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    siegeOfAdenIntroData,
    siegeOfAden,
    'text',
  );
  const localizedPhase1 = mapWithLocalization(
    siegeOfAdenPhase1Data,
    siegeOfAden.phase1,
    'text',
  );
  const localizedPhase2 = mapWithLocalization(
    siegeOfAdenPhase2Data,
    siegeOfAden.phase2,
    'text',
  );
  const localizedPhase3 = mapWithLocalization(
    siegeOfAdenPhase3Data,
    siegeOfAden.phase3,
    'text',
  );
  const localizedInfo = mapWithLocalization(
    siegeOfAdenInfoData,
    siegeOfAden,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    siegeOfAdenRewardsData,
    siegeOfAden,
    'text',
  );

  return (
    <WikiLayout title={wiki.siegeOfAdenHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <Table list={localizedPhase1} />
      <Table list={localizedPhase2} />
      <Table list={localizedPhase3} />
      {renderItemCards(localizedInfo)}
      {renderItemCards(localizedRewards)}
    </WikiLayout>
  );
};
