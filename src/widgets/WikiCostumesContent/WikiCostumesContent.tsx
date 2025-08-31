import styles from './WikiCostumesContent.module.css';
import {
  costumesData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiCostumesContent = ({ id }: WikiComponentProps) => {
  const { costumes } = useLocalizedData();
  const localizedCostumeList = mapWithLocalization(
    costumesData,
    costumes,
    'text',
  );
  return (
    <WikiLayout id={id} title={costumes.header} imgStyle={styles.image}>
      {renderItemCards(localizedCostumeList)}
    </WikiLayout>
  );
};
