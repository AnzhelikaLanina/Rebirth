import {
  raidPointIntroData,
  raidPointBossesData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { TwoColumnTable } from '@/widgets';
import styles from './WikiRaidPointContent.module.css';

export const WikiRaidPointContent = ({ id }: WikiComponentProps) => {
  const { raidPoint, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    raidPointIntroData,
    raidPoint,
    'text',
  );

  return (
    <WikiLayout title={wiki.raidPointHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <TwoColumnTable items={raidPointBossesData} />
    </WikiLayout>
  );
};
