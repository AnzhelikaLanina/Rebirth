import {
  serverWarScheduleData,
  serverWarRatingData,
  serverWarZoneData,
  serverWarPointsData,
  serverWarRewardIntroData,
  serverWarRankingData,
  serverWarSeasonData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { TwoColumnTable } from '@/widgets';
import styles from './WikiServerWarContent.module.css';

export const WikiServerWarContent = ({ id }: WikiComponentProps) => {
  const { serverWar, wiki } = useLocalizedData();

  const localizedSchedule = mapWithLocalization(
    serverWarScheduleData,
    serverWar,
    'text',
  );
  const localizedRating = mapWithLocalization(
    serverWarRatingData,
    serverWar,
    'text',
  );
  const localizedZone = mapWithLocalization(
    serverWarZoneData,
    serverWar,
    'text',
  );
  const localizedPoints = mapWithLocalization(
    serverWarPointsData,
    serverWar,
    'text',
  );
  const localizedRewardIntro = mapWithLocalization(
    serverWarRewardIntroData,
    serverWar,
    'text',
  );
  const localizedSeason = mapWithLocalization(
    serverWarSeasonData,
    serverWar,
    'text',
  );

  const rankingTableData = serverWarRankingData.map((row) => ({
    left: serverWar.ranking[row.leftKey],
    right: serverWar.ranking[row.rightKey],
    image: row.image,
    src: row.src,
    alt: row.alt,
  }));

  return (
    <WikiLayout title={wiki.serverWarHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedSchedule)}
      {renderItemCards(localizedRating)}
      {renderItemCards(localizedZone)}
      {renderItemCards(localizedPoints)}
      {renderItemCards(localizedRewardIntro)}
      <TwoColumnTable items={rankingTableData} />
      {renderItemCards(localizedSeason)}
    </WikiLayout>
  );
};
