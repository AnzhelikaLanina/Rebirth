import styles from './WikiAutoHuntingContent.module.css';
import { mapWithLocalization, useLanguage, useLocalizedData } from '@/shared/lib';
import { Table } from '@/widgets';
import { autoHuntingData } from '@/shared/lib/constants/wiki/autoHuntingData';
import { WikiComponentProps } from '@/shared/types';
import clsx from 'clsx';

export const WikiAutoHuntingContent = ({ id }: WikiComponentProps) => {
  const { autoHunting } = useLocalizedData();
  const { language } = useLanguage();
  const localizedItems = mapWithLocalization(
    autoHuntingData,
    autoHunting.description,
    'text',
  );

  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{autoHunting.header}</h3>
        <div className={clsx(styles.image, language === 'ru' ? styles.imageRu : styles.imageEn)} />
      </div>
      <Table list={localizedItems} />
    </div>
  );
};
