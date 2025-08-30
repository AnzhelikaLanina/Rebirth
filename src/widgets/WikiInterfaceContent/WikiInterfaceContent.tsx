import styles from './WikiInterfaceContent.module.css';
import {
  interfaceData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiInterfaceContent = ({ id }: WikiComponentProps) => {
  const { interfaceContent } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    interfaceData,
    interfaceContent,
    'text'
  );
  return (
    <WikiLayout
      id={id}
      title={interfaceContent.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
}