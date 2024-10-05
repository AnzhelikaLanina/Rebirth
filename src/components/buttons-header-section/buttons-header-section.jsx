import Button from "../button/button";
import styles from "./buttons-header-section.module.css";
import discordIcon from "../../images/ic_baseline-discord.svg";
import userIcon from "../../images/clarity_user-solid.svg";

const ButtonsHeaderSection = () => {
    return (
        <div className={styles.buttons}>
            <Button
                className={styles.buttonPink}
                imgSrc={discordIcon}
                text={"Сообщество"}
                classNameText={''}
                url={""}
            />
            <Button
                className={styles.buttonBlue}
                imgSrc={userIcon}
                text={"Личный кабинет"}
                classNameText={''}
                url={""}
            />
        </div>
    )
};

export default ButtonsHeaderSection;