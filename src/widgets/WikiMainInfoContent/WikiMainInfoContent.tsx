import styles from './WikiMainInfoContent.module.css';
import {
  mainInfoWikiRatesData,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { Table } from '../Table';

export const WikiMainInfoContent = () => {
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
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{mainInfoWiki.header}</h3>
        <div className={styles.image} />
        <div className={styles.box}>
          <p className={styles.text}>
            <span className={styles.textColor}>
              {mainInfoWiki.serverStartLabel}
            </span>
            {mainInfoWiki.serverStartDate}
          </p>
          <p className={styles.text}>
            <span className={styles.textColor}>
              {mainInfoWiki.obtStartLabel}
            </span>
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
      </div>
      <Table list={localizedItemsWithoutPremium} />
      <Table list={localizedItemsWithPremium} />
    </div>
  );
};
