import clsx from 'clsx';
import styles from './WikiAutoHuntingContent.module.css';
import { Table } from '@/widgets';
import {
  autoHuntingData,
  mapWithLocalization,
  useLanguage,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiAutoHuntingContent = ({ id }: WikiComponentProps) => {
  const { autoHunting } = useLocalizedData();
  const { language } = useLanguage();
  const localizedItems = mapWithLocalization(
    autoHuntingData,
    autoHunting.description,
    'text',
  );
  return (
    <WikiLayout
      id={id}
      title={autoHunting.header}
      imgStyle={clsx(
        styles.image,
        language === 'ru' ? styles.imageRu : styles.imageEn,
      )}
    >
      <Table list={localizedItems} />
    </WikiLayout>
  );
};
