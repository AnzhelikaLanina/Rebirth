import styles from "./tags.module.css";

const Tags = ({ onTagClick, selectedTag }) => {
    const tags = ['Все', 'Обновления', 'Новости', 'Эвенты']; // Список тегов

    const handleTagClick = (tag) => {
        onTagClick(tag);
    };

    return (
        <ul className={styles.tags}>
            {tags.map(tag => (
                <li
                    key={tag}
                    className={`${styles.tag} ${selectedTag === tag ? styles.tagActive : ''}`}
                    onClick={() => handleTagClick(tag)}
                >
                    <p className={styles.text}>{tag}</p>
                </li>
            ))}
        </ul>
    );
};

export default Tags;