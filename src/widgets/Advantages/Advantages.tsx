import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styles from './Advantages.module.css';
import {
  getWikiSectionPath,
  MEDIA_BREAKPOINTS,
  OrnamentAdvantagesFrame,
  OrnamentAdvantagesMobileFrame,
  useLocalizedData,
  wikiNavData,
} from '@/shared';

type AdvantageItem = {
  header: string;
  bg: string;
  wikiKey?: string;
};

export const Advantages = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.MOBILE_SWITCH });
  const { wiki, advantages } = useLocalizedData();
  const navigate = useNavigate();

  const items: AdvantageItem[] = [
    { header: wiki.starterKitHeader, bg: styles.bgStarterKit, wikiKey: 'starterKitHeader' },
    { header: wiki.combatPowerHeader, bg: styles.bgCombatPower, wikiKey: 'combatPowerHeader' },
    {
      header: wiki.baseStatBonusesHeader,
      bg: styles.bgBaseStatBonuses,
      wikiKey: 'baseStatBonusesHeader',
    },
    {
      header: wiki.immortalWeaponHeader,
      bg: styles.bgImmortalWeapon,
      wikiKey: 'immortalWeaponHeader',
    },
    { header: wiki.pvpPveSystemHeader, bg: styles.bgPvpPve, wikiKey: 'pvpPveSystemHeader' },
    {
      header: advantages.eventsScheduleHeader,
      bg: styles.bgEventsSchedule,
      wikiKey: 'eventScheduleHeader',
    },
  ];

  const Ornament = isDesktop
    ? OrnamentAdvantagesFrame
    : OrnamentAdvantagesMobileFrame;

  const handleClick = (wikiKey?: string) => {
    if (!wikiKey) return;
    const sectionIndex = wikiNavData.findIndex((nav) => nav.key === wikiKey);
    if (sectionIndex >= 0) {
      navigate(getWikiSectionPath(sectionIndex));
    }
  };

  return (
    <section className={styles.advantages}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div
            className={clsx(styles.ornamentBox, item.wikiKey && styles.clickable)}
            key={index}
            onClick={() => handleClick(item.wikiKey)}
          >
            <Ornament className={styles.ornament} preserveAspectRatio="none" />
            <div className={clsx(styles.item, item.bg)}>
              <div className={styles.overlay} />
              <div className={styles.container}>
                <h3 className={styles.header}>{item.header}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
