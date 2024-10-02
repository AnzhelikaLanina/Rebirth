import styles from "./button-download.module.css";
import iconDownload from "../../images/download-icon.svg";

const ButtonDownload = ({ text }) => {
    return (
        <div className={styles.button}>
            <img src={iconDownload} className={styles.icon}/>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ButtonDownload;