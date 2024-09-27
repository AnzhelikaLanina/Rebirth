import styles from "./navigation-item.module.css";

const NavigationItem = ({ imgSrc, header, isActive, onClick, activeImgSrc, showDetails, version, date }) => {
    return (
        <div className={styles.item} onClick={onClick}>
            <img src={isActive ? activeImgSrc : imgSrc} alt={header} />
            <h2 className={`${styles.text} ${isActive ? styles.textActive : ''}`}>{header}</h2>
            {showDetails && (
                <>
                    <p className={`${styles.text} ${styles.textNone} ${isActive ? styles.textActive : ''}`}>{version}</p>
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
        </div>
    );
};

export default NavigationItem;