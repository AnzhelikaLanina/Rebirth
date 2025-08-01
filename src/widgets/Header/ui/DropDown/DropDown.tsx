import type { MouseEvent as ReactMouseEvent } from 'react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './DropDown.module.css';
import { useLanguage, useLocalizedData } from '@/shared/lib';
import {
  ArrowDownActiveIcon,
  ArrowDownIcon,
  FlagEnIcon,
  FlagRuIcon,
} from '@/shared/assets/images';

type DropdownProps = {
  onLanguageChange?: () => void;
};

export const DropDown = ({ onLanguageChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { layout } = useLocalizedData();
  const { language, toggleLanguage } = useLanguage();
  const Flag = language === 'ru' ? FlagRuIcon : FlagEnIcon;
  const Arrow = isOpen ? ArrowDownActiveIcon : ArrowDownIcon;
  const OppositeFlag = language === 'ru' ? FlagEnIcon : FlagRuIcon;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (e: ReactMouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    toggleLanguage();
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  useEffect(() => {
    const closeDropdown = (e: globalThis.MouseEvent) => {
      if (
        isOpen &&
        (e.target as HTMLElement).closest(`.${styles.dropDown}`) === null
      ) {
        setIsOpen(false);
      }
    };

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
