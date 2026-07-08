import {
  immortalWeaponSealedData,
  immortalWeaponSealedAncientBossesRewardsData,
  immortalWeaponSealedSorokaRewardsData,
  immortalWeaponSealedCursedEmperorRewardsData,
  immortalWeaponSealedWeekendGameRewardsData,
  immortalWeaponUnsealedData,
  immortalWeaponCursedGrailIntroData,
  immortalWeaponCursedGrailTableData,
  immortalWeaponTobaldsPredictionIntroData,
  immortalWeaponTobaldsPredictionTableData,
  mapWithLocalization,
  parseTextWithIcons,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiImmortalWeaponContent.module.css';

export const WikiImmortalWeaponContent = ({ id }: WikiComponentProps) => {
  const { immortalWeapon, wiki } = useLocalizedData();
  const { sealedWeapon, unsealedWeapon } = immortalWeapon;

  const localizedSealed = mapWithLocalization(
    immortalWeaponSealedData,
    sealedWeapon,
    'text',
  );
  const localizedAncientBossesRewards = mapWithLocalization(
    immortalWeaponSealedAncientBossesRewardsData,
    sealedWeapon.ancientBossesRewards,
    'text',
  );
  const localizedSorokaRewards = mapWithLocalization(
    immortalWeaponSealedSorokaRewardsData,
    sealedWeapon.sorokaRewards,
    'text',
  );
  const localizedCursedEmperorRewards = mapWithLocalization(
    immortalWeaponSealedCursedEmperorRewardsData,
    sealedWeapon.cursedEmperorRewards,
    'text',
  );
  const localizedWeekendGameRewards = mapWithLocalization(
    immortalWeaponSealedWeekendGameRewardsData,
    sealedWeapon.weekendGameRewards,
    'text',
  );

  const localizedUnsealed = mapWithLocalization(
    immortalWeaponUnsealedData,
    unsealedWeapon,
    'text',
  );
  const localizedCursedGrailIntro = mapWithLocalization(
    immortalWeaponCursedGrailIntroData,
    unsealedWeapon.cursedGrail,
    'text',
  );
  const localizedCursedGrailTable = mapWithLocalization(
    immortalWeaponCursedGrailTableData,
    unsealedWeapon.cursedGrail,
    'text',
  );
  const localizedTobaldsIntro = mapWithLocalization(
    immortalWeaponTobaldsPredictionIntroData,
    unsealedWeapon.tobaldsPrediction,
    'text',
  );
  const localizedTobaldsTable = mapWithLocalization(
    immortalWeaponTobaldsPredictionTableData,
    unsealedWeapon.tobaldsPrediction,
    'text',
  );

  return (
    <WikiLayout
      title={wiki.immortalWeaponHeader}
      id={id}
      imgStyle={styles.image}
    >
      <h4 className={styles.subheading}>
        {parseTextWithIcons(sealedWeapon.header)}
      </h4>
      {renderItemCards([localizedSealed[0]])}
      {renderItemCards([localizedSealed[1], localizedSealed[2]])}
      <Table list={localizedAncientBossesRewards} />
      {renderItemCards([localizedSealed[3], localizedSealed[4]])}
      <Table list={localizedSorokaRewards} />
      {renderItemCards([localizedSealed[5], localizedSealed[6]])}
      <Table list={localizedCursedEmperorRewards} />
      {renderItemCards([localizedSealed[7], localizedSealed[8]])}
      <Table list={localizedWeekendGameRewards} />

      <h4 className={styles.subheading}>
        {parseTextWithIcons(unsealedWeapon.header)}
      </h4>
      {renderItemCards([localizedUnsealed[0]])}
      {renderItemCards([localizedUnsealed[1]])}
      {renderItemCards(localizedCursedGrailIntro)}
      <Table list={localizedCursedGrailTable} />
      {renderItemCards(localizedTobaldsIntro)}
      <Table list={localizedTobaldsTable} />
      {renderItemCards([localizedUnsealed[2]])}
    </WikiLayout>
  );
};
