import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './DropDown.module.css';
import { useLanguage, useLocalizedData } from '@/shared/lib/hooks';
import {
  ArrowDownActiveIcon,
  ArrowDownIcon,
  FlagEnIcon,
  FlagRuIcon,
} from '@/shared/assets/images';
import PropTypes from 'prop-types';

export const DropDown = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { layout } = useLocalizedData();
  const { language, toggleLanguage } = useLanguage();
  const Flag = language === 'ru' ? FlagRuIcon : FlagEnIcon;
  const Arrow = isOpen ? ArrowDownActiveIcon : ArrowDownIcon;
  const OppositeFlag = language === 'ru' ? FlagEnIcon : FlagRuIcon;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (event) => {
    if (isOpen && event.target.closest(`.${styles.dropDown}`) === null) {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (event) => {
    event.stopPropagation();
    toggleLanguage();
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropDown} onClick={toggleDropdown}>
      <div className={styles.box}>
        <Flag className={styles.imageFlag} />
        <p className={clsx(styles.header, isOpen && styles.headerActive)}>
          {layout.language}
        </p>
        <Arrow
          className={clsx(styles.dropDownArrow, isOpen && styles.rotate)}
        />
      </div>
      <div className={clsx(styles.dropDownContainer, isOpen && styles.show)}>
        <div className={styles.dropDownLine} />
        <div className={styles.dropDownBoxFlags}>
          <OppositeFlag className={styles.imageFlag} />
          <p className={styles.header} onClick={handleLanguageChange}>
            {layout.changeLanguage}
          </p>
        </div>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  onLanguageChange: PropTypes.func,
};
