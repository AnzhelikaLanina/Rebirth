import { useState, useEffect } from 'react';
import styles from './Frame.module.css';
import { pluralize, useLocalizedData } from '@/shared';

export const Frame = () => {
  const targetDate = new Date('2025-11-21T20:00:00+03:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
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
      const distance = targetDate - now;
      const abs = Math.abs(distance);

      setTimeLeft({
        days: Math.floor(abs / (1000 * 60 * 60 * 24)),
        hours: Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((abs % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((abs % (1000 * 60)) / 1000),
        isAfter: distance < 0,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.frame}>
      <h2 className={styles.header}>
        {timeLeft.isAfter ? t.afterStart : t.beforeStart}
      </h2>
      <ul className={styles.container}>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.days}</p>
          </div>
          <p className={styles.description}>
            {pluralize(timeLeft.days, t.days)}
          </p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.hours}</p>
          </div>
          <p className={styles.description}>
            {pluralize(timeLeft.hours, t.hours)}
          </p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.minutes}</p>
          </div>
          <p className={styles.description}>
            {pluralize(timeLeft.minutes, t.minutes)}
          </p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.seconds}</p>
          </div>
          <p className={styles.description}>
            {pluralize(timeLeft.seconds, t.seconds)}
          </p>
        </li>
      </ul>
    </div>
  );
};
