import {
  secretShopIntroData,
  secretShopListData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import styles from './WikiSecretShopContent.module.css';

export const WikiSecretShopContent = ({ id }: WikiComponentProps) => {
  const { secretShop } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    secretShopIntroData,
    secretShop,
    'text',
  );
  const localizedList = mapWithLocalization(
    secretShopListData,
    secretShop,
    'text',
  );

  return (
    <WikiLayout title={secretShop.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedList)}
    </WikiLayout>
  );
};
