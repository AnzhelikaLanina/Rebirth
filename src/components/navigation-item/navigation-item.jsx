import styles from "./navigation-item.module.css";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import arrow from "../../images/arrow-down-accordion.svg";
import arrowActive from "../../images/arrow-down.svg";

const NavigationItem = ({
                            imgSrc,
                            header,
                            isActive,
                            onClick,
                            activeImgSrc,
                            showDetails,
                            version,
                            date
}) => {
    const isDesktop = useMediaQuery({ query: '(max-width: 1450px)' });
    return (
        <div className={styles.item} onClick={onClick}>
            <img
                src={isActive ? activeImgSrc : imgSrc}
                className={styles.icon}
                alt={header}
            />
            <h2 className={`${styles.text} ${isActive ? styles.textActive : ''}`}>{header}</h2>
            {showDetails && (
                <>
                    <p className={`${styles.textVer} ${styles.textNone} ${isActive ? styles.textActive : ''}`}>{version}</p>
                    <div className={styles.tag}>
                        <p className={styles.tagsText}>
                            {new Date(date).toLocaleDateString('ru-RU', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit'
                            })
                                .replace(/\./g, '/')}
                        </p>
                    </div>
                </>
            )}
            {isDesktop &&
                <img
                    src={isActive ? arrowActive : arrow}
                    className={`${styles.arrow} ${isActive ? styles.rotate : ''}`}
                    alt={'стрелочка'}
                />
            }
        </div>
    );
};

NavigationItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    activeImgSrc: PropTypes.string.isRequired,
    showDetails: PropTypes.bool.isRequired,
    version: PropTypes.string,
    date: PropTypes.string
};

export default NavigationItem;