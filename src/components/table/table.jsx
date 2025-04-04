import styles from "./table.module.css";
import TableItem from "../table-item/table-item";

const Table = ({ list }) => {
    return (
        <div className={styles.table}>
            {list.map((item, index) => (
                <TableItem
                    key={index}
                    header={item.header}
                    img={item.img}
                    src={item.src}
                    alt={item.alt}
                    text={item.text}
                />
            ))}
        </div>
    )
};

export default Table;