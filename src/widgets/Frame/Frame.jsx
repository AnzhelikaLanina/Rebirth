import React, { useState, useEffect } from 'react';
import styles from './Frame.module.css';
import { useLocalizedData } from '../../shared/lib/hooks';

export const Frame = () => {
  const targetDate = new Date('2025-10-31T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const data = useLocalizedData();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.frame}>
      <h2 className={styles.header}>{data.timer.timer}</h2>
      <ul className={styles.container}>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.days}</p>
          </div>
          <p className={styles.description}>{data.timer.days}</p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.hours}</p>
          </div>
          <p className={styles.description}>{data.timer.hours}</p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.minutes}</p>
          </div>
          <p className={styles.description}>{data.timer.minutes}</p>
        </li>
        <li className={styles.box}>
          <div className={styles.numberBox}>
            <p className={styles.number}>{timeLeft.seconds}</p>
          </div>
          <p className={styles.description}>{data.timer.seconds}</p>
        </li>
      </ul>
    </div>
  );
};
