import styles from "./button-download.module.css";
import iconDownload from "../../images/download-icon.svg";
import PropTypes from "prop-types";

const ButtonDownload = ({ text }) => {
    return (
        <div className={styles.button}>
            <img
                src={iconDownload}
                className={styles.icon}
                alt={`иконка кнопки 'Скачать'`}
            />
            <p className={styles.text}>{text}</p>
        </div>
    )
};

ButtonDownload.propTypes = {
    text: PropTypes.string.isRequired
};

export default ButtonDownload;