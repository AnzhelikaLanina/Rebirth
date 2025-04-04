import styles from "./table-item.module.css";

const TableItem = ({ header,img, src, alt, text }) => {
    return (
        <>
            <div className={`${styles.tableElement} ${header ? styles.tableElementHead : ''}`}>
                {img ? <img src={src} className={styles.img} alt={alt}/> : ''}
                <p className={styles.tableText}>{text}</p>
            </div>
        </>
    )
};

export default TableItem;