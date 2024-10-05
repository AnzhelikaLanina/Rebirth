import styles from "./button-show-more.module.css";
import plusIcon from "../../images/plus.svg";
import PropTypes from "prop-types";

const ButtonShowMore = ({ onClick }) => {
    return (
        <div onClick={onClick} className={styles.button}>
            <div className={styles.box}>
                <img src={plusIcon} className={styles.image} alt={'плюс'}/>
                <p className={styles.text}>Загрузить еще</p>
            </div>
        </div>
    )
};

ButtonShowMore.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ButtonShowMore;