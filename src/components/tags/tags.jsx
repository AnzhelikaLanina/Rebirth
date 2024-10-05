import styles from "./tags.module.css";
import PropTypes from "prop-types";

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

Tags.propTypes = {
    onTagClick: PropTypes.func.isRequired,
    selectedTag: PropTypes.string.isRequired
};

export default Tags;