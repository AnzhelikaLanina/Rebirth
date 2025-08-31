import styles from './WikiMainInfoContent.module.css';
import { Table } from '../Table';
import {
  mainInfoWikiRatesData,
  mapWithLocalization,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiMainInfoContent = ({ id }: WikiComponentProps) => {
  const { mainInfoWiki } = useLocalizedData();
  const localizedItemsWithoutPremium = mapWithLocalization(
    mainInfoWikiRatesData,
    mainInfoWiki.withoutPremium,
    'text',
  );

  const localizedItemsWithPremium = mapWithLocalization(
    mainInfoWikiRatesData,
    mainInfoWiki.withPremium,
    'text',
  );
  return (
    <WikiLayout title={mainInfoWiki.header} id={id} imgStyle={styles.image}>
      <p className={styles.text}>{mainInfoWiki.description}</p>
      <div className={styles.box}>
        <p className={styles.text}>
          <span className={styles.textColor}>
            {mainInfoWiki.serverStartLabel}
          </span>
          {mainInfoWiki.serverStartDate}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>{mainInfoWiki.obtStartLabel}</span>
          {mainInfoWiki.obtStartDate}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>
            {mainInfoWiki.serverTimeLabel}
          </span>
          {mainInfoWiki.serverTimeValue}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>{mainInfoWiki.updateLabel}</span>
          {mainInfoWiki.updateValue}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>
            {mainInfoWiki.clientLimitLabel}
          </span>
          {mainInfoWiki.clientLimitValue}
        </p>
      </div>
      <Table list={localizedItemsWithoutPremium} />;
      <Table list={localizedItemsWithPremium} />;
    </WikiLayout>
  );
};
