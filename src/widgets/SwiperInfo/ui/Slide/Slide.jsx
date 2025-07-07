import PropTypes from 'prop-types';
import styles from './Slide.module.css';

export const Slide = ({ header, text }) => {
  return (
    <div className={styles.slide}>
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

Slide.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
