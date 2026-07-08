import {
  siegeOfGiranListData,
  siegeOfGiranPointsData,
  siegeOfGiranSkillBonusData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiSiegeOfGiranContent.module.css';

export const WikiSiegeOfGiranContent = ({ id }: WikiComponentProps) => {
  const { siegeOfGiran } = useLocalizedData();
  const localizedList = mapWithLocalization(
    siegeOfGiranListData,
    siegeOfGiran,
    'text',
  );
  const localizedPoints = mapWithLocalization(
    siegeOfGiranPointsData,
    siegeOfGiran,
    'text',
  );
  const localizedSkillBonus = mapWithLocalization(
    siegeOfGiranSkillBonusData,
    siegeOfGiran,
    'text',
  );

  const cardsBeforePoints = localizedList.slice(0, 26);
  const cardsAfterPoints = localizedList.slice(26);

  return (
    <WikiLayout title={siegeOfGiran.header} id={id} imgStyle={styles.image}>
      {renderItemCards(cardsBeforePoints)}
      <Table list={localizedPoints} />
      {renderItemCards(cardsAfterPoints)}
      <Table list={localizedSkillBonus} />
    </WikiLayout>
  );
};
