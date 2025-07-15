import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItem.module.css';
import clsx from 'clsx';

export const NewsItem = ({
  headerText,
  descriptionText,
  itemStyle,
  size = 'large',
}) => {
  const isLarge = size === 'large';
  const sizeContainerClass = isLarge
    ? styles.containerLarge
    : styles.containerSmall;
  const sizeHeaderClass = isLarge ? styles.headerLarge : styles.headerSmall;
  const sizeDescriptionClass = isLarge
    ? styles.descriptionLarge
    : styles.descriptionSmall;

  return (
    <div className={clsx(styles.item, itemStyle)}>
      <div className={styles.overlay} />
      <div className={sizeContainerClass}>
        <h3 className={sizeHeaderClass}>{headerText}</h3>
        <p className={sizeDescriptionClass}>{descriptionText}</p>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  headerText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  itemStyle: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
};
