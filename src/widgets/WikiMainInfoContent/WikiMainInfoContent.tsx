import styles from './WikiMainInfoContent.module.css';
import { Table } from '../Table';
import {
  mainInfoWikiIntroData,
  mainInfoWikiRatesData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
  withChronicleUpdate,
} from '@/shared';

export const WikiMainInfoContent = ({ id }: WikiComponentProps) => {
  const { mainInfoWiki } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    mainInfoWikiIntroData,
    mainInfoWiki,
    'text',
  );
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
      {renderItemCards(localizedIntro)}
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
          {withChronicleUpdate(mainInfoWiki.updateValue)}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>
            {mainInfoWiki.clientLimitLabel}
          </span>
          {mainInfoWiki.clientLimitValue}
        </p>
        <p className={styles.text}>
          <span className={styles.textColor}>
            {mainInfoWiki.restartServerLabel}
          </span>
          {mainInfoWiki.restartServerValue}
        </p>
      </div>
      <Table list={localizedItemsWithoutPremium} />
      <Table list={localizedItemsWithPremium} />
    </WikiLayout>
  );
};
