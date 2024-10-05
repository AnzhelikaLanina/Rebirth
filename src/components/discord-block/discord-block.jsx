import styles from "./discord-block.module.css";
import Button from "../button/button";
import discordIcon from "../../images/ic_baseline-discord.svg";
import circlesRightImage from "../../images/circles-right.svg";
import circlesLeftImage from "../../images/circles-left.svg";
import girlImage from "../../images/girl.svg";

const DiscordBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.shadow}></div>
            <div className={styles.clipContainer}>
                <div className={styles.ellipse}></div>
                <img
                    src={circlesRightImage}
                    alt="розовые огоньки"
                    className={styles.circles}
                />
                <img
                    src={circlesLeftImage}
                    alt="розовые огоньки"
                    className={`${styles.circles} ${styles.circlesLeft}`}
                />
            </div>
            <img
                src={girlImage}
                alt="изображение девушки"
                className={styles.image}
            />
            <h2 className={styles.header}>Присоединяйся к сообществу</h2>
            <p className={styles.description}>Будь в курсе всех событий! Важные объявления,
                розыгрыши, креатив и пространство для общения.</p>
            <Button
                className={styles.buttonPink}
                text={"Присоединиться"}
                imgSrc={discordIcon}
                url={""}
            />
        </div>
    )
};

export default DiscordBlock;