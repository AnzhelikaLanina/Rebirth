import styles from './WikiGuaranteedEnhancementContent.module.css';
import {
  guaranteedEnhancementData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiGuaranteedEnhancementContent = ({
  id,
}: WikiComponentProps) => {
  const { guaranteedEnhancement } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    guaranteedEnhancementData,
    guaranteedEnhancement,
    'text',
  );
  return (
    <WikiLayout
      id={id}
      title={guaranteedEnhancement.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
