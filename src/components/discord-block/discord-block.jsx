import styles from "./discord-block.module.css";
import Button from "../button/button";
import discordLogo from "../../images/ic_baseline-discord.svg";
import circlesRight from "../../images/circles-right.svg";
import circlesLeft from "../../images/circles-left.svg";
import girl from "../../images/girl.svg";

const DiscordBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.shadow}></div>
            <div className={styles.eclipse}></div>
            <img src={circlesRight} alt="" className={styles.circles} />
            <img src={circlesLeft} alt="" className={`${styles.circles} ${styles.circlesLeft}`} />
            <img src={girl} alt="Изображение девушки" className={styles.image} />
            <h2 className={styles.header}>Присоединяйся к сообществу</h2>
            <p className={styles.description}>Будь в курсе всех событий! Важные объявления,
                розыгрыши, креатив и пространство для общения.</p>
            <Button
                className={styles.buttonPink}
                text={"Присоединиться"}
                imgSrc={discordLogo}
                url={"https://shikimori.one/animes/35847-ssss-gridman"}
            />
        </div>
    )
}

export default DiscordBlock;