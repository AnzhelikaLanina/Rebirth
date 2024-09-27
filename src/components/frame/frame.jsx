import React, { useState, useEffect } from "react";
import styles from "./frame.module.css";

const Frame = () => {
    const targetDate = new Date("2024-10-31T00:00:00").getTime(); // Задайте свою дату

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval); // Останавливаем таймер, если время вышло
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Обновляем оставшееся время
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); // Чистим таймер при размонтировании компонента
    }, [targetDate]);

    return (
        <div className={styles.frame}>
            <h2 className={styles.header}>До открытия осталось:</h2>
            <ul className={styles.container}>
                <li className={styles.box}>
                    <div className={styles.numberBox}>
                        <p className={styles.number}>{timeLeft.days}</p>
                    </div>
                    <p className={styles.description}>Дней</p>
                </li>
                <li className={styles.box}>
                    <div className={styles.numberBox}>
                        <p className={styles.number}>{timeLeft.hours}</p>
                    </div>
                    <p className={styles.description}>Часов</p>
                </li>
                <li className={styles.box}>
                    <div className={styles.numberBox}>
                        <p className={styles.number}>{timeLeft.minutes}</p>
                    </div>
                    <p className={styles.description}>Минут</p>
                </li>
                <li className={styles.box}>
                    <div className={styles.numberBox}>
                        <p className={styles.number}>{timeLeft.seconds}</p>
                    </div>
                    <p className={styles.description}>Секунд</p>
                </li>
            </ul>
        </div>
    );
};

export default Frame;