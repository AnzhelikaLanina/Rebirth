import {
  heavenlyArmorIntroData,
  heavenlyArmorSkillsData,
  heavenlyArmorItemsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiHeavenlyArmorContent.module.css';

export const WikiHeavenlyArmorContent = ({ id }: WikiComponentProps) => {
  const { heavenlyArmor, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    heavenlyArmorIntroData,
    heavenlyArmor,
    'text',
  );
  const localizedSkills = mapWithLocalization(
    heavenlyArmorSkillsData,
    heavenlyArmor,
    'text',
  );
  const localizedItems = mapWithLocalization(
    heavenlyArmorItemsData,
    heavenlyArmor.items,
    'text',
  );
  return (
    <WikiLayout title={wiki.heavenlyArmorHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedSkills)}
      <Table list={localizedItems} />
    </WikiLayout>
  );
};
