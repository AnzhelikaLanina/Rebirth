import styles from "./button-show-more.module.css";
import plus from "../../images/plus.svg";

const ButtonShowMore = ( {onClick} ) => {
    return (
        <div onClick={onClick} className={styles.button}>
            <div className={styles.box}>
                <img src={plus} className={styles.image}/>
                <p className={styles.text}>Загрузить еще</p>
            </div>
        </div>
    )
}

export default ButtonShowMore;