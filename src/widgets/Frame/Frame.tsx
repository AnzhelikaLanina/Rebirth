import { useState, useEffect } from 'react';
import styles from './Frame.module.css';
import { DATES, pluralize, useLocalizedData } from '@/shared';

type FrameProps = {
  targetDate?: number;
  lower?: boolean;
};

const MS = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  year: 1000 * 60 * 60 * 24 * 365,
} as const;

export const Frame = ({ targetDate, lower }: FrameProps = {}) => {
  const timerTargetMs = {
    x5: new Date(DATES.SERVER_2025).getTime(),
    x10: new Date(DATES.SERVER_2026).getTime(),
    sep2026: new Date(DATES.SERVER_2026_SEP).getTime(),
  } as const;
  const resolvedTargetDate = targetDate ?? timerTargetMs.sep2026;

  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isAfter: false,
  });

  const data = useLocalizedData();
  const t = data.timer;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = resolvedTargetDate - now;
      const abs = Math.abs(distance);

      setTimeLeft({
        years: Math.floor(abs / MS.year),
        days: Math.floor((abs % MS.year) / MS.day),
        hours: Math.floor((abs % MS.day) / MS.hour),
        minutes: Math.floor((abs % MS.hour) / MS.minute),
        seconds: Math.floor((abs % MS.minute) / MS.second),
        isAfter: distance < 0,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [resolvedTargetDate]);

  const hasYears = timeLeft.years > 0;
  const boxes = hasYears
    ? [
        { value: timeLeft.years, forms: t.years },
        { value: timeLeft.days, forms: t.days },
        { value: timeLeft.hours, forms: t.hours },
        { value: timeLeft.minutes, forms: t.minutes },
      ]
    : [
        { value: timeLeft.days, forms: t.days },
        { value: timeLeft.hours, forms: t.hours },
        { value: timeLeft.minutes, forms: t.minutes },
        { value: timeLeft.seconds, forms: t.seconds },
      ];

  return (
    <div className={lower ? `${styles.frame} ${styles.frameLower}` : styles.frame}>
      <h2 className={styles.header}>
        {timeLeft.isAfter ? t.afterStart : t.beforeStart}
      </h2>
      <ul className={styles.container}>
        {boxes.map(({ value, forms }, index) => (
          <li className={styles.box} key={index}>
            <div className={styles.numberBox}>
              <p className={styles.number}>{value}</p>
            </div>
            <p className={styles.description}>{pluralize(value, forms)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
