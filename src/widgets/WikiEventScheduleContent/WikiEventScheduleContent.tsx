import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  eventScheduleData,
  useLocalizedData,
  wikiNavData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import sNonpvpPeace from '@/shared/assets/images/items/s-nonpvp-peace.png';
import styles from './WikiEventScheduleContent.module.css';

export const WikiEventScheduleContent = ({ id }: WikiComponentProps) => {
  const { wiki, eventSchedule } = useLocalizedData();
  const navigate = useNavigate();

  const days = eventSchedule.days as Record<string, string>;
  const events = eventSchedule.events as Record<string, string>;

  const goToSection = (wikiKey: string) => {
    const index = wikiNavData.findIndex((nav) => nav.key === wikiKey);
    if (index >= 0) {
      navigate(`/wiki?section=${index}`);
    }
  };

  return (
    <WikiLayout
      title={`${wiki.eventScheduleHeader} (${eventSchedule.gmtLabel})`}
      id={id}
      imgStyle={styles.image}
    >
      <div className={styles.days}>
        {eventScheduleData.map((day) => (
          <div className={styles.table} key={day.dayKey}>
            <div className={clsx(styles.element, styles.head)}>
              <img className={styles.dayIcon} src={sNonpvpPeace} alt="" />
              <span className={styles.dayName}>{days[day.dayKey]}</span>
            </div>
            {day.entries.map((entry, entryIndex) => (
              <div className={styles.element} key={entryIndex}>
                <span className={styles.time}>{entry.time}</span>
                <span className={styles.events}>
                  {entry.tokens.map((token, tokenIndex) => (
                    <Fragment key={tokenIndex}>
                      {tokenIndex > 0 && ' '}
                      {token.wikiKey ? (
                        <button
                          type="button"
                          className={styles.link}
                          onClick={() => goToSection(token.wikiKey as string)}
                        >
                          {events[token.labelKey]}
                        </button>
                      ) : (
                        <span>{events[token.labelKey]}</span>
                      )}
                    </Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </WikiLayout>
  );
};
